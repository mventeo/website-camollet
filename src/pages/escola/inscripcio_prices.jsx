import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'

/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon, DocumentDownloadIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const tiers = [
  {
    name: "Opció 1: 2 o 3 dies d'Entrenament",
    href: '#',
    priceYearly: 255,
    pricePeriod: 85,
    description:
      'Tots els dies, o dos dies entre dilluns, dimecres o divendres',
    includedFeatures: [
      'Samarreta i pantaló o calçeta de competició',
      'Grups de 15',
    ],
    paymentsInfo: [
      {
        period: 'Setembre',
        desc: "85 € en metàlic en el moment de l'inscripció",
      },
      {
        period: 'Desembre',
        desc: '85 € per compte bancari',
      },
      {
        period: 'Març',
        desc: '85 € per compte bancari',
      },
    ],
    extra:
      'Preu de 180 €/any a partir del segón germà. Exemple: En cas de dos germans, el primer tindria una quota de 255 €/any i el segón de 180 €/any.',
  },
  {
    name: "Opció 2: 1 dia d'Entrenament",
    href: '#',
    priceYearly: 180,
    pricePeriod: 60,
    description: 'A triar entre dilluns, dimecres o divendres',
    includedFeatures: [
      'Samarreta i pantaló o calçeta de competició',
      'Grups de 15',
    ],
    paymentsInfo: [
      {
        period: 'Setembre',
        desc: "60 € en metàlic en el moment de l'inscripció",
      },
      {
        period: 'Desembre',
        desc: '60 € per compte bancari',
      },
      {
        period: 'Març',
        desc: '60 € per compte bancari',
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
      "A partir de quines edats puc inscriure el meu fill/a a l'Escola?",
    answer:
      'És poden apuntar tot els nen/es nascuts entre els anys 2017 i 2010',
  },
  {
    id: 1,
    question: 'Podem probar abans de fer la inscripció?',
    answer:
      "Si, el club permet la proba 1 dia sense carrec i donar l'oportunitat de coneixer el grup i els companys.",
  },
  {
    id: 3,
    question: 'Que pasa si un rebut es impagat?',
    answer:
      "En cas d'impagament, la junta es reservarà la decisió de no permetre participar en les competicions ni entrenar al atleta",
  },

  {
    id: 6,
    question: "Tinc descompte si s'apunten germans",
    answer:
      "Només amb l'opció 1 de 2 o 3 dies d'entrenament, en cas de germans, a partir del segón només pagaria 185 €/any en comptes dels 255 €/any.",
  },
  {
    id: 7,
    question: 'És obligatori anar a les competicions',
    answer:
      'No és obligatori, tot i que el club fomenta la participació esportiva i per tant animem a que els atletes participin a les competicions. No obstant és decisió del atleta o pares participar-hi. ',
  },
  {
    id: 8,
    question: "Quins horaris té l'escola d'atletisme?",
    answer: 'Els horaris són: Dilluns, Dimecres i Divendres de 18:00 a 19:30',
  },
  {
    id: 9,
    question: 'Quina roba he portar?',
    answer:
      "No cal anar uniformats als entrenaments per tant podeu portar la vostra roba esportiva. Només a les competicions cal competir amb la roba del club, però amb l'inscripcio ve inclòs la samarreta i pantalò o calçetes.",
  },
  {
    id: 2,
    question: 'Que pasa si un rebut es rebutjat?',
    answer:
      'En cas de devolució del rebut, el club carregarà 5€ sobre la reemissió, per les despeses bancàries ocasionades',
  },
  {
    id: 4,
    question: 'Puc fraccionar el pagament en més quotes?',
    answer:
      "Com a màxim s'admetrà el pagament en 3 terminis (no s'acceptaran fraccionaments de 4 o més), i sempre pagat el 100% abans d'acabar l'any. Les excepcions seran mínimies i hauran de ser parlades amb la junta",
  },
  {
    id: 5,
    question: 'I si marxo abans de Juny?',
    answer:
      "Heu de pensar que tot atleta té associades despeses federatives i d'entrenadors. Un cop signada ...",
  },
]

const PAGE_TITLE = CMS_NAME + " - Apunta't a l'Escola d'Atletisme"
const MAIN_TITLE = "Preus de l'Escola d'Atletisme 2022/2023"
const MAIN_DESC = `Tots els dilluns, dimecres i divendres de 18:00 a 19:30. Opcions
de 1 o 2-3 dies a la setmana. Preu reduit a partir del segón germà
només amb la opció de 2-3 dies setmana.`
const PAYMENT_INFO = 'Informació sobre els pagaments'
const DOC_TITLE = 'Documentació necessaria per formalitzar la inscripció'
const DOC_DESC =
  "L'inscripció és podrá fer tots els dilluns, dimecres i divendres a la secretaria del club en horari de 18:00 a 19:30. Per formalitzar la inscripció cal portar els documents i omplir el formulari que indiquem a continuació."
const DOC_IMPORTANT =
  "El primer pagament s'ha de fer en metàlic al moment de l'incscripció e inclou un pagament adiccional de 12€ corresponent a l'assegurança obligatoria de la Federació Catalana d'Atletisme. És pot pagar amb targeta de crèdit o dèbit."

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
        <div className="flex justify-center pb-8">
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
        </div>
        <p className="pb-8 text-sm">
          <strong className="uppercase">Informació important: </strong>
          <span className="text-sm">{DOC_IMPORTANT}</span>
        </p>
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
