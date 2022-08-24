import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import markdownStyles from '@/components/markdown-styles.module.css'
import RichTextAsset from '@/components/rich-text-asset'

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

export function ContentPost({ post }) {
  return (
    <div className="relative overflow-hidden bg-white py-16">
      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
        <div
          className="relative mx-auto h-full max-w-prose text-lg"
          aria-hidden="true"
        ></div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg">
          <h1>
            <span className="block text-center text-lg font-semibold text-indigo-600">
              Article
            </span>
            <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
              {post.title}
            </span>
          </h1>
        </div>
        <div className="prose prose-indigo prose-lg mx-auto mt-6 text-gray-500">
          <div className={markdownStyles['markdown']}>
            {documentToReactComponents(
              post.content.json,
              customMarkdownOptions(post.content)
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
