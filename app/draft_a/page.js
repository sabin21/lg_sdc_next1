'use client'
import './draft_a.scss'

import React, { useLayoutEffect, useRef } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import AppHeader from './app_header'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function DraftAHome() {
  const LedMatrix = dynamic(() => import('./led_matrix'), {
    ssr:false
  });

  const registerBtn = useRef(null);
  const registerBtnText = useRef(null);

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);

    const tlRegister = gsap.timeline({
        scrollTrigger: {
            trigger: document.documentElement,
            scrub: true,
            start: "top",
            end: "+=300px",
        },
    })

    tlRegister
    .to(registerBtn.current, {height: "100px", width: "100px", right:"20px", bottom:"20px", fontSize:"16px"}, 0)
  }, [])

  return (
    <>
    <span className='body-back-color'></span>
    <AppHeader />
    <botton className="btn-register" ref={registerBtn}>
      사전등록
    </botton>
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
        <div className='register-bar'>
          <div className='text-wrap'>
            <span>LG그룹 개발자 여러분의 경험과 열정을 공유하고 지식과 혁신적인 아이디어를 나누는 자리</span>
          </div>
        </div>
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