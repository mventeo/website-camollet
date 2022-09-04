import Link from 'next/link'
import { HomeContact } from './HomeContact'

/* This example requires Tailwind CSS v2.0+ */
const navigation = {
  club: [
    { name: 'Gimnàs', href: '/club/gimnas' },
    // { name: 'Marketing', href: '#' },
  ],
  escola: [
    { name: 'Calendari Escola', href: '/calendar' },
    // { name: 'Documentation', href: '#' },
    // { name: 'Guides', href: '#' },
    // { name: 'API Status', href: '#' },
  ],
  grups: [
    // { name: 'About', href: '#' },
    // { name: 'Blog', href: '#' },
    // { name: 'Jobs', href: '#' },
    // { name: 'Press', href: '#' },
    // { name: 'Partners', href: '#' },
  ],
  competicions: [
    // { name: 'Claim', href: '#' },
  ],
  legal: [
    { name: 'Avís Legal', href: '/legal' },
    // { name: 'Privacy', href: '#' },
    // { name: 'Terms', href: '#' },
  ],
  links: [
    {
      name: "Federació Catalana d'Atletisme",
      href: 'https://fcatletisme.cat/',
      target: '_blank',
      img: '/logos/logo_escut.png',
    },
    {
      name: 'Real Federación Española de Atletismo',
      href: 'https://www.rfea.es',
      target: '_blank',
      img: '/logos/logo_rfea.png',
    },
    // { name: 'Privacy', href: '#' },
    // { name: 'Terms', href: '#' },
  ],

  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
}

export function Footer({ showContact = true }) {
  return (
    <>
      {showContact == true && <HomeContact />}
      <footer className="bg-gray-100 pt-2" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2">
            {/* Logo Club */}
            <div className="items-start">
              <div>
                <picture>
                  <source srcSet="/logos/Logo CAM.png" media="image/png" />
                  <img src="/logos/Logo CAM.png" alt="" className="h-48 w-48" />
                </picture>
              </div>
              <p className="text-base font-semibold text-gray-500">
                Fem atletisme des de 1931
              </p>

              <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            {/* Sponsors */}
            <div className="relative items-end">
              <p className="text-center text-base font-semibold text-gray-500">
                Patrocinador Principal
              </p>
              <div className="mt-4 flex justify-center">
                <picture>
                  <source srcSet="/logos/cubas-palau.png" media="image/png" />
                  <img
                    src="/logos/cubas-palau.png"
                    alt=""
                    className="h-24 w-auto"
                  />
                </picture>
              </div>
            </div>
          </div>
          <hr className="mt-6" />
          <div className="grid grid-cols-2 gap-8 pt-6 lg:grid-cols-6 xl:mt-0">
            <div>
              <h3 className="text-base font-medium text-gray-900">Club</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.club.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                <li>
                  <Link
                    href="https://assets.ctfassets.net/8rp1uuyxnm8g/7lShD021W2i2vZm9bWRg0r/7246dcdd2220bcb7a4f38a882e5305a7/Regalment_regim_intern_CAMollet.pdf"
                    target="_blank"
                  >
                    Reglament Intern
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-base font-medium text-gray-900">Escola</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.escola.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-medium text-gray-900">
                Tecnificació
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.grups.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:grid md:grid-cols-3 md:gap-8">
              <h3 className="text-base font-medium text-gray-900">
                Competicions
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.competicions.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="justify-center text-base font-medium text-gray-900">
                Enllaços
              </h3>
              <ul role="list" className="mt-1 text-center">
                {navigation.links.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="flex justify-center text-base text-gray-500 hover:text-gray-900"
                      target={item.target}
                    >
                      <picture>
                        <source srcSet={item.img} />
                        <img src={item.img} alt={item.name} />
                      </picture>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-base font-medium text-gray-900">Legal</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                    />
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2022 Club Atlètic Mollet. Tots els drets reservats.
          </p>
        </div>
      </footer>
    </>
  )
}
