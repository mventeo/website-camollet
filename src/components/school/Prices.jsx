/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/solid'

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
    paymentsInfo: [],
  },
]

const faqs = [
  {
    id: 1,
    question: 'Podem probar abans de fer la inscripció?',
    answer:
      "Si, el club permet la proba 1 dia sense carrec i donar l'oportunitat de coneixer el grup i els companys.",
  },
  {
    id: 2,
    question: 'Que pasa si un rebut es rebutjat?',
    answer:
      'En cas de devolució del rebut, el club carregarà 5€ sobre la reemissió, per les despeses bancàries ocasionades',
  },
  {
    id: 3,
    question: 'Que pasa si un rebut es impagat?',
    answer:
      "En cas d'impagament, la junta es reservarà la decisió de no permetre participar en les competicions ni entrenar al atleta",
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
  {
    id: 5,
    question: "Tinc descompte si s'apunten germans",
    answer:
      "Només amb l'opció 1 de 2 o 3 dies d'entrenament, en cas de germans, a partir del segón només pagaria 185 €/any en comptes dels 255 €/any.",
  },
  {
    id: 5,
    question: 'És obligatori anar a les competicions',
    answer:
      'No és obligatori, tot i que el club fomenta la participació esportiva i per tant animem a que els atletes participin a les competicions. No obstant és decisió del atleta o pares participar-hi. ',
  },
  {
    id: 5,
    question: "Quin horaris té l'escola d'atletisme?",
    answer: 'Els horaris són: Dilluns, Dimecres i Divendres de 18:00 a 19:30',
  },
  {
    id: 5,
    question: 'Quina roba he portar?',
    answer:
      "A diferencia d'altres escoles, no cal anar uniformats als entrenaments per tant podeu portar la vostra roba esportiva. Només a les competicions cal competir amb la roba del club, però amb l'inscripcio ve inclòs la samarreta i pantalò o calçetes.",
  },
]

export default function SchoolPrices() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8">
          <div className="sm:align-center sm:flex sm:flex-col">
            <h1 className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Preus de l'Escola d'atletisme 2022/2023
            </h1>
            <p className="mt-5 text-base text-gray-500 sm:text-center md:text-xl">
              Entenem les necessitats de les families, per això em adecuat els
              preus als dies d'entrenament i al nombre de fills inscrits.
            </p>
          </div>
          <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-2">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm"
              >
                <div className="p-6">
                  <h2 className="text-lg font-medium leading-6 text-gray-900">
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
                  <h3 className="text-sm font-medium text-gray-900">
                    Informació dels pagaments
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {tier.paymentsInfo.map((feature) => (
                      <li key={feature.period} className="flex space-x-3">
                        {/* <CheckIcon
                        className="h-5 w-5 flex-shrink-0 text-green-500"
                        aria-hidden="true"
                      /> */}
                        <span className="text-sm font-bold text-gray-500">
                          - {feature.period}:{' '}
                        </span>
                        <span className="text-sm text-gray-500">
                          {feature.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        {/* FAQ */}
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <div className="mt-12">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 md:space-y-0 lg:grid-cols-3">
              {faqs.map((faq) => (
                <div key={faq.id} className="space-y-2">
                  <dt className="text-lg font-medium leading-6 text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}
