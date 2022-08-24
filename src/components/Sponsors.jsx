import Link from 'next/link'
import { Container } from './Container'

export function Sponsors() {
  return (
    <Container>
      <div className="bg-white py-12 ">
        <p className="font-sans text-xl font-semibold uppercase text-red-400">
          Patrocinador del Club:
        </p>
        <div className="mx-auto max-w-7xl ">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-3">
            <div className="col-span-1 flex justify-center  bg-red-500 md:col-span-2 lg:col-span-1">
              <Link href="https://www.cubaspalau.com/" target="_blank">
                <picture>
                  <source srcSet="/logos/cubas-palau.png" media="image/png" />
                  <img
                    className="h-14 w-auto"
                    src="/logos/cubas-palau.png"
                    alt="Tuple"
                  />
                </picture>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </Container>
  )
}
