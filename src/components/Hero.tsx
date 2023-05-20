import { Button } from './Button'

interface HeroProps {
  openModal: () => void
}

export function Hero({ openModal }: HeroProps) {
  return (
    <div className="my-10 flex flex-col items-center px-8 sm:mx-auto sm:max-w-[800px]">
      <h1 className="text-center text-3xl font-black text-white sm:text-6xl sm:leading-snug md:text-7xl md:leading-snug">
        Sistema de <span className="text-[#B9DBCD]">gestão</span> para PMEs
      </h1>
      <p className="mb-8 mt-3 text-center font-extralight text-[#DFDFDF] sm:max-w-[500px] sm:text-xl">
        Faça a gestão dos seus pedidos, fornecedores e estoque
      </p>
      <Button text="Tenho interesse" onClick={openModal} />
    </div>
  )
}
