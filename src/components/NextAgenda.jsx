import { Container } from './Container'

import { format } from 'date-fns'
import { ca } from 'date-fns/locale'

export function NextAgenda({ agenda }) {
  return (
    <Container>
      <div className="mt-8 text-center">
        <h2 className=" text-3xl font-bold tracking-tight sm:text-3xl sm:tracking-tight">
          Agenda propera
        </h2>
      </div>
      <div className="mt-4 justify-center md:flex md:gap-x-6">
        {agenda.map((ev) => (
          <div className="" key={ev.slug}>
            <div className="mt-1 flex text-base font-bold">{ev.title}</div>
            <div className="flex justify-center">
              <div
                className={
                  ev.metadata.tags.length > 0
                    ? ev.metadata.tags[0]?.name === 'Escola'
                      ? 'max-w-lg rounded-md bg-red-400 py-2 px-8 text-white'
                      : 'max-w-lg rounded-md bg-red-500 py-2 px-8 text-white'
                    : 'max-w-lg rounded-md bg-red-500 py-2 px-8 text-white'
                }
              >
                <p className="text-center text-base font-extralight uppercase">
                  {format(new Date(ev.date), 'EEE', { locale: ca })}
                </p>
                <p className="text-center text-3xl font-black">
                  {format(new Date(ev.date), 'dd', {
                    locale: ca,
                  })}
                </p>
                <p className="text-center text-base font-extralight uppercase">
                  {format(new Date(ev.date), 'LLL yy', { locale: ca })}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="mt-4" />
    </Container>
  )
}
