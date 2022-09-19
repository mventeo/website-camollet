import { Container } from '@/components/Container'
import { Footer } from '@/components/layout/Footer'
import { getStaticPage } from '@/lib/api'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import markdownStyles from '@/components/markdown-styles.module.css'
import RichTextAsset from '@/components/RichTextAsset'
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

export default function LegalPage({ page }) {
  return (
    <>
      <Container className="bg-white pb-8">
        <div className="sm:align-center bg-red-500 sm:flex sm:flex-col">
          <h1 className="p-2 text-center text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {page.title}
          </h1>
        </div>
        <div>
          {/* Content */}
          <div className="prose prose-indigo prose-lg mx-auto mt-6 px-4 text-gray-500">
            {page.content && (
              <div className={markdownStyles['markdown']}>
                {/* {console.log(customMarkdownOptions(post.content))} */}
                {documentToReactComponents(
                  page.content.json,
                  customMarkdownOptions(page.content)
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const page = (await getStaticPage('privacitat', preview)) ?? []
  console.log(page)
  return {
    props: { preview, page },
    revalidate: 1,
  }
}
