'use client'
import React from 'react'
import gsap from 'gsap'

// const DPR = window.devicePixelRatio
const DPR = 2

export default function LedMatrix({ cell, frame, fps, amount, noise, size, border, track }) {
  const containerRef = React.useRef(null)
  const canvasRef = React.useRef(null)
  const contextRef = React.useRef(null)
  const gridContextRef = React.useRef(null)
  const cellsRef = React.useRef(null)
  const gridCanvasRef = React.useRef(null)
  const hOffset = React.useRef(null)
  const vOffset = React.useRef(null)
  const columns = React.useRef(null)
  const rows = React.useRef(null)

  const updateCells = () => {
    cellsRef.current = cellsRef.current.map(([x, y]) => {
      return [
        Math.random() > (1 - noise) ? Math.floor(Math.random() * columns.current) : x,
        Math.random() > (1 - noise) ? Math.floor(Math.random() * rows.current) : y,
       ]
    })
  }

  const draw = () => {
    contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    contextRef.current.drawImage(gridCanvasRef.current, 0, 0, gridCanvasRef.current.width, gridCanvasRef.current.height)
    updateCells()
    for (let i = 0; i < cellsRef.current.length; i++) {
      const [x, y] = cellsRef.current[i]
      contextRef.current.fillStyle = cell
      contextRef.current.fillRect(
        (x * size) + hOffset.current + border,
        (y * size) + vOffset.current + border,
        size - border * 2,
        size - border * 2
      )
    }
  }

  const setGrid = () => {
    gridContextRef.current.clearRect(0, 0, gridCanvasRef.current.width, gridCanvasRef.current.height)
    gridContextRef.current.fillStyle = track
    columns.current = Math.ceil(gridCanvasRef.current.width / size)
    hOffset.current = (gridCanvasRef.current.width % size) * 0.5
    for (let h = 0; h < columns.current; h++) {
      gridContextRef.current.fillRect(h * size + (hOffset.current) - border, 0, border * 2, gridCanvasRef.current.height)
    }
    rows.current = Math.ceil(gridCanvasRef.current.height / size)
    vOffset.current = (gridCanvasRef.current.height % size) * 0.5
    for (let v = 0; v < rows.current; v++) {
      gridContextRef.current.fillRect(0, v * size + (vOffset.current) - border, gridCanvasRef.current.width, border * 2)
    }
    cellsRef.current = new Array(amount).fill(0).map(() => ([
      Math.floor(Math.random() * columns.current),
      Math.floor(Math.random() * rows.current)
    ]))
  }

  const refresh = () => {
    for (const listener of gsap.ticker._listeners) {
      if (listener.name === 'draw') gsap.ticker.remove(listener)
    }
    canvasRef.current.width = gridCanvasRef.current.width = containerRef.current.offsetWidth
    canvasRef.current.height = gridCanvasRef.current.height = containerRef.current.offsetHeight
    contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    setGrid()
    gsap.ticker.add(draw)
  }

  React.useEffect(() => {
    gridCanvasRef.current = Object.assign(document.createElement('canvas'), {
      width: containerRef.current.innerWidth * DPR,
      height: containerRef.current.innerHeight * DPR,
    })
    contextRef.current = canvasRef.current.getContext('2d')
    gridContextRef.current = gridCanvasRef.current.getContext('2d')
    const CanvasObserver = new ResizeObserver(() => refresh())
    CanvasObserver.observe(containerRef.current)
    gsap.ticker.add(draw)
  }, [])

  React.useEffect(() => {
    gsap.ticker.fps(fps)
    refresh()

  }, [cell, frame, fps, amount, noise, size, border])

  return (
    <div ref={containerRef} className="canvas-hero" id='canvas-hero' style={{'--cell': frame}}>
      <canvas ref={canvasRef} />
    </div>
  )
}