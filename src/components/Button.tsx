import React from 'react'

interface ButtonProps {
  text: string
  onClick: () => void
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      className="rounded-md bg-[#00B25D] px-3 py-2 text-white transition hover:bg-opacity-80"
      onClick={onClick}
    >
      {text}
    </button>
  )
}
