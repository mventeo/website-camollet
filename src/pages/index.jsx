import {
  getActiveHeroPost,
  getRecentPostsForHome,
  getClubLegislation,
  getNextAgenda,
} from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/Hero'
import { RecentPosts } from '@/components/RecentPosts'
import { Footer } from '@/components/layout/Footer'
import { Sponsors } from '@/components/Sponsors'
import { SponsorsCursa } from '@/components/SponsorsCursa'
import { LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { NextAgenda } from '@/components/NextAgenda'
import { Banner } from '@/components/layout/Banner'
import Image from 'next/image'

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
      'Entrena velocitat, tanques, llançaments, salts, mig fons i fons, marxa amb els nostres reconeguts entrenadors. A partir de la categoria SUB-14',
    icon: ScaleIcon,
  },
]

export default function Index({ preview, posts, heroPost, agenda }) {
  return (
    <>
      {/* <Banner   /> */}
      <Head>
        <title>{CMS_NAME} - Fem atletisme des de 1931</title>
        <meta
          name="description"
          content="Club Atlètic Mollet. Fem atletisme des de 1931"
        />
      </Head>

      <Container id="main" className="bg-white">
        <Hero heroPost={heroPost} />
        {/* Banner  */}
        <div className="relative overflow-hidden bg-white pb-8">
          {/* Decorative background image and gradient */}
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
              {/* <Image
                href="/logos/deporvillage.png"
                alt=""
                className="h-full w-full object-cover object-center"
              /> */}
            </div>
            <div className="absolute inset-0 bg-white bg-opacity-75" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
          </div>

              
        </div>
        <Sponsors />
        {agenda.length > 0 && <NextAgenda agenda={agenda} />}
        <RecentPosts posts={posts} />
        {/* Highligths    */}
        <div>
          <div className="bg-red-100 to-zinc-700 py-12">
            <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-700">
              Fes-te soci del Club Atlètic Mollet
            </h2>
            <p className="mt-4  px-8 pb-10 text-lg text-zinc-600">
              Triar la millor opció per gaudir de l&apos;atletisme i
              l&apos;esport a les pistes municipals de Mollet del Vallès. Pots
              entrenar per el teu compte, o amb un entrenador de manteniment.
              <br />
              Ets atleta? o vols practicar l&apos;atletisme, apunta&apos;t a un
              dels nostres grups de tecnificació.
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
              <Button
                className="bg-red-500  hover:bg-red-600"
                href="/properament"
              >
                Vull més informació
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div className="py-12">
            <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-700">
              Aprén, forma&apos;t i diverteix-te a l&apos;Escola
              d&apos;atletisme
            </h2>
            <div className="grid px-4 lg:grid-cols-2">
              <div className="pt-24">
                <p className="mt-4 max-w-3xl pb-10 text-left text-lg text-zinc-600">
                  A l&apos;escola del Club Atlètic Mollet,{' '}
                  <span className="font-bold text-red-500 ">
                    millor equip de base
                  </span>
                  &nbsp;de Mollet del Vallès de 2021, els vostres fills es
                  formaran en la pràctica de l&apos;atletisme amb valors de
                  respecte a l&apos;esport i els companys. <br />
                  <br />A partir dels 6 anys i fins els 14, en horaris de 18:00
                  a 19:30, tots els dilluns, dimecres i divendres.
                  <br />
                  Podeu triar entre 1 dia a la setmana, o 2-3 dies, i les
                  families amb germans tenen descompte.
                </p>
                <div className="text-center">
                  <Button
                    className="bg-red-500  hover:bg-red-600"
                    href="/escola/inscripcio"
                  >
                    Vull més informació
                  </Button>
                </div>
              </div>
              <div className="border-gray-50 pt-6 shadow-lg">
                <picture>
                  <source
                    srcSet="/images/equip_base_nit_esport_2022.png"
                    media="image/png"
                  />
                  <img
                    src="/images/equip_base_nit_esport_2022.png"
                    alt=""
                    className=" w-auto"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer showContact="false" /> */}
      </Container>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const posts = (await getRecentPostsForHome(preview)) ?? []
  const heroPost = (await getActiveHeroPost(preview)) ?? []
  const agenda = (await getNextAgenda()) ?? []
  return {
    props: { preview, posts, heroPost, agenda },
    revalidate: 10,
  }
}
