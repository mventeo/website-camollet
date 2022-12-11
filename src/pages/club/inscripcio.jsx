import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'

/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon, DocumentDownloadIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const tiers = [
  {
    name: 'Opció 1: Amb monitor',
    href: '#',
    priceYearly: 150,
    pricePeriod: 85,
    description:
      'Practica o entrena amb un monitor qualificat per disciplina tècnica. Tindràs accéss a les pistes qualsevol dia, i entrenaments per disciplina atlètica. Accés al gimnàs per grup de tecnificació a part de les hores comunes. ',
    includedFeatures: [
      'Samarreta i pantaló o calçeta de competició',
      'Grups de 15',
    ],
    paymentsInfo: [
      {
        period: 'Quota 1/2 any',
        desc: '85€',
      },
      {
        period: 'Gener-Març',
        desc: '45€',
      },
      {
        period: 'Abril-Juny',
        desc: '45€',
      },
      {
        period: 'Juliol',
        desc: '25€',
      },
      {
        period: 'Setembre-Desembre',
        desc: '60€',
      },
    ],
    extra: '',
  },
  {
    name: 'Opció 2: Sense monitor',
    href: '#',
    priceYearly: 130,
    description:
      "Practicar i entrena per el teu compte, de dilluns a divendres, a excepció de horari de l'escola d'atletisme.",
    includedFeatures: [
      'Samarreta i pantaló o calçeta de competició',
      'Grups de 15',
    ],
    paymentsInfo: [
      {
        period: 'Quota 1/2 any',
        desc: '80€',
      },
      {
        period: 'Gener-Març',
        desc: '40€',
      },
      {
        period: 'Abril-Juny',
        desc: '40€',
      },
      {
        period: 'Juliol',
        desc: '20€',
      },
      {
        period: 'Setembre-Desembre',
        desc: '55€',
      },
    ],
  },
]

const categories = [
  { id: 1, name: 'Pre-Benjamí', years: '2017-2016' },
  { id: 2, name: 'Benjamí', years: '2015-2014' },
  { id: 3, name: 'Aleví', years: '2013-2012' },
  { id: 4, name: 'Infantil', years: '2011-2010' },
]

const faqs = [
  {
    id: 12,
    question:
      'Puc fer servir el gimnàs en qualsevol moment, si no estic a cap grup?.',
    answer:
      'El gimnàs està dedicat pricipalment als grups de tecnificació, però hi han horaris comuns on qualsevol soci pot fer us del gimnàs. Consulta els horaris a la web.',
  },
]

const PAGE_TITLE = CMS_NAME + ' - Fes-te soci del Club Atlètic Mollet'
const MAIN_TITLE = 'Quota de soci 2021/2022'
const MAIN_DESC = `Tria entrenar amb monitor o sense, i pagaments anuals, dos quotes o trimestrals`
const PAYMENT_INFO = 'Informació sobre els pagaments'
const DOC_TITLE = 'Documentació necessaria per formalitzar la inscripció'
const DOC_DESC =
  "L'inscripció és podrá fer tots els dilluns, dimecres i divendres a la secretaria del club en horari de 18:00 a 19:30. Per formalitzar la inscripció cal portar els documents i omplir el formulari que indiquem a continuació."
const DOC_IMPORTANT = ''

export default function Escola() {
  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
      </Head>
      <div>
        <div className="mx-auto max-w-7xl bg-white py-8 px-4 sm:px-6 lg:px-8">
          <div className="sm:align-center bg-red-500 sm:flex sm:flex-col">
            <h1 className="p-2 text-center text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {MAIN_TITLE}
            </h1>
            <p className="mt-5 text-base text-white sm:text-center md:text-xl">
              {MAIN_DESC}
            </p>
          </div>
          <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-2">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm"
              >
                <div className="p-6">
                  <h2 className="text-lg font-medium font-black leading-6 text-gray-900">
                    {tier.name}
                  </h2>
                  <p className="mt-4 text-sm text-gray-500">
                    {tier.description}
                  </p>
                  <p className="mt-8">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      {tier.priceYearly} €
                    </span>{' '}
                    <span className="text-base font-medium text-gray-500">
                      /any
                    </span>
                  </p>
                </div>
                <div className="px-6 pt-6 pb-8">
                  <h3 className="text-sm font-medium font-bold text-gray-900">
                    {PAYMENT_INFO}
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {tier.paymentsInfo.map((feature) => (
                      <li key={feature.period} className="flex space-x-3">
                        {/* <CheckIcon
                        className="h-5 w-5 flex-shrink-0 text-green-500"
                        aria-hidden="true"
                      /> */}
                        <span className="text-sm font-bold text-gray-500">
                          {feature.period}:
                        </span>
                        <span className="text-sm text-gray-500">
                          {feature.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                {tier.extra && (
                  <div className="px-6 pt-6 pb-8 text-sm">{tier.extra}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl bg-white  px-4  sm:px-6 lg:px-8">
        <h2 className="pb-6 text-center text-3xl font-bold tracking-tight text-zinc-700">
          {DOC_TITLE}
        </h2>
        <p>{DOC_DESC}</p>
        {/* <div className="flex justify-center pb-8">
          <ul className="list-item">
            <li className="flex py-1">
              <CheckIcon className="h-6 w-6 text-green-400"></CheckIcon>
              <span className="ml-4">1 fotografia de carne del nen/a</span>
            </li>
            <li className="flex py-1">
              <CheckIcon className="h-6 w-6 text-green-400"></CheckIcon>
              <span className="ml-4">1 fotocòpia del DNI nen/a</span>
            </li>
            <li className="flex py-1">
              <CheckIcon className="h-6 w-6 text-green-400"></CheckIcon>
              <span className="ml-4">1 fotocòpia del DNI pare/mare</span>
            </li>
            <li className="flex py-1">
              <CheckIcon className="h-6 w-6 text-green-400"></CheckIcon>
              <span className="ml-4">1 fotocòpia de la targeta sanitària</span>
            </li>
            <li className="py-1">
              <Link
                href="/docs/inscripcio_escola.pdf"
                target="_blank"
                className="flex hover:underline "
              >
                <DocumentDownloadIcon className="h-6 w-6 text-red-500"></DocumentDownloadIcon>
                <span className="ml-4">Aquest formulari omplert</span>
              </Link>
            </li>
          </ul>
        </div> */}
        {/* <p className="pb-8 text-sm">
          <strong className="uppercase">Informació important: </strong>
          <span className="text-sm">{DOC_IMPORTANT}</span>
        </p> */}
      </div>

      {/* FAQ */}
      <div className="l mx-auto max-w-7xl bg-red-50 py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
          Preguntes freqüents
        </h2>
        <div className="mt-12">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 md:space-y-0 lg:grid-cols-3">
            {faqs.map((faq) => (
              <div key={faq.id} className="space-y-2">
                <dt className="text-lg font-medium font-bold leading-6 text-gray-900">
                  {faq.question}
                </dt>
                <dd className="text-base text-gray-500">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  )
}
