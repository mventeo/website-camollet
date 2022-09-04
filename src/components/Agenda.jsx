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

export function ContentAgenda({ agenda, poster }) {
  const hasposter = poster ? true : false
  return (
    <div className="bg-gray-100">
      <Container className="bg-white pb-16">
        <div className="bg-gradient-to-b from-red-600 to-red-100 p-2 pb-24">
          <div className="text-2xl font-bold text-white md:text-3xl">
            {agenda.title}
          </div>
        </div>
        <div
          id="content-docs"
          className="-mt-16 grid grid-cols-1 px-4 md:grid-cols-3 md:gap-x-8"
        >
          {/* Content Column */}
          <div className="col-span-2 rounded-t-lg border-2 border-stone-100 bg-white shadow-lg">
            <div className="mt-4">
              {agenda.metadata.tags.map((tag) => (
                <span
                  key={tag.name}
                  className="ml-4 rounded bg-indigo-400 px-2 py-1 text-sm text-white md:text-base"
                >
                  {tag.name}
                </span>
              ))}
            </div>
            <div className="ml-4 mt-4">
              <span className="text-lg font-bold">Quant: </span>
              <span className="capitalize">
                {format(new Date(agenda.date), 'EEEE, d MMMM yyyy HH:mm', {
                  locale: ca,
                })}
              </span>
            </div>

            {/* Content */}
            <div className="prose prose-indigo prose-lg mx-auto mt-6 px-4 text-gray-500">
              {agenda.content && (
                <div className={markdownStyles['markdown']}>
                  {/* {console.log(customMarkdownOptions(agenda.content))} */}
                  {documentToReactComponents(
                    agenda.content.json,
                    customMarkdownOptions(agenda.content)
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="py-2 md:py-0">
            {/* poster */}
            {hasposter && (
              <div className="mb-2 hidden  justify-center border-stone-100 md:flex">
                <div className="flex">
                  <div className="relative h-96 w-80 shadow-lg">
                    <Link href={poster.moreInfoUrl ? poster.moreInfoUrl : '#'}>
                      <Image
                        src={
                          poster.posterImage
                            ? poster.posterImage.url
                            : poster.coverImage.url
                        }
                        layout="fill"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}
