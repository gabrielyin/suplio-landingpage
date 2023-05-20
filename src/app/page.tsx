import { Header } from '../components/Header'
import { Hero } from '../components/Hero'

import pedidosDashboard from '../assets/pedidos-dashboard.png'
import Image from 'next/image'
import { Button } from '../components/Button'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <main className="h-full min-h-screen bg-[#0A0F20]">
      <Header />

      <div className="absolute h-[400px] w-full bg-radial-header-gradient"></div>

      {/* Hero */}
      <div className="relative pb-[50px] pt-[80px]">
        <Hero />
      </div>

      {/* Funcionalidades */}
      <div className="relative z-0 sm:mb-24">
        <div className="absolute z-[-1] h-[500px] w-full bg-radial-body-gradient"></div>

        <div className="flex flex-col gap-4 px-8 sm:mx-auto sm:max-w-5xl sm:flex-row">
          <div>
            <Image
              className="rounded-lg"
              src={pedidosDashboard}
              alt="Dashboard de pedidos"
            />
          </div>

          <aside className="flex flex-col gap-4">
            <div className="flex h-[180px] gap-3 rounded-lg border border-[#8D8D8D] bg-[#0A0F20]  p-5">
              <aside>
                <div className="rounded-lg bg-[#B9DCCD] p-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 fill-[#83AA99]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </aside>
              <div>
                <h2 className="my-1 text-3xl font-black text-white">Pedidos</h2>
                <p className="laeding-relaxed text-sm text-[#DFDFDF]">
                  Todos seus pedidos na palma da sua mão. Encontre seu pedido
                  filtrando por status ou pela barra de navegação.
                </p>
              </div>
            </div>

            <div className="flex h-[180px] gap-3 rounded-lg border border-[#8D8D8D] bg-[#0A0F20] p-5">
              <aside>
                <div className="rounded-lg bg-[#4692D8] p-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 fill-[#295884]"
                  >
                    <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                    <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                    <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                  </svg>
                </div>
              </aside>
              <div>
                <h2 className="my-1 text-3xl font-black text-white">
                  Fornecedores
                </h2>
                <p className="laeding-relaxed text-sm text-[#DFDFDF]">
                  Disponibilizamos um controle de todos os seus fornecedores do
                  seu comércio.
                </p>
              </div>
            </div>

            <div className="flex h-[180px] gap-3 rounded-lg border border-[#8D8D8D] bg-[#0A0F20] p-5">
              <aside>
                <div className="rounded-lg bg-[#FFFBA6] p-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 fill-[#918f78]"
                  >
                    <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                    <path
                      fillRule="evenodd"
                      d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </aside>
              <div>
                <h2 className="my-1 text-3xl font-black text-white">
                  Produtos
                </h2>
                <p className="laeding-relaxed text-sm text-[#DFDFDF]">
                  Tenha controle de todos os produtos do seu comércio e acesso
                  rápido a todas as informações sobre cada SKU.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Quem deve usar? */}
      <div className="relative z-0">
        <div className="absolute z-[-1] -mt-[100px] h-[500px] w-full bg-radial-body-gradient"></div>

        <div className="mt-10 flex flex-col items-center px-8 pb-24">
          <h1 className="max-w-[500px] text-center text-3xl font-black text-white sm:text-6xl sm:leading-tight">
            Quem deve usar a <span className="text-[#B9DBCD]">Suplio</span>?
          </h1>
          <p className="mb-3 mt-4 text-center font-extralight text-[#DFDFDF] sm:mb-9 sm:max-w-[300px]">
            Qualquer PMEs na área de comércio ou parecido como:
          </p>

          <div className="mb-12 flex flex-col gap-6 md:flex-row lg:gap-20">
            <div className="flex items-center gap-4">
              <span className="rounded-lg bg-[#FDDBB4] p-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-8 w-8 fill-[#E7A04D]"
                >
                  <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 007.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 004.902-5.652l-1.3-1.299a1.875 1.875 0 00-1.325-.549H5.223z" />
                  <path
                    fillRule="evenodd"
                    d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 009.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 002.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3zm3-6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zm8.25-.75a.75.75 0 00-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-5.25a.75.75 0 00-.75-.75h-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <h2 className="text-center text-3xl font-black text-white">
                Lojas
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <span className="rounded-lg bg-[#D8FFA7] p-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-8 w-8 fill-[#91C64E]"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <h2 className="text-center text-3xl font-black text-white">
                Restaurantes
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <span className="rounded-lg bg-[#92B0FF] p-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-8 w-8 fill-[#5E8BFF]"
                >
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
              </span>
              <h2 className="text-center text-3xl font-black text-white">
                Ecommerce
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <p className="text-[#DFDFDF]">Sou PME e</p>{' '}
            <Button text="Tenho interesse" />
          </div>
        </div>
      </div>

      {/* Praticidade & facilidade */}
      <div className="pb-24">
        <div className="flex flex-col items-center px-8">
          <h1 className="text-center text-3xl font-black text-white sm:text-5xl">
            Praticidade & facilidade
          </h1>
          <p className="mb-5 mt-2 max-w-[300px] text-center font-extralight text-[#DFDFDF] sm:mb-7 sm:mt-4">
            Tem interesse em conhecer? entre em contato para uma gestão prática
          </p>
          <Button text="Tenho interesse" />
        </div>
      </div>

      <Footer />
    </main>
  )
}
