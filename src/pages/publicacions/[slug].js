import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import { Header } from '@/components/layout/Header'
import { getAllPostsWithSlug, getPostAndMorePosts, getPoster } from '@/lib/api'
import { ContentPost } from '@/components/Post'
import { Footer } from '@/components/layout/Footer'
import NotFound from '../404'

export default function Post({ post, morePosts, preview, poster }) {
  const router = useRouter()

  if (!router.isFallback && !post) {
    return <NotFound />
  }

  return <>{post && <ContentPost post={post} poster={poster} />}</>
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  const poster = await getPoster(false)
  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
      poster: poster ?? null,
      revalidate: 1,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts?.map(({ slug }) => `/publicacions/${slug}`) ?? [],
    fallback: true,
  }
}
