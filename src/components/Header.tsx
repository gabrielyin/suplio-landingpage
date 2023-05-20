'use client'

import Image from 'next/image'

import Logo from '../assets/logo.svg'
import { useEffect, useState } from 'react'
import { Button } from './Button'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsScrolled(true) : setIsScrolled(false)
    })
  })

  return (
    <header
      className={
        'fixed z-[2] h-[80px] w-full backdrop-blur-lg transition-all ' +
        (isScrolled ? 'bg-[#0A0F20aa]' : '')
      }
    >
      <div className="flex h-full items-center justify-between px-7 sm:mx-auto sm:max-w-6xl">
        <div>
          <Image src={Logo} alt="Suplio logo" />
        </div>
        {/* Mobile Navigation */}
        <nav>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 96 960 960"
            width="48"
            className="h-8 w-8 fill-[#B9DBCD] sm:hidden"
          >
            <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
          </svg>
        </nav>

        {/* Web Navigation */}
        <nav className="hidden sm:flex sm:items-center">
          <button className="rounded-md px-4 py-2 text-[#B9DBCD] transition hover:bg-[#0A0F20] hover:bg-opacity-20">
            Instagram
          </button>
          <Button text="Tenho interesse" />
        </nav>
      </div>
    </header>
  )
}
