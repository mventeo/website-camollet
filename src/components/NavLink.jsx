import Link from 'next/link'

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="mt-5 inline-block rounded-lg py-1 px-2 text-sm font-black uppercase text-red-500 hover:bg-red-500 hover:text-white"
    >
      {children}
    </Link>
  )
}
