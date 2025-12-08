import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-red-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
      aria-label="Tornar a dalt"
    >
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  )
}

const sponsors = [
  { src: '/logos/Cursa/Sponsors/Bensec.png', alt: 'Bensec' },
  { src: '/logos/Cursa/Sponsors/Congost.png', alt: 'Congost Vigilancia y Seguridad' },
  { src: '/logos/Cursa/Sponsors/El Comparador Seguro.png', alt: 'El Comparador Seguro' },
  { src: '/logos/Cursa/Sponsors/Fumirrat.png', alt: 'Grupo Fumirrat - Cubas Palau' },
  { src: '/logos/Cursa/Sponsors/Marcilla.png', alt: 'Marcilla Café' },
  { src: '/logos/Cursa/Sponsors/Mirassport.png', alt: 'Mirassport' },
  { src: '/logos/Cursa/Sponsors/Ibis.png', alt: 'Ibis Hotels' },
  { src: '/logos/Cursa/Sponsors/Neoris.png', alt: 'Neoris' },
  { src: '/logos/Cursa/Sponsors/Solblat.png', alt: 'Solblat Flequers 1875' },
  { src: '/logos/Cursa/Sponsors/Esports10.png', alt: 'Esports 10' },
  { src: '/logos/Cursa/Sponsors/Caprabo.png', alt: 'Caprabo' },
  { src: '/logos/Cursa/Sponsors/FerreteriaMunosa.png', alt: 'Ferreteria de la Muñoza' },
]

const organizers = [
  { src: '/logos/Cursa/Organizers/Captura de pantalla 2025-12-08 a las 16.33.03.png', alt: 'Ajuntament de Mollet del Vallès' },
  { src: '/logos/Cursa/Organizers/Captura de pantalla 2025-12-08 a las 16.33.12.png', alt: 'Club Atlètic Mollet' },
]

const collaborators = [
  { src: '/logos/Cursa/Colaborators/guttmann.png', alt: 'Institut Guttmann' },
  { src: '/logos/Cursa/Colaborators/jordi_sole_tura.png', alt: 'Grup d\'Amics i Amigues Jordi Solé Tura' },
  { src: '/logos/Cursa/Colaborators/fca.png', alt: 'Federació Catalana d\'Atletisme' },
  { src: '/logos/Cursa/Colaborators/diputacio_Barcelona.png', alt: 'Diputació Barcelona' },
]

function LogoGrid({ logos, centered = false }) {
  return (
    <div className={centered
      ? "flex flex-wrap justify-center gap-4 sm:gap-6"
      : "grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4"
    }>
      {logos.map((logo, i) => (
        <div
          key={i}
          className={`flex h-24 items-center justify-center rounded-lg bg-white p-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg sm:h-28 sm:p-4 ${centered ? 'w-40 sm:w-48' : ''}`}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={150}
            height={80}
            className="h-auto max-h-16 w-auto object-contain sm:max-h-20"
          />
        </div>
      ))}
    </div>
  )
}

function Section({ title, children, className = '', id }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`scroll-animate py-10 sm:py-16 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 sm:mb-10 sm:text-3xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}

export default function Index() {
  return (
    <>
      <Head>
        <title>Club Atlètic Mollet - Cursa Sant Vicenç 2026</title>
        <meta
          name="description"
          content="Cursa Sant Vicenç 2026 - Cursa urbana organitzada pel Club Atlètic Mollet"
        />
      </Head>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-red-50 to-white">
        {/* Animated background gradient */}
        <div className="animate-gradient absolute inset-0 bg-gradient-to-br from-red-100/30 via-transparent to-red-100/30" />

        <div className="relative flex flex-col items-center px-4 py-8">
          {/* Action Buttons - Centered above poster */}
          <div className="animate-fade-in-up mb-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <Link
              href="https://xipgroc.cat/ca/curses/Mollet2026/10k/inscripcio/llarga"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-pulse-glow inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-red-500 sm:px-8 sm:py-4 sm:text-lg"
            >
              <svg
                className="mr-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              Inscripció 10 km
            </Link>

            <Link
              href="https://xipgroc.cat/ca/curses/Mollet2026/5k/inscripcio/curta"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-pulse-glow inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-red-500 sm:px-8 sm:py-4 sm:text-lg"
            >
              <svg
                className="mr-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              Inscripció 5 km
            </Link>

            <Link
              href="/reglament"
              className="inline-flex items-center justify-center rounded-full bg-gray-800 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-700 sm:px-8 sm:py-4 sm:text-lg"
            >
              <svg
                className="mr-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Reglament
            </Link>

            <Link
              href="/docs/CSV2026 - Díptic.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gray-800 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-700 sm:px-8 sm:py-4 sm:text-lg"
            >
              <svg
                className="mr-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Descarrega informació
            </Link>
          </div>

          {/* Poster and Obsequi Container */}
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-center lg:gap-12">
            {/* Race Poster */}
            <div className="animate-fade-in-scale animation-delay-200">
              <div className="animate-float">
                <div className="overflow-hidden rounded-2xl shadow-2xl transition-shadow duration-300 hover:shadow-red-200/50">
                  <Image
                    src="/PosterCursa2026.jpeg"
                    alt="Cursa Sant Vicenç 2026"
                    width={600}
                    height={848}
                    priority
                    className="h-auto w-full max-w-md sm:max-w-lg lg:max-w-xl"
                  />
                </div>
              </div>
            </div>

            {/* Obsequi - Runner's Gift */}
            <div className="animate-slide-in-right animation-delay-600 flex flex-col items-center">
              <p className="mb-4 w-full max-w-sm text-center text-xl font-bold leading-relaxed text-gray-800 sm:max-w-md sm:text-2xl lg:max-w-lg">
                Obsequi de productes dels patrocinadors a més d&apos;una samarreta de màniga curta.
              </p>
              <div className="animate-float-rotate">
                <div className="rounded-2xl bg-white p-4 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
                  <Image
                    src="/logos/Cursa/Obsequi.png"
                    alt="Samarreta oficial Cursa Sant Vicenç 2026"
                    width={500}
                    height={500}
                    className="h-auto w-full max-w-sm sm:max-w-md lg:max-w-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <Section title="Patrocinadors" className="bg-white" id="patrocinadors">
        <LogoGrid logos={sponsors} />
      </Section>

      {/* Organizers Section */}
      <Section title="Organitzadors" className="bg-gray-50" id="organitzadors">
        <LogoGrid logos={organizers} centered />
      </Section>

      {/* Collaborators Section */}
      <Section title="Col·laboradors" className="bg-white" id="colaboradors">
        <LogoGrid logos={collaborators} />
      </Section>

      <BackToTop />
    </>
  )
}
