'use client'

import dynamic from 'next/dynamic'
import './draft_b.scss'
import React from 'react'

const Scene = dynamic(() => import('./Scene'), {
    ssr:false
})
export default function DraftBHome() {

  return (
    <div className="page-wrap">
      <div className='section-hero'>
        <Scene className='canvas-hero' id='canvas-hero' />
      </div>
      
    </div>
  )
}