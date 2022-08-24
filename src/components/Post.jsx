import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import markdownStyles from '@/components/markdown-styles.module.css'
import RichTextAsset from '@/components/RichTextAsset'
import { Container } from './Container'
import { Avatar } from './Avatar'
import { DocumentIcon } from '@heroicons/react/outline'

import { format } from 'date-fns'
import { ca } from 'date-fns/locale'

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

const FacebookIcon = {
  name: 'Facebook',
  href: '#',
  icon: (props) => (
    <svg fill="#3b5998" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    </svg>
  ),
}

export function ContentPost({ post }) {
  console.log(post)

  const hasDocs = post.docs?.items.length > 0
  console.log(hasDocs)

  return (
    <Container className="bg-white pb-16">
      <div className="bg-gradient-to-b from-red-600 to-red-100 p-2 pb-24">
        <div className="text-justify text-4xl font-bold text-stone-900">
          {post.title}
        </div>
        {post.subtitle ? (
          <div className="py-1 text-justify text-2xl font-semibold text-white">
            {post.subtitle}
          </div>
        ) : (
          <div className="py-1">&nbsp;</div>
        )}
      </div>
      <div id="content-docs" className="-mt-16 grid grid-cols-3 gap-x-8 px-4">
        {/* Content Column */}
        <div className="col-span-2 rounded-t-lg border-2 border-stone-100 bg-white shadow-lg">
          {/* author avatar */}
          <div className="grid grid-cols-2 pt-2 pl-2">
            <div>
              {post.author && (
                <Avatar
                  picture={post.author.picture}
                  name={post.author.name}
                  date={post.date}
                />
              )}
            </div>
            {/* <div className="mt-1 flex justify-end pr-4">
              <a
                key="Facebook"
                href="#Pending app"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Facebook</span>
                <FacebookIcon.icon className="h-10 w-10" aria-hidden="true" />
              </a>
            </div> */}
          </div>
          <div className="mt-4">
            {post.metadata.tags.map((tag) => (
              <span
                key={tag.name}
                className="ml-4 rounded bg-indigo-400 px-2 py-1 text-white"
              >
                {tag.name}
              </span>
            ))}
          </div>
          {/* Content */}
          <div className="prose prose-indigo prose-lg mx-auto mt-6 px-4 text-gray-500">
            <div className={markdownStyles['markdown']}>
              {documentToReactComponents(
                post.content.json,
                customMarkdownOptions(post.content)
              )}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <div className="mb-2 divide-y-2 divide-gray-100 rounded-lg border-2 border-stone-100 bg-white px-2 pb-6 shadow-lg">
            <h3 className="text-center font-bold">Documents</h3>
            {hasDocs && (
              <ul className="mt-2 pt-2">
                {post.docs?.items.map((doc) => (
                  <li key={doc.name} className="py-1">
                    <Link href={doc.url} className="flex hover:underline">
                      <DocumentIcon className="h-6" />
                      <span className="ml-2 text-sm">{doc.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <style jsx>
          {`
            #content-docs {
              min-height: 600px;
            }
          `}
        </style>
      </div>
      {/* <div className="relative grid grid-cols-1 items-start gap-4 overflow-hidden bg-red-50 py-16 lg:grid-cols-3 lg:gap-8">
        <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
          <div
            className="relative mx-auto h-full max-w-prose text-lg"
            aria-hidden="true"
          ></div>
        </div>
        <div className="border-3 bg-red-50relative border-black-100 col-span-2 mt-4 rounded-lg px-4 shadow-lg sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-lg">
            <h1>
              <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
                {post.title}
              </span>
              <span className="block text-left text-lg font-semibold text-indigo-600">
                TAGS
              </span>
            </h1>
          </div>
          
        </div>
        <div className="relative">
          <div className="border-3 mt-4 rounded-lg border-gray-100 pr-4 shadow-lg">
            <div className="mx-auto max-w-prose text-lg">
              <h1>
                <span className="text-1xl mt-2 block min-h-fit text-center font-bold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:tracking-tight">
                  Documents
                </span>
              </h1>

              {hasDocs && (
                <ul>
                  {post.docs?.items.map((doc) => (
                    <li key={doc.name}>{doc.description}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div> */}
    </Container>
  )
}
