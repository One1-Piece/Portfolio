"use client"
import React, {useState, useEffect} from 'react'
import {styles} from '../styles/styles'
import {navLinks} from '../constants'
import { menu, close } from '../public/assets'
import logo from '../public/logo.svg'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
      scrolled ? "bg-primary" : "bg-transparent"
    }`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
    
      <Link
          href='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo.src} alt="logo" className='w-9 h-9 object-contain' />
          {/* <Image src="/logo.svg" alt="logo" width={36} height={36} className="w-9 h-9 object-contain" /> */}
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Mohammed Taha &nbsp;
            <span className='sm:block hidden'>| Porfolio </span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          
          <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? menu.src : close.src} alt="menu" width={28} height={28} className="object-contain cursor-pointer" onClick={() => setToggle(!toggle)}  />
          {/* <Image src={toggle ? menu : close} alt="menu" width={28} height={28} className="object-contain cursor-pointer" onClick={() => setToggle(!toggle)}  /> */}
            <div className={`${toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

      </div>
    </nav>
  )
}

export default Navbar