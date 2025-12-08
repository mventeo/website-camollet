import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Reglament() {
  return (
    <>
      <Head>
        <title>Reglament - Cursa Sant Vicenç 2026</title>
        <meta
          name="description"
          content="Reglament de la XXVII Cursa Popular Mollet del Vallès - Cursa Sant Vicenç 2026"
        />
      </Head>

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <Link
          href="/"
          className="mb-6 inline-flex items-center text-red-600 hover:text-red-500 sm:mb-8"
        >
          <svg
            className="mr-2 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Tornar a l&apos;inici
        </Link>

        <h1 className="mb-6 text-2xl font-bold text-gray-900 sm:mb-8 sm:text-4xl">
          Reglament de la Cursa
        </h1>

        <div className="prose prose-sm max-w-none sm:prose-lg">
          <ol className="space-y-6">
            <li>
              <p>
                L&apos;Ajuntament de Mollet del Vallès i el Club Atlètic Mollet organitzen la <strong>XXVII Cursa Popular Mollet del Vallès, 16è. Memorial Jordi Solé Tura</strong>, que se celebrarà el dia <strong>1 de febrer de 2026</strong> a les 9.30 h (volta popular solidària Institut Guttmann) i 10.30 h (cursa de 5 i de 10 km), coincidint amb els actes que es celebren per aquesta festivitat de Sant Vicenç.
              </p>
            </li>

            <li>
              <p>
                La volta popular solidària és una volta a la pista d&apos;atletisme (400 m.) accessible per <strong>TOTHOM</strong>. La cursa de 10 km (aprox.) és de circuit mixt pel poble de Mollet i l&apos;Espai Rural de Gallecs, i la cursa de 5 km (aprox.) és totalment urbana. Ambdues es controlaran mitjançant el sistema Championchip.
              </p>
            </li>

            <li>
              <p>
                <strong>Volta popular solidària Institut Guttmann:</strong> Tots els participants rebran una medalla a l&apos;arribada. L&apos;import de l&apos;inscripció a aquesta cursa es destina íntegrament a l&apos;Institut Guttmann. Els participants a la Volta popular no tenen xip ni bossa del corredor.
              </p>
            </li>

            <li>
              <p>
                <strong>Cursa 5 km (aprox.):</strong> Rebran premi els tres primers classificats masculins i femenins.
              </p>
            </li>

            <li>
              <p>
                <strong>Cursa 10 km (aprox.):</strong> NO ÉS PERMESA LA PARTICIPACIÓ DE MENORS DE 16 ANYS. Rebran premi el primer i la primera classificats de la cursa en general i els tres primers classificats de cada categoria, tant masculina com femenina. Qui rebi premi a la general, no en tindrà a la categoria. Els premis es donaran per ordre d&apos;arribada.
              </p>
            </li>

            <li>
              <div>
                <p className="mb-4"><strong>Categories per la cursa de 10 km:</strong></p>
                <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
                  <table className="min-w-full border-collapse border border-gray-300 text-sm sm:text-base">
                    <thead>
                      <tr className="bg-red-600 text-white">
                        <th className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">A</th>
                        <th className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">B</th>
                        <th className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">C</th>
                        <th className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">D</th>
                        <th className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">E</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1 text-center sm:px-4 sm:py-2">2009-2002</td>
                        <td className="border border-gray-300 px-2 py-1 text-center sm:px-4 sm:py-2">2001-1987</td>
                        <td className="border border-gray-300 px-2 py-1 text-center sm:px-4 sm:py-2">1986-1977</td>
                        <td className="border border-gray-300 px-2 py-1 text-center sm:px-4 sm:py-2">1976-1967</td>
                        <td className="border border-gray-300 px-2 py-1 text-center whitespace-nowrap sm:px-4 sm:py-2">1966 i ant.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </li>

            <li>
              <div>
                <p className="mb-2">Les inscripcions es poden fer a <a href="https://www.camollet.cat" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-500">www.camollet.cat</a> i a <a href="https://www.xipgroc.cat" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-500">www.xipgroc.cat</a>.</p>
                <ul className="mt-2 list-disc pl-6 space-y-1">
                  <li><strong>Volta popular solidària:</strong> 3 &euro;. L&apos;import de l&apos;inscripció es destina íntegrament a l&apos;Institut Guttmann.</li>
                  <li><strong>Cursa 5 i 10 km:</strong> 15 &euro; per a propietaris de xip groc, 17 &euro; sense xip groc i de 19 &euro; el mateix dia fins a una hora abans. De cada inscripció, 1,5 &euro; es destina a l&apos;Institut Guttmann.</li>
                </ul>
                <p className="mt-4 rounded-lg bg-yellow-50 p-4 text-yellow-800">
                  <strong>La inscripció per Internet es tancarà el DIJOUS 29 de gener de 2026 a les 23.59 h, o quan s&apos;arribi als 1.300 participants.</strong>
                </p>
              </div>
            </li>

            <li>
              <div>
                <p className="mb-2"><strong>La recollida de dorsal i bossa del corredor</strong> serà en els següents punts:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Divendres 30 de gener de 16 h a 21 h i el dissabte 31 de 9 h a 20 h a la botiga <strong>MIRASSPORTS</strong> de Mollet del Vallès (c. Gallecs, 51, a 200 m. de la pista d&apos;atletisme).</li>
                  <li>El mateix dia de la cursa a les instal·lacions de l&apos;Escola Pública Joan Abelló (Av. del Parc, 25), fins a mitja hora abans de l&apos;hora de sortida.</li>
                </ul>
                <p className="mt-2">El xip de lloguer es recollirà el mateix dia de la competició a l&apos;Escola Pública Joan Abelló.</p>
                <p className="mt-2 font-semibold text-red-600">RECORDEU QUE PER LA RECOLLIDA CAL ACREDITAR-SE PRESENTANT EL DNI original o fotocòpia.</p>
              </div>
            </li>

            <li>
              <p>
                La cursa es considerarà tancada 2 hores després d&apos;haver donat la sortida. Passat aquest temps, els corredors que continuïn corrent ho faran sota la seva responsabilitat i no de l&apos;organització. La cursa estarà degudament senyalitzada. Els atletes circularan per la dreta de la carretera, sempre que no s&apos;indiqui el contrari i durant tota la cursa hauran de portar ben visible el seu dorsal.
              </p>
            </li>

            <li>
              <p>
                La cursa només es suspendrà en cas d&apos;inclemències del temps o per qualsevol altre problema que determini el responsable de l&apos;organització, i el seu veredicte serà inapel·lable.
              </p>
            </li>

            <li>
              <p>
                L&apos;organització disposa de l&apos;assegurança obligatòria, però no es fa responsable dels perjudicis morals o materials que puguin causar els participants i espectadors durant aquesta competició. L&apos;organització recomana als participants fer una revisió mèdica o prova d&apos;esforç a totes aquelles persones que no hagin corregut una prova de característiques similars anteriorment o portin un període prolongat de temps sense fer activitat física. L&apos;organització no es fa responsable de qualsevol patologia mèdica que pateixi el corredor durant la cursa o durant les hores properes a la seva finalització.
              </p>
            </li>

            <li>
              <p>
                L&apos;organització resoldrà tot allò no previst en aquest reglament.
              </p>
            </li>

            <li>
              <div>
                <p className="mb-2"><strong>Curses de 5 i 10 km:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Sortida:</strong> C. Granollers, a 300 metres de la pista</li>
                  <li><strong>Arribada:</strong> Pista Municipal d&apos;Atletisme</li>
                </ul>
              </div>
            </li>

            <li>
              <div>
                <p className="mb-4">
                  <strong>Recorregut:</strong> 10 km (aprox.) i 5 km (aprox.)
                </p>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/logos/cursa/Map.png"
                    alt="Mapa del recorregut de la cursa de 5 km i 10 km"
                    width={1700}
                    height={1100}
                    className="h-auto w-full"
                  />
                </div>
                <p className="mt-2 text-center text-sm text-gray-600">
                  Mapa del recorregut: Línia magenta (5 km) i línia groga (10 km)
                </p>
              </div>
            </li>

            <li>
              <div>
                <p className="mb-2"><strong>Obsequis:</strong></p>
                <p>Tots els participants a les curses de 5 i 10 km rebran una samarreta tècnica de màniga curta, beguda i diversos obsequis dels nostres patrocinadors.</p>
                <p className="mt-2">A l&apos;arribada de la cursa, es donarà aigua, fruita i brou.</p>
                <p className="mt-4"><strong>Sorteig de material esportiu:</strong> En finalitzar la cursa es farà un sorteig de material esportiu dels nostres patrocinadors.</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-red-600 px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-red-500"
          >
            <svg
              className="mr-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Tornar a l&apos;inici
          </Link>
        </div>
      </div>
    </>
  )
}
