import Link from 'next/link'

import { format } from 'date-fns'
import { ca } from 'date-fns/locale'

import { Button } from './Button'
import { Container } from './Container'

export function RecentPosts({ posts }) {
  return (
    <>
      {/* <div className="px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-16 lg:pb-16"> */}
      <div className="bg-white py-6">
        <div className="text-center">
          <h2 className=" text-3xl font-bold tracking-tight sm:text-3xl sm:tracking-tight">
            Publicacions recents
          </h2>
        </div>
        <div className="mx-auto mt-6 ">
          {posts.map((post) => (
            <div key={post.title}>
              <div className="mb-1 bg-gradient-to-r from-red-500 to-red-300 py-1"></div>
              <div className="grid grid-cols-1 flex-col overflow-hidden pb-2 lg:grid-cols-2">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div>
                    <p className="text-2xl font-black sm:text-3xl">
                      {format(new Date(post.date), 'EEEE', { locale: ca })}
                    </p>
                    <p className="uppercase">
                      {format(new Date(post.date), 'LLLL dd, yy', {
                        locale: ca,
                      })}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <picture className="hidden lg:flex">
                      <img
                        className="h-48 w-auto object-cover"
                        src={post.coverImage.url}
                        alt=""
                      />
                    </picture>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white lg:px-6">
                  <div className="flex-1">
                    <Link
                      href={`/publicacions/${post.slug}`}
                      className="font-sans text-lg font-bold hover:underline"
                    >
                      {post.title}
                    </Link>
                    <p className="mt-1 text-base text-gray-500">
                      {post.excerpt}
                    </p>
                    <div className="text-sm font-medium">
                      <div className="mt-3 hover:underline">
                        <span className="rounded-lg bg-blue-200 py-1 px-2">
                          Article
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-8 text-center">
          <Button className="bg-red-500  hover:bg-red-600" href="/publicacions">
            Més publicacions
          </Button>
        </div>
      </div>
    </>
  )
}
