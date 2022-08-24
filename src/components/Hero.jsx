/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import markdownStyles from '@/components/markdown-styles.module.css'
import RichTextAsset from '@/components/rich-text-asset'

import { DocumentIcon } from '@heroicons/react/outline'
import { Container } from './Container'

const customMarkdownOptions = (content) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <RichTextAsset
        id={node.data.target.sys.id}
        assets={content.links.assets.block}
      />
    ),
  },
})

export function Hero({ heroPost }) {
  return (
    <Container>
      <div className="relative bg-gradient-to-r from-red-200 to-red-50">
        <main className="lg:relative">
          <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
            <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight lg:text-5xl lg:tracking-tight xl:text-6xl xl:tracking-tight">
                <span className="block xl:inline">{heroPost.title}</span>{' '}
                <span className="block text-2xl text-red-600 xl:inline">
                  {heroPost.subtitle}
                </span>
              </h1>
              <div className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                {heroPost.excerpt}
              </div>
              {heroPost.moreInfoLink && (
                <div className="mt-10 sm:flex sm:justify-center lg:justify-center">
                  <div className="rounded-md shadow">
                    <Link
                      href="/escola"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 md:py-4 md:px-10 md:text-lg"
                    >
                      Vull Informació
                    </Link>
                  </div>
                </div>
              )}
              {heroPost.docs && (
                <div
                  className={
                    heroPost.docs.items.length > 1
                      ? 'xs:grid-cols-1 grid md:grid-cols-2'
                      : ''
                  }
                >
                  {heroPost.docs.items.map((doc) => (
                    <div key={doc.title}>
                      <div className="mt-10 sm:flex sm:justify-center lg:justify-center">
                        <Link
                          href={doc.url}
                          target="_blank"
                          className="flex w-full items-center justify-center px-4 py-2 text-center text-base font-medium text-red-600 hover:text-red-700 md:py-2 md:px-4 md:text-base"
                        >
                          <DocumentIcon className="h-10 align-top" />
                          {doc.title}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {heroPost.coverImage && (
            <div className="relative hidden h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:flex lg:h-full lg:w-1/2">
              <picture>
                <source srcSet={heroPost.coverImage.url} />
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src={heroPost.coverImage.url}
                  alt=""
                />
              </picture>
              {/* <span>
            https://unsplash.com/es/fotos/-4trKf0Kbow?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
          </span> */}
            </div>
          )}
        </main>
      </div>
    </Container>
  )
}
