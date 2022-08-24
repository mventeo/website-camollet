// import Container from "../components/container";
// import MoreStories from "../components/more-stories";
// import HeroPost from "../components/hero-post";
// import Intro from "../components/intro";
// import Layout from "../components/layout";
import {
  getActiveHeroPost,
  getRecentPostsForHome,
  getClubLegislation,
} from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { RecentPosts } from '@/components/RecentPosts'
import { Footer } from '@/components/Footer'
import { PhoneIcon, MailIcon } from '@heroicons/react/solid'
import { Sponsors } from '@/components/Sponsors'
import {
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from '@heroicons/react/outline'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import HomeContact from '@/components/HomeContact'

const features = [
  {
    name: 'Soci bàsic',
    description:
      "La cuota més econòmica, permet l'accés i us de les instalacions municipals, vestuaris i el gimnàs bàsic durant els matins.",
  },
  {
    name: 'Grup de Manteniment',
    description:
      "Manteniment per a tots amb independencia de la teva condició física. Apunta't a les nostres sesions de manteniment zumba",
    icon: LightningBoltIcon,
  },
  {
    name: 'Grup de Tecnificació',
    description:
      'Entrena velocitat, tanques, salts, mig fons i fons, marxa amb els nostres reconeguts entrenadors. A partir de la categoria SUB-14',
    icon: ScaleIcon,
  },
]

export default function Index({ preview, posts, heroPost, legislation }) {
  return (
    <>
      <Head>
        <title>Club Atlètic Mollet</title>
        <meta
          name="description"
          content="Club Atlètic Mollet. Fem atletisme des de 1931"
        />
      </Head>
      <Header />
      <Hero heroPost={heroPost} />
      <Sponsors />

      <RecentPosts posts={posts} />

      <Container>
        <div className="bg-red-100 to-zinc-700 py-12">
          <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-700">
            Fes-te soci del Club Atlètic Mollet
          </h2>
          <p className="mt-4  px-8 pb-10 text-lg text-zinc-600">
            Triar la millor opció per gaudir de l'atletisme i l'esport a les
            pistes municipals de Mollet del Vallès. Pots entrenar per el teu
            compte, o amb un entrenador de manteniment.
            <br />
            Ets atleta? o vols practicar l'atletisme, apunta't a un dels nostres
            grups de tecnificació.
          </p>
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Fes-te soci del Club Atlètic Mollet.</h2>
            <dl className="space-y-10 rounded-lg lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="rounded-lg bg-white px-4 pb-8 shadow-lg"
                >
                  <dt>
                    <p className="mt-5 text-lg font-medium font-bold leading-6 text-red-500">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 text-base text-black">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="pt-8 text-center">
            <Button className="bg-red-500  hover:bg-red-600" href="/escola">
              Vull més informació
            </Button>
          </div>
        </div>
      </Container>
      <Container>
        <div className="bg-white py-12">
          <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-700">
            Aprén, forma't i diverteix-te a l'Escola d'atletisme
          </h2>
          <div className="grid px-4 lg:grid-cols-2">
            <div className="pt-24">
              <p className="mt-4 max-w-3xl pb-10 text-left text-lg text-zinc-600">
                A l'escola del Club Atlètic Mollet,{' '}
                <span className="font-bold text-red-500 ">
                  millor escola esportiva
                </span>{' '}
                de Mollet del Vallès de 2021, els vostres fills es formaran en
                la pràctica de l'atletisme amb valors de respecte a l'esport i
                els companys. <br />
                <br />A partir dels 6 anys i fins els 14, en horaris de 18:00 a
                19:30, tots els dilluns, dimarts i divendres.
                <br />
                Podeu triar entre 1 dia a la setmana, o 2-3 dies, i les families
                amb germans tenen descompte.
              </p>
              <div className="text-center">
                <Button className="bg-red-500  hover:bg-red-600" href="/escola">
                  Vull més informació
                </Button>
              </div>
            </div>
            <div className="border-gray-50 pt-6 shadow-lg">
              <picture>
                <source
                  srcSet="/images/nit_esport_2021.png"
                  media="image/png"
                />
                <img
                  src="/images/nit_esport_2021.png"
                  alt=""
                  className=" w-auto"
                />
              </picture>
            </div>
          </div>
        </div>
      </Container>
      <HomeContact />
      <Footer legislation={legislation} />
      {/* <Layout preview={preview}>
        <Head>
          <title>{CMS_NAME}</title>
          <meta
            name="description"
            content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
          />
        </Head>
        <Container>
          <Intro posts={RecentPosts} />
        </Container>
      </Layout> */}
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const posts = (await getRecentPostsForHome(preview)) ?? []
  const heroPost = (await getActiveHeroPost(preview)) ?? []
  const legislation = await getClubLegislation()
  console.log(posts)
  return {
    props: { preview, posts, heroPost, legislation },
  }
}

{
  /* <>
      <Head>
        <title>TaxPal - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </> */
}

{
  /* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />} */
}
