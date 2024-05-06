'use client'

import Link from 'next/link'
import './draft_a.scss'
import gsap from 'gsap'
import dynamic from 'next/dynamic'
import React from 'react'

export default function DraftAHome() {
  const LedMatrix = dynamic(() => import('./led_matrix'), {
    ssr:false
})

  return (
    <>
    <header className='header'>
      <ul className='gnb-menu-wrap'>
        <li><Link href={'/'}>Keynote</Link></li>
        <li><Link href={'/'}>Keynote</Link></li>
        <li><Link href={'/'}>Keynote</Link></li>
        <li><Link href={'/'}>Keynote</Link></li>
        <li><Link href={'/'}>Keynote</Link></li>
        <li><Link href={'/'}>FAQ</Link></li>
      </ul>
    </header>

    <div className="page-wrap">
      <div className='section-hero'>
        <div className='hero-back-mask'>
          <LedMatrix
            cell={'#555555'}
            frame={'#111111'}
            fps={24}
            amount={1200}
            noise={0.004}
            size={20}
            border={2}
            track={'#000000'}
          />
        </div>
        <div className='hero-headline-wrap'>
          <img src="./img/draft_a/hero_headline.svg" />
        </div>
      </div>
      
      <section className='section-con'>
        <div className='container grid-box-1'>
          <div className='card-wrap long gradient-border'>1</div>
          <div className='card-wrap'>1</div>
          <div className='card-wrap'>1</div>
          <div className='card-wrap'>1</div>
          <div className='card-wrap'>1</div>
        </div>
      </section>

    </div>
    </>
  )
}