import Image from 'next/image'

import Logo from '../assets/logo.svg'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="px-12 sm:mx-auto sm:max-w-5xl sm:py-16">
      <div className="grid w-fit grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-14">
        <div>
          <Image src={Logo} alt="Suplio Logo" />
          <div className="mt-3 flex gap-2 sm:mt-14">
            {/* Logo & Redes Sociais */}
            <div className="rounded-lg bg-gray-400 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram h-6 w-6"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </div>

            <div className="rounded-lg bg-gray-400 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook h-6 w-6"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-1.5 pb-6">
          <Link href="#" className="text-sm uppercase text-white">
            Home
          </Link>
          <Link href="#" className="text-sm uppercase text-white">
            Quero Conhecer
          </Link>
          <Link href="#" className="text-sm uppercase text-white">
            Contato
          </Link>
        </div>
      </div>
    </footer>
  )
}
