interface buttonProps {
  text: string
}

export function Button({ text }: buttonProps) {
  return (
    <button className="rounded-md bg-[#00B25D] px-3 py-2 text-white transition hover:bg-opacity-80">
      {text}
    </button>
  )
}
