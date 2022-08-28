import Image from 'next/image'
import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import markdownStyles from '@/components/markdown-styles.module.css'
import RichTextAsset from '@/components/RichTextAsset'
import { Container } from './Container'
import { Avatar } from './Avatar'
import {
  DocumentIcon,
  LinkIcon,
  PhotographIcon,
  VideoCameraIcon,
} from '@heroicons/react/outline'

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

function DocLink({ item }) {
  return (
    <Link
      href={item.url ? item.url : item.file?.url ? item.file.url : '#'}
      className="ml-2 flex hover:underline"
      target="_blank"
    >
      {item.url ? (
        <LinkIcon className="h-6" />
      ) : (
        <DocumentIcon className="h-6" />
      )}
      <span className="ml-2 text-sm">{item.title}</span>
    </Link>
  )
}

function GalleryLink({ item }) {
  // console.log(item)
  return (
    <div className="flex">
      <Link
        href={item.link}
        className="ml-2 flex hover:underline"
        target="_blank"
      >
        {item.type == 'foto' ? (
          <PhotographIcon className="h-6" />
        ) : (
          <VideoCameraIcon className="h-6" />
        )}
        <span className="ml-2 mt-1 text-xs">{item.title}</span>
      </Link>
      {item.author && (
        <Link
          href={item.author.link}
          className="ml-2 mt-1 flex hover:underline"
          target="_blank"
        >
          <span className="ml-1 text-xs">({item.author.name})</span>
        </Link>
      )}
    </div>
  )
}

function RightSection({ title, children }) {
  return (
    <div className="mb-2 rounded-lg border-2 border-stone-100 bg-white pb-6 shadow-lg">
      <h3 className="rounded-t-lg border-t-2 border-red-500 bg-red-500 pb-2 text-center font-bold text-white">
        <span className="mt-2">{title}</span>
      </h3>

      {children}
    </div>
  )
}

export function ContentPost({ post, poster }) {
  const hasPoster = poster ? true : false
  const hasDocs = post.docs?.items.length > 0
  const hasResults = post.results?.items.length > 0
  const hasParticipants = post.participants?.items.length > 0
  const hasOtherDocs = post.otherDocs?.items.length > 0
  const hasGallery = post.gallery?.items.length > 0
  console.log(poster ? poster : 'NO POSTER')
  return (
    <div className="bg-gray-100">
      <Container className="bg-white pb-16">
        <div className="bg-gradient-to-b from-red-600 to-red-100 p-2 pb-24">
          <div className="text-2xl font-bold text-stone-900 md:text-3xl">
            {post.title}
          </div>
          {post.subtitle ? (
            <div className="py-1 text-xl font-semibold text-white md:text-2xl">
              {post.subtitle}
            </div>
          ) : (
            <div className="py-1">&nbsp;</div>
          )}
        </div>
        <div
          id="content-docs"
          className="-mt-16 grid grid-cols-1 px-4 md:grid-cols-3 md:gap-x-8"
        >
          {/* Content Column */}
          <div className="col-span-2 rounded-t-lg border-2 border-stone-100 bg-white shadow-lg">
            {/* author avatar */}
            <div className="grid grid-cols-1 pt-2 pl-2 md:grid-cols-2">
              <div>
                {post.author && (
                  <Avatar
                    picture={post.author.picture}
                    name={post.author.name}
                    date={post.date}
                  />
                )}
              </div>
              {
                <div className="mt-1 flex md:justify-end md:pr-4">
                  <Link
                    key="Facebook"
                    target="_blank"
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://cms-camollet.vercel.app/posts/${post.slug}`}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Facebook</span>
                    <FacebookIcon.icon
                      className="h-8 w-8 md:h-10 md:w-10"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              }
            </div>
            <div className="mt-4">
              {post.metadata.tags.map((tag) => (
                <span
                  key={tag.name}
                  className="ml-4 rounded bg-indigo-400 px-2 py-1 text-sm text-white md:text-base"
                >
                  {tag.name}
                </span>
              ))}
            </div>
            {/* Content */}
            <div className="prose prose-indigo prose-lg mx-auto mt-6 px-4 text-gray-500">
              {post.content && (
                <div className={markdownStyles['markdown']}>
                  {/* {console.log(customMarkdownOptions(post.content))} */}
                  {documentToReactComponents(
                    post.content.json,
                    customMarkdownOptions(post.content)
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="py-2 md:py-0">
            {/* Resultats */}
            {hasResults && (
              <RightSection
                title={
                  post.resultTextSection ? post.resultTextSection : 'Resultats'
                }
              >
                <ul className="mt-2 pt-2">
                  {post.results?.items.map((item) => (
                    <li key={item.title} className="py-1">
                      <DocLink item={item} />
                    </li>
                  ))}
                </ul>
              </RightSection>
            )}
            {/* Participants */}
            {hasParticipants && (
              <RightSection
                title={
                  post.participantTextSection
                    ? post.participantTextSection
                    : 'Inscripts'
                }
              >
                <ul className="mt-2 pt-2">
                  {post.participants?.items.map((item) => (
                    <li key={item.title} className="py-1">
                      <DocLink item={item} />
                    </li>
                  ))}
                </ul>
              </RightSection>
            )}
            {/* Documents */}
            {hasDocs && (
              <RightSection
                title={post.docTextSection ? post.docTextSection : 'Documents'}
              >
                <ul className="mt-2 pt-2">
                  {post.docs?.items.map((item) => (
                    <li key={item.title} className="py-1">
                      <DocLink item={item} />
                    </li>
                  ))}
                </ul>
              </RightSection>
            )}
            {/* Altres Documents */}
            {hasOtherDocs && (
              <RightSection
                title={
                  post.otherDocTextSection
                    ? post.otherDocTextSection
                    : 'Altres documents'
                }
              >
                <ul className="mt-2 pt-2">
                  {post.otherDocs?.items.map((item) => (
                    <li key={item.title} className="py-1">
                      <DocLink item={item} />
                    </li>
                  ))}
                </ul>
              </RightSection>
            )}
            {/* Gallery */}
            {hasGallery && (
              <RightSection
                title={
                  post.otherDocTextSection
                    ? post.otherDocTextSection
                    : 'Galeria de Fotos i Vídeos'
                }
              >
                <ul className="mt-2 pt-2">
                  {post.gallery?.items.map((item) => (
                    <li key={item.title} className="py-1">
                      <GalleryLink item={item} />
                    </li>
                  ))}
                </ul>
              </RightSection>
            )}
            {/* Poster */}
            {hasPoster && (
              <div className="mb-2 mt-6 hidden  justify-center border-stone-100 bg-white md:flex">
                <div className="flex">
                  <div className="relative h-96 w-80 shadow-lg">
                    <Image src={poster.coverImage.url} layout="fill" alt="" />
                  </div>
                </div>
              </div>
            )}
            {/* Collaborators and Organizers */}
            {/* {post.sponsors?.items?.length > 0 && (
              <div>
                <div>Organitza</div>
                {post.sponsors.items.map((org) => (
                  <div key={org.name} className="relative h-8">
                    <Link href={org.website ? org.website : '#'} alt={org.name}>
                      <picture>
                        <source srcSet={org.logo.url} />
                        <img src={org.logo.url} alt={org.name} />
                      </picture>
                    </Link>
                  </div>
                ))}
              </div>
            )} */}
          </div>
          {/* <style jsx>
          {`
            #content-docs {
              min-height: 600px;
            }
          `}
        </style> */}
        </div>
      </Container>
    </div>
  )
}
