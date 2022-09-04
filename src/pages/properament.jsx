import Link from 'next/link'
import Image from 'next/image'

export default function ComingSoon() {
  return (
    <>
      <div className="flex min-h-full flex-col bg-white lg:relative">
        <div className="flex flex-grow flex-col">
          <div className="mb-96 flex flex-grow flex-col bg-white">
            <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col px-4 sm:px-6 lg:px-8">
              <div className="my-auto flex-shrink-0 py-16 sm:py-32">
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Properament
                </h1>
                <p className="mt-2 w-1/2 pr-4 text-justify text-base text-gray-500">
                  Ho sentim, estem migrant contingut i aquest encara no està
                  disponible, però aviat estarà de nou disponible.
                </p>
                <div className="mt-6">
                  <Link
                    href="/"
                    className="text-base font-medium text-red-600 hover:text-red-500"
                  >
                    Torna a inici
                    <span aria-hidden="true"> &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-1/2">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
            layout="fill"
          />
        </div>
      </div>
    </>
  )
}
