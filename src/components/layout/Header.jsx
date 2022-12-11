import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

const links = [
  {
    name: 'Inici',
    href: '/',
  },
  {
    name: 'Club',
    href: '/club/inscripcio',
  },
  {
    name: 'Escola',
    href: '/escola/inscripcio',
  },
  {
    name: 'Cursa de Sant Vicenç',
    href: 'publicacions/cursa-de-sant-vicenc',
  },
  {
    name: 'Miting Ciutat de Mollet',
    href: '/properament',
  },
  {
    name: 'Publicacions',
    href: '/properament',
  },
]

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="justify-right relative z-10 flex h-10 w-10 items-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            {links.map((link) => (
              <MobileNavLink key={link.name} href={link.href}>
                {link.name}
              </MobileNavLink>
            ))}
            <hr />
            <div className="flex justify-center">
              <Button
                href="/club/inscripcio"
                color="red"
                className="mt-2 w-1/2"
              >
                <span>Fes-te soci</span>
              </Button>
            </div>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="mt-6">
      <Container className="bg-white py-2">
        <nav className="relative z-50">
          <div className="xs:grid-cols-3 grid grid-cols-4">
            <div className="xs:col-span-2 col-span-3 flex justify-items-start">
              <Link href="/" aria-label="Home">
                <Logo className="h-16 w-auto" />
              </Link>
              <span className="xs:text-2xl xs:mt-3 text-1xl mt-5 pl-6 font-black uppercase sm:text-3xl">
                Club Atlètic <span className="text-red-500">Mollet</span>
              </span>
            </div>

            <div className="mt-4 justify-items-end">
              <Button
                href="/club/inscripcio"
                color="red"
                className="hidden md:flex"
              >
                <span>
                  Fes-te soci <span className="hidden lg:inline">avui</span>
                </span>
              </Button>
              <div className="flex justify-end md:hidden lg:mt-10">
                <MobileNavigation />
              </div>
            </div>
          </div>
          <div className="hidden justify-center md:flex md:gap-x-6">
            {links.map((link) => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  )
}
