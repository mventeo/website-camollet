import { MailIcon, PhoneIcon, HomeIcon } from '@heroicons/react/outline'
import { Container } from '@/components/Container'
import Link from 'next/link'

export function HomeContact() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
              Secretaria Club Atlètic Mollet
            </h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                Atenció al soci, altes/baixes, gestió atletes, fitxes
                federatives i atenció a families de l&lsquo;Escola (només
                dimecres)
              </p>
            </div>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <PhoneIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>+34 935 791 013</p>
                  <p className="mt-1">Dill, Dim i Div 18:00 a 20:30</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <HomeIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>Avda. Rívoli 8-10, 08100, Mollet del Vallès</p>
                  <p className="mt-1">Dill, Dim i Div 18:00 a 20:30</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <MailIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <Link href="mailto://camollet@camollet.cat">
                    camollet@camollet.cat
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
              On som?
              <span className="text-sm">
                Pistes municipals &ldquo;La Pedra Salvadora&rdquo;
              </span>
            </h2>
            <iframe
              className="h-full w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.963751205537!2d2.2094421161549738!3d41.548382093960555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4bf250bc8604b%3A0xf5e3faaf643f17d0!2sClub%20Atl%C3%A8tic%20Mollet!5e0!3m2!1ses!2ses!4v1661190128653!5m2!1ses!2ses"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}
