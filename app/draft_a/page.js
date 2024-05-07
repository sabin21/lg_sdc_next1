'use client'

import Link from 'next/link'
import './draft_a.scss'
import gsap from 'gsap'
import dynamic from 'next/dynamic'
import React from 'react'
import AppHeader from './app_header'

export default function DraftAHome() {
  const LedMatrix = dynamic(() => import('./led_matrix'), {
    ssr:false
})

  return (
    <>    
    <AppHeader />

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
          <div className='hero-headline-wrap'>
            <img className='hero-headline' src="./img/draft_a/hero_headline.svg" />
            <div className='hero-info-wrap'>
              <span>2024.9.9~10</span>
              <span className='divide-line'></span>
              <span>LG사이언스파크 ISC</span>
            </div>
          </div>
        </div>
        <div className='register-bar'></div>
      </div>
      
      <section className='section-con'>
        <div className='container grid-box-1'>
          <div className='card-wrap long gradient-border'>1</div>
          <div className='card-wrap'>
            <Link href={'/draft_a'}>
              <h3>Keynote</h3>
              <p>실무의 최전선에서 함께하는<br/>LG그룹 임원의 지식 공유</p>
            </Link>
          </div>
          <div className='card-wrap'>
            <Link href={'/draft_a'}>
              <h3>Keynote</h3>
              <p>실무의 최전선에서 함께하는<br/>LG그룹 임원의 지식 공유</p>
            </Link>
          </div>
          <div className='card-wrap'>
            <Link href={'/draft_a'}>
              <h3>Keynote</h3>
              <p>실무의 최전선에서 함께하는<br/>LG그룹 임원의 지식 공유</p>
            </Link>
          </div>
          <div className='card-wrap'>
            <Link href={'/draft_a'}>
              <h3>Keynote</h3>
              <p>실무의 최전선에서 함께하는<br/>LG그룹 임원의 지식 공유</p>
            </Link>
          </div>
        </div>
      </section>

    </div>
    </>
  )
}