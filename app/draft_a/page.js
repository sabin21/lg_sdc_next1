'use client'
import './draft_a.scss'

import React, { useLayoutEffect, useRef } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import AppHeader from '../components/app_header_a'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function DraftAHome() {
  const LedMatrix = dynamic(() => import('./led_matrix'), {
    ssr:false
  });

  const registerBtn = useRef(null);
  const pageBack = useRef(null);
  const pageBack2 = useRef(null);

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);

    const tlRegister = gsap.timeline({
      scrollTrigger: {
          trigger: document.documentElement,
          scrub: true, start: "top", end: "+=300px",
      },
    });

    tlRegister
    .to(registerBtn.current, {height: "100px", width: "100px", right:"20px", bottom:"20px", fontSize:"16px"}, 0);

    const tlBackColor = gsap.timeline({
      scrollTrigger: {
          trigger: document.documentElement,
          scrub: true, start: "top", end: "+=800px",
      },
    });
    tlBackColor.to(pageBack.current, {
      backgroundColor:"black"
    });

    const tlBackColor2 = gsap.timeline({
      scrollTrigger: {
          trigger: document.documentElement,
          scrub: true, 
          start: document.body.offsetHeight*0.4, end: 'bottom-=800px',
          // start: '1500px', end: 'bottom-=800px'
      },
    });
    tlBackColor2.to(pageBack2.current, {
      backgroundColor:"#3C1272"
    });

  }, []);


  return (
    <>
    <span className='body-back-color' ref={pageBack}></span>
    <span className='body-back-color2' ref={pageBack2}></span>
    <AppHeader />
    <button className="btn-register" ref={registerBtn}>
      사전등록
    </button>
    <div className="page-wrap">
      <div className='section-hero'>
        <div className='hero-back-mask'>
          {/* <LedMatrix
            cell={'#555555'}
            frame={'#111111'}
            fps={24}
            amount={1200}
            noise={0.004}
            size={20}
            border={2}
            track={'#000000'}
          /> */}
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
              <span className='card-title'>
                <h3>Keynote</h3>
                <p>실무의 최전선에서 함께하는<br/>LG그룹 임원의 지식 공유</p>
              </span>
              <svg className='card-icon' width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60.3003 23.1345C64.4452 15.3853 75.5548 15.3853 79.6997 23.1345L80.9181 25.4124C83.3921 30.0378 88.7879 32.2729 93.8079 30.7516L96.2802 30.0024C104.691 27.4537 112.546 35.3094 109.998 43.7198L109.248 46.1921C107.727 51.2121 109.962 56.6079 114.588 59.0819L116.866 60.3003C124.615 64.4452 124.615 75.5548 116.866 79.6997L114.588 80.9181C109.962 83.3921 107.727 88.7879 109.248 93.8079L109.998 96.2802C112.546 104.691 104.691 112.546 96.2802 109.998L93.8079 109.248C88.7879 107.727 83.3921 109.962 80.9181 114.588L79.6997 116.866C75.5548 124.615 64.4452 124.615 60.3003 116.866L59.0819 114.588C56.6079 109.962 51.2121 107.727 46.1921 109.248L43.7198 109.998C35.3094 112.546 27.4537 104.691 30.0024 96.2802L30.7516 93.8079C32.2729 88.7879 30.0378 83.3921 25.4124 80.9181L23.1345 79.6997C15.3853 75.5548 15.3853 64.4452 23.1345 60.3003L25.4124 59.0819C30.0378 56.6079 32.2729 51.2121 30.7516 46.1921L30.0024 43.7198C27.4537 35.3094 35.3094 27.4537 43.7198 30.0024L46.1921 30.7516C51.2121 32.2729 56.6079 30.0378 59.0819 25.4124L60.3003 23.1345Z" fill="#71CDEA"/>
              </svg>
            </Link>
          </div>
          <div className='card-wrap'>
            <Link href={'/draft_a'}>
              <span className='card-title'>
                <h3>Keynote</h3>
                <p>실무의 최전선에서 함께하는<br/>LG그룹 임원의 지식 공유</p>
              </span>
              <svg className='card-icon' width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M69.563 81.4039C63.085 101.151 40.1529 115.747 12.8572 115.747V24.2856C40.1529 24.2856 63.085 38.8818 69.563 58.6286C76.041 38.8819 98.9731 24.2857 126.269 24.2857V115.747C98.9731 115.747 76.041 101.151 69.563 81.4039Z" fill="#FF8585"/>
              </svg>              
            </Link>
          </div>
          <div className='card-wrap'>
            <Link href={'/draft_a'}>
              <span className='card-title'>
                <h3>Keynote</h3>
                <p>실무의 최전선에서 함께하는<br/>LG그룹 임원의 지식 공유</p>
              </span>
              <svg className='card-icon' width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M63.4924 21.4204C65.8285 15.5258 74.1715 15.5257 76.5076 21.4204L83.2323 38.3886C84.4291 41.4085 87.5464 43.2083 90.7601 42.7348L108.817 40.0745C115.09 39.1503 119.262 46.3755 115.325 51.3459L103.992 65.6538C101.975 68.2003 101.975 71.7997 103.992 74.3462L115.325 88.6541C119.262 93.6245 115.09 100.85 108.817 99.9255L90.7601 97.2652C87.5464 96.7917 84.4291 98.5915 83.2323 101.611L76.5076 118.58C74.1715 124.474 65.8285 124.474 63.4924 118.58L56.7677 101.611C55.5709 98.5915 52.4536 96.7917 49.2399 97.2652L31.1826 99.9255C24.9097 100.85 20.7382 93.6245 24.675 88.6541L36.0076 74.3462C38.0245 71.7997 38.0245 68.2003 36.0076 65.6538L24.675 51.3459C20.7382 46.3755 24.9096 39.1503 31.1826 40.0745L49.2398 42.7348C52.4536 43.2083 55.5709 41.4085 56.7677 38.3886L63.4924 21.4204Z" fill="#5CE050"/>
              </svg>
            </Link>
          </div>
          <div className='card-wrap'>
            <Link href={'/draft_a'}>
              <span className='card-title'>
                <h3>Keynote</h3>
                <p>실무의 최전선에서 함께하는<br/>LG그룹 임원의 지식 공유</p>
              </span>
              <svg className='card-icon' width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M120 35C120 41.8136 114.548 47.9906 105.707 52.5C114.548 57.0094 120 63.1864 120 70C120 76.8136 114.548 82.9906 105.707 87.5C114.548 92.0094 120 98.1864 120 105C120 118.807 97.6142 130 70 130C42.3858 130 20 118.807 20 105C20 98.1864 25.4516 92.0094 34.2928 87.5C25.4516 82.9906 20 76.8136 20 70C20 63.1864 25.4516 57.0094 34.2928 52.5C25.4516 47.9906 20 41.8136 20 35C20 21.1929 42.3858 10 70 10C97.6142 10 120 21.1929 120 35Z" fill="#FCB141"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className='section-con'>

      </section>

    </div>
    </>
  )
}