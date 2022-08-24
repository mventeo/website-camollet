/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          sky: colors.sky,
          teal: colors.teal,
          cyan: colors.cyan,
          rose: colors.rose,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/line-clamp'),
    ],
  }
  ```
*/
import Link from 'next/link'
import { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  BellIcon,
  CashIcon,
  ClockIcon,
  MenuIcon,
  ReceiptRefundIcon,
  UsersIcon,
  XIcon,
  HomeIcon,
  ChevronRightIcon,
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'
import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { Footer } from '@/components/Footer'

const user = {
  name: 'Chelsea Hagon',
  email: 'chelsea.hagon@example.com',
  role: 'Human Resources Manager',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Club', href: '#', current: true },
  { name: 'Escola', href: '#', current: false },
  { name: 'Cursa Sant Vicenç', href: '#', current: false },
  { name: 'Miting Ciutat de Mollet', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
const stats = [
  { label: 'Vacation days left', value: 12 },
  { label: 'Sick days left', value: 4 },
  { label: 'Personal days left', value: 2 },
]
const actions = [
  {
    icon: ClockIcon,
    name: 'Request time off',
    href: '#',
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
  },
  {
    icon: BadgeCheckIcon,
    name: 'Benefits',
    href: '#',
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    icon: UsersIcon,
    name: 'Schedule a one-on-one',
    href: '#',
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
  {
    icon: CashIcon,
    name: 'Payroll',
    href: '#',
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    icon: ReceiptRefundIcon,
    name: 'Submit an expense',
    href: '#',
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
  },
  {
    icon: AcademicCapIcon,
    name: 'Training',
    href: '#',
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
  },
]
const recentHires = [
  {
    name: 'Leonard Krasner',
    handle: 'leonardkrasner',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
  {
    name: 'Floyd Miles',
    handle: 'floydmiles',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
  {
    name: 'Emily Selman',
    handle: 'emilyselman',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
  {
    name: 'Kristin Watson',
    handle: 'kristinwatson',
    imageUrl:
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
]
const announcements = [
  {
    id: 1,
    title: 'Office closed on July 2nd',
    href: '#',
    preview:
      'Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.',
  },
  {
    id: 2,
    title: 'New password policy',
    href: '#',
    preview:
      'Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.',
  },
  {
    id: 3,
    title: 'Office closed on July 2nd',
    href: '#',
    preview:
      'Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function LegalPage() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <Popover
          as="header"
          className="bg-gradient-to-r from-red-600 to-red-100 pb-24"
        >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
                  {/* Logo */}
                  <div className="absolute left-0 flex-shrink-0 py-5 lg:static">
                    <Link href="/">
                      <Logo className="h-12 w-auto" />
                      {/* <span className="absolute left-10 top-9 w-full font-sans text-2xl font-black antialiased">
                        Club Atlètic Mollet
                      </span> */}
                    </Link>
                  </div>

                  {/* Right section on desktop */}
                  <div className="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
                    <Button href="/register" color="red">
                      <span>
                        Fes-te soci{' '}
                        <span className="hidden lg:inline">avui</span>
                      </span>
                    </Button>
                  </div>

                  <div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
                    <div className="lg:items-center lg:gap-8">
                      {/* Left nav */}
                      <div className="hidden lg:block">
                        <nav className="flex space-x-4">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current ? 'text-white' : 'text-cyan-100',
                                'rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </nav>
                      </div>
                    </div>
                  </div>

                  {/* Menu button */}
                  <div className="absolute right-0 flex-shrink-0 lg:hidden">
                    {/* Mobile menu button */}
                    <Popover.Button className="text-black-200 inline-flex items-center justify-center rounded-md bg-transparent p-2 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Popover.Button>
                  </div>
                </div>
              </div>

              <Transition.Root as={Fragment}>
                <div className="lg:hidden">
                  <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Popover.Overlay className="fixed inset-0 z-20 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Popover.Panel
                      focus
                      className="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition"
                    >
                      <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="pt-3 pb-2">
                          <div className="flex items-center justify-between px-4">
                            <div></div>
                            <div className="-mr-2">
                              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                                <span className="sr-only">Close menu</span>
                                <XIcon className="h-6 w-6" aria-hidden="true" />
                              </Popover.Button>
                            </div>
                          </div>
                          <div className="mt-3 space-y-1 px-2">
                            {navigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                        <div className="pt-4 pb-2">
                          <div className="flex items-center px-5">
                            <div className="flex-shrink-0"></div>
                            <div className="ml-3 min-w-0 flex-1">
                              <div className="truncate text-base font-medium text-gray-800">
                                {user.name}
                              </div>
                              <div className="truncate text-sm font-medium text-gray-500">
                                {user.email}
                              </div>
                            </div>
                            <button
                              type="button"
                              className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                            >
                              <span className="sr-only">
                                View notifications
                              </span>
                              <BellIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                          <div className="mt-3 space-y-1 px-2">
                            {userNavigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition.Child>
                </div>
              </Transition.Root>
            </>
          )}
        </Popover>
        <main className="-mt-24 pb-8">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="sr-only">Page Title</h1>
            <section aria-labelledby="profile-overview-title">
              <div className="overflow-hidden rounded-lg bg-white shadow">
                <h2 className="sr-only" id="profile-overview-title">
                  Page Title
                </h2>
                <div className="bg-white p-6">
                  <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="sm:flex sm:space-x-5">
                      <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                        <nav className="mb-4 flex" aria-label="Breadcrumb">
                          <ol
                            role="list"
                            className="flex items-center space-x-4"
                          >
                            <li>
                              <div>
                                <Link
                                  href="/"
                                  className="text-gray-400 hover:text-gray-500"
                                >
                                  <HomeIcon
                                    className="h-5 w-5 flex-shrink-0"
                                    aria-hidden="true"
                                  />
                                  <span className="sr-only">Home</span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <div className="flex items-center">
                                <ChevronRightIcon
                                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                                  aria-hidden="true"
                                />
                                <a
                                  href="/legal"
                                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                  aria-current={undefined}
                                >
                                  Avís Legal
                                </a>
                              </div>
                            </li>
                          </ol>
                        </nav>
                        <p className="text-2xl font-bold text-gray-900 sm:text-3xl">
                          Avís Legal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pb-10 font-sans lg:px-6">
                  <h2 className="divide-y-2 divide-gray-100 text-xl font-bold uppercase">
                    Informació General
                  </h2>
                  <p className="pb-6 text-base">
                    En compliment de l’Article 10 de la Llei 34/2002, d’11 de
                    juliol, de Serveis de la Societat de la Informació i de
                    Comerç Electrònic (LSSI-CE), s’informa que el titular del
                    lloc web https://camollet.cat/ és: el CLUB ATLÈTIC MOLLET ,
                    amb CIF X-00000000 i domicili social a AVDA. RÍVOLI, 8-10
                    (08100) MOLLET DEL VALLÈS (BARCELONA), inscrita en el
                    Registre d’Entitats Esportives de la Secretaria General de
                    l’Esport de la Generalitat de Catalunya amb el número XXXXX.
                    L’adreça de correu electrònic de contacte amb l’empresa és:
                    cam@camollet.cat.
                  </p>
                  <h2 className="divide-y-2 divide-gray-100 text-xl font-bold uppercase">
                    Objecte
                  </h2>
                  <p className="pb-6 text-base">
                    La present pàgina web (https://camollet.cat/), propietat del
                    CLUB ATLÈTIC MOLLET ha estat creada i dissenyada per donar a
                    conèixer i permetre l’accés general de tots els usuaris
                    d’internet, a la informació, activitats, productes i serveis
                    oferts per aquesta entitat. El present avís legal té com a
                    objecte establir les Condicions Generals que regulin l’accés
                    i ús general de la citada pàgina web per part de tots els
                    usuaris, de manera que l’accés i ús d’aquesta implica
                    necessàriament, la submissió i acceptació de les Condicions
                    Generals citades incloses en aquest Avís Legal.
                  </p>
                  <h2 className="divide-y-2 divide-gray-100 text-xl font-bold uppercase">
                    Usuari
                  </h2>
                  <p className="pb-6 text-base">
                    La utilització d’aquesta pàgina Web li atribueix la condició
                    d’usuari de la mateixa. <br />
                    <br />
                    Es recomana a l’usuari que llegeixi atentament i
                    detingudament les condicions i instruccions publicades cada
                    vegada que accedeixi a aquesta pàgina web, atès que l’accés
                    implica la seva lectura i acceptació. Mitjançant l’accés i
                    ús a https://fcatletisme.cat/ o qualsevol de les seves
                    pàgines i subdominis, l’usuari manifesta el seu acord de
                    forma expressa, plena i sense reserves a les condicions i
                    instruccions publicades en l’avís legal en el moment de
                    l’accés sense perjudici de l’aplicació de la corresponent
                    normativa d’obligat compliment legal segons el cas.
                    <br />
                    <br />
                    Qualsevol utilització diferent de l’autoritzada està
                    expressament prohibida, quedant la FEDERACIÓ CATALANA
                    D’ATLETISME facultada per denegar o retirar l’accés i ús de
                    la Web, a qualsevol moment, i sense previ avís, a aquells
                    usuaris que incompleixin aquestes condicions generals.
                    <br />
                    <br />
                    L’usuari assumeix la seva responsabilitat en l’ús correcte
                    del lloc web. <br />
                    <br />
                    Aquesta responsabilitat s’estendrà a: <br />
                    <br />
                  </p>
                  <p>
                    <ul className="list-disc px-8">
                      <li>
                        La veracitat i licitud de les informacions aportades per
                        l’usuari en els formularis estesos per la FEDERACIÓ
                        CATALANA D’ATLETISME per a l’accés a certs continguts o
                        serveis oferts pel web.
                      </li>
                      <li>
                        L’ús de la informació, serveis i dades ofertes per la
                        FEDERACIÓ CATALANA D’ATLETISME contràriament al que es
                        disposa per les presents condicions, la Llei, la moral,
                        els bons costums o l’ordre públic, o que de qualsevol
                        altra manera puguin suposar lesió dels drets de tercers
                        o del mateix funcionament del lloc web.
                      </li>
                    </ul>
                  </p>
                  <h2 className="divide-y-2 divide-gray-100 text-xl font-bold uppercase">
                    Ús no autoritzat
                  </h2>
                  <p className="pb-6 text-base"></p>
                  <h2 className="divide-y-2 divide-gray-100 text-xl font-bold uppercase">
                    Política d'enllaços i exempcions de responsabilitat
                  </h2>
                  <p className="pb-6 text-base"></p>
                  <h2 className="divide-y-2 divide-gray-100 text-xl font-bold uppercase">
                    Modificacions
                  </h2>
                  <p className="pb-6 text-base"></p>
                  <h2 className="divide-y-2 divide-gray-100 text-xl font-bold uppercase">
                    Propietat intel·lectual i Industrial
                  </h2>
                  <p className="pb-6 text-base"></p>
                  <h2 className="divide-y-2 divide-gray-100 text-xl font-bold uppercase">
                    Accions legals, legislació aplicable i jurisdicció
                  </h2>
                  <p className="pb-6 text-base"></p>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </>
  )
}
