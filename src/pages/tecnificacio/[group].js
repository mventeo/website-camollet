import { useRouter } from 'next/router'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import ErrorPage from 'next/error'
import { getAllTrainingGroups, getTrainingGroup } from '@/lib/api'

export default function Tecnificacio({ preview, group }) {
  const router = useRouter()

  if (!router.isFallback && !group) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <Header />
      {/* Header section with select menu */}
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="px-0 sm:px-4 lg:flex lg:items-center lg:justify-between lg:px-0">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl sm:tracking-tight lg:text-6xl lg:tracking-tight">
              {/* {group.name} */}
            </h2>
            {/* <p className="mt-5 text-xl text-indigo-300">{group.description}</p> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = (await getTrainingGroup(params.group, preview)) ?? null

  return {
    props: {
      preview,
      group: data,
    },
  }
}

export async function getStaticPaths() {
  const allGroups = await getAllTrainingGroups()
  return {
    paths: allGroups?.map(({ group }) => `/tecnificacio/${group}`) ?? [],
    fallback: true,
  }
}
