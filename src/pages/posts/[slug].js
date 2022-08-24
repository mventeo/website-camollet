import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
// import Container from '@/components/old/container'
// import PostBody from '@/components/old/post-body'
// import MoreStories from '@/components/more-stories'
import { Header } from '@/components/Header'
// import PostHeader from '@/components/old/post-header'
// import SectionSeparator from '@/components/section-separator'
// import Layout from '@/components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '@/lib/api'
import { ContentPost } from '@/components/Post'
// import PostTitle from '@/components/old/post-title'
// import { CMS_NAME } from '@/lib/constants'
// import PostPreview from '@/components/old/post-preview'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <Header />
      <ContentPost post={post} />
      {/* <PostPreview
        title={post.title}
        coverImage={post.coverImage}
        date={post.date}
        author={post.author}
      /> */}
    </>

    // <Layout preview={preview}>
    //   {/* <Container>
    //     <Header />
    //     {router.isFallback ? (
    //       <PostTitle>Loading…</PostTitle>
    //     ) : (
    //       <>
    //         <article>
    //           <Head>
    //             <title>
    //               {post.title} | Next.js Blog Example with {CMS_NAME}
    //             </title>
    //             <meta property="og:image" content={post.coverImage.url} />
    //           </Head>

    //           <PostBody content={post.content} />
    //         </article>
    //         <SectionSeparator />
    //         {morePosts && morePosts.length > 0 && (
    //           <MoreStories posts={morePosts} />
    //         )}
    //       </>
    //     )}
    //   </Container> */}
    // </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  }
}
