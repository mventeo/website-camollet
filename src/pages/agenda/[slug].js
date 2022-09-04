import { useRouter } from 'next/router'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import ErrorPage from 'next/error'
import { getAgendaContent, getAllAgenda, getPoster } from '@/lib/api'
import NotFound from '../404'
import { ContentAgenda } from '@/components/Agenda'

export default function AgendaPage({ preview, agenda, poster }) {
  const router = useRouter()

  if (!agenda) return <div>Carregant informació...</div>

  if (!router.isFallback && !agenda) {
    return <NotFound />
  }

  return (
    <>
      <ContentAgenda agenda={agenda} poster={poster} />
    </>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = (await getAgendaContent(params.slug, preview)) ?? null
  const poster = await getPoster(false)

  return {
    props: {
      preview,
      agenda: data,
      poster: poster,
      revalidate: 1,
    },
  }
}

export async function getStaticPaths() {
  const res = await getAllAgenda()
  return {
    paths: res?.map(({ slug }) => `/agenda/${slug}`) ?? [],
    fallback: true,
  }
}
