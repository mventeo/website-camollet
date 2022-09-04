/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useRef } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const groups = [
  {
    id: 0,
    text: 'Tancat',
    time: '13:00 - 15:00',
    col_start: 'sm:col-start-1',
    gridRow: '50 / span 24',
    col_span: 'sm:col-span-5',
    bg_color: 'bg-gray-200',
    text_color: 'text-gray-800',
    time_color: 'text-gray-700',
  },
  {
    id: 1,
    text: 'Socis Club',
    time: '9:00 - 13:00',
    col_start: 'sm:col-start-1',
    gridRow: '2 / span 48',
    col_span: 'sm:col-span-5',
    bg_color: 'bg-green-200',
    text_color: 'text-green-800',
    time_color: 'text-green-700',
  },
  {
    id: 2,
    text: 'Socis Club',
    time: '15:00 - 18:00',
    col_start: 'sm:col-start-1',
    gridRow: '74 / span 36',
    col_span: 'sm:col-span-5',
    bg_color: 'bg-green-200',
    text_color: 'text-green-800',
    time_color: 'text-green-700',
  },
  {
    id: 3,
    text: 'Socis Club',
    time: '20:00 - 21:15',
    col_start: 'sm:col-start-1',
    gridRow: '134 / span 15',
    col_span: 'sm:col-span-1',
    bg_color: 'bg-green-200',
    text_color: 'text-green-800',
    time_color: 'text-green-700',
  },
  {
    id: 4,
    text: 'Socis Club',
    time: '20:15 - 21:15',
    col_start: 'sm:col-start-2',
    gridRow: '137 / span 12',
    col_span: 'sm:col-span-1',
    bg_color: 'bg-green-200',
    text_color: 'text-green-800',
    time_color: 'text-green-700',
  },
  {
    id: 5,
    text: 'Socis Club',
    time: '19:30 - 21:15',
    col_start: 'sm:col-start-3',
    gridRow: '128 / span 21',
    col_span: 'sm:col-span-1',
    bg_color: 'bg-green-200',
    text_color: 'text-green-800',
    time_color: 'text-green-700',
  },
  {
    id: 6,
    text: 'Socis Club',
    time: '19:30 - 21:15',
    col_start: 'sm:col-start-4',
    gridRow: '128 / span 21',
    col_span: 'sm:col-span-1',
    bg_color: 'bg-green-200',
    text_color: 'text-green-800',
    time_color: 'text-green-700',
  },
  {
    id: 7,
    text: 'Socis Club',
    time: '20:15 - 21:15',
    col_start: 'sm:col-start-5',
    gridRow: '137 / span 12',
    col_span: 'sm:col-span-1',
    bg_color: 'bg-green-200',
    text_color: 'text-green-800',
    time_color: 'text-green-700',
  },
  {
    id: 8,
    text: 'Socis Club',
    time: '18:00 - 18:45',
    col_start: 'sm:col-start-3',
    gridRow: '110 / span 8',
    col_span: 'sm:col-span-1',
    bg_color: 'bg-green-200',
    text_color: 'text-green-800',
    time_color: 'text-green-700',
  },
  {
    id: 21,
    text: 'Grup de Velocitat i Salts',
    time: '18:00 - 19:15',
    col_start: 'sm:col-start-1',
    gridRow: '110 / span 15',
    col_span: 'sm:col-span-1',
    bg_color: 'bg-indigo-200',
    text_color: 'text-indigo-800',
    time_color: 'text-indigo-700',
  },
  {
    id: 22,
    text: 'Grup de Velocitat i Salts',
    time: '18:00 - 19:30',
    col_start: 'sm:col-start-4',
    gridRow: '110 / span 18',
    col_span: 'sm:col-span-1',
    bg_color: 'bg-indigo-200',
    text_color: 'text-indigo-800',
    time_color: 'text-indigo-700',
  },
  {
    id: 23,
    text: 'Grup de Velocitat i Salts',
    time: '18:00 - 19:30',
    col_start: 'sm:col-start-5',
    gridRow: '110 / span 18',
    col_span: 'sm:col-span-1',
    bg_color: 'bg-indigo-200',
    text_color: 'text-indigo-800',
    time_color: 'text-indigo-700',
  },
  {
    id: 24,
    text: 'Grup de Velocitat i Salts',
    time: '18:00 - 18:30',
    col_start: 'sm:col-start-2',
    gridRow: '110 / span 6',
    col_span: 'sm:col-span-1',
    bg_color: 'bg-indigo-200',
    text_color: 'text-indigo-800',
    time_color: 'text-indigo-700',
  },
  {
    id: 31,
    text: 'Grup de Llançaments',
    time: '19:15 - 20:00',
    col_start: 'sm:col-start-1',
    gridRow: '125 / span 9',
    col_span: 'sm:col-span-1',
    bg_color: 'bg-red-200',
    text_color: 'text-red-800',
    time_color: 'text-red-700',
  },
  {
    id: 32,
    text: 'Grup de Llançaments',
    time: '18:45 - 19:30',
    col_start: 'sm:col-start-3',
    gridRow: '118 / span 10',
    col_span: 'sm:col-span-1',
    bg_color: 'bg-red-200',
    text_color: 'text-red-800',
    time_color: 'text-red-700',
  },
  {
    id: 41,
    text: 'Grup de Fons i Mig-Fons',
    time: '18:30 - 19:30',
    col_start: 'sm:col-start-2',
    gridRow: '116 / span 12',
    col_span: 'sm:col-span-1',
    bg_color: 'bg-yellow-200',
    text_color: 'text-yellow-800',
    time_color: 'text-yellow-700',
  },
  {
    id: 51,
    text: 'Grup de Cadets',
    time: '19:30 - 20:15',
    col_start: 'sm:col-start-2',
    gridRow: '128 / span 9',
    col_span: 'sm:col-span-1',
    bg_color: 'bg-orange-200',
    text_color: 'text-orange-800',
    time_color: 'text-orange-700',
  },
  {
    id: 52,
    text: 'Grup de Cadets',
    time: '19:30 - 20:15',
    col_start: 'sm:col-start-5',
    gridRow: '128 / span 9',
    col_span: 'col-span-1',
    bg_color: 'bg-orange-200',
    text_color: 'text-orange-800',
    time_color: 'text-orange-700',
  },
]

export function GymCalendar() {
  const container = useRef(null)
  const containerNav = useRef(null)
  const containerOffset = useRef(null)

  return (
    <div className="bg-white py-8">
      <div
        ref={container}
        className="flex flex-auto flex-col overflow-auto bg-white"
      >
        <div
          style={{ width: '165%' }}
          className="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full"
        >
          <div
            ref={containerNav}
            className="sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black ring-opacity-5 sm:pr-8"
          >
            <div className="grid grid-cols-5 text-sm leading-6 text-gray-500 sm:hidden">
              <button
                type="button"
                className="flex flex-col items-center pt-2 pb-3"
              >
                Dl.{' '}
              </button>
              <button
                type="button"
                className="flex flex-col items-center pt-2 pb-3"
              >
                Dm.{' '}
              </button>
              <button
                type="button"
                className="flex flex-col items-center pt-2 pb-3"
              >
                Dx.{' '}
              </button>
              <button
                type="button"
                className="flex flex-col items-center pt-2 pb-3"
              >
                Dj.{' '}
              </button>
              <button
                type="button"
                className="flex flex-col items-center pt-2 pb-3"
              >
                Dv.{' '}
              </button>
            </div>

            <div className="-mr-px hidden grid-cols-5 divide-x divide-gray-100 border-r border-gray-100 text-sm leading-6 text-gray-500 sm:grid">
              <div className="col-end-1 w-14" />
              <div className="flex items-center justify-center py-3">
                <span>Dilluns </span>
              </div>
              <div className="flex items-center justify-center py-3">
                <span>Dimarts </span>
              </div>
              <div className="flex items-center justify-center py-3">
                <span className="flex items-baseline">Dimecres </span>
              </div>
              <div className="flex items-center justify-center py-3">
                <span>Dijous </span>
              </div>
              <div className="flex items-center justify-center py-3">
                <span>Divendres </span>
              </div>
            </div>
          </div>
          <div className="flex flex-auto">
            <div className="sticky left-0 z-10 w-14 flex-none bg-white ring-1 ring-gray-100" />
            <div className="grid flex-auto grid-cols-1 grid-rows-1">
              {/* Horizontal lines */}
              <div
                className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
                style={{ gridTemplateRows: 'repeat(48, minmax(3.5rem, 1fr))' }}
              >
                <div ref={containerOffset} className="row-end-1 h-5"></div>
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    09:00
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    10:00
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    11:00
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    12:00
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    13:00
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    14:00
                  </div>
                </div>
                <div />

                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    15:00
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    16:00
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    17:00
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    18:00
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    19:00
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    20:00
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    21:00
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    22:00
                  </div>
                </div>
              </div>

              {/* Vertical lines */}
              <div className="col-start-1 col-end-2 row-start-1 hidden grid-cols-5 grid-rows-1 divide-x divide-gray-100 sm:grid sm:grid-cols-5">
                <div className="col-start-1 row-span-full" />
                <div className="col-start-2 row-span-full" />
                <div className="col-start-3 row-span-full" />
                <div className="col-start-4 row-span-full" />
                <div className="col-start-5 row-span-full" />
                {/* <div className="col-start-6 row-span-full" />
                <div className="col-start-7 row-span-full" /> */}
                <div className="col-start-6 row-span-full w-8" />
              </div>

              {/* Events */}
              <ol
                className="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-5 sm:pr-8"
                style={{
                  gridTemplateRows: '1.75rem repeat(288, minmax(0, 1fr)) auto',
                }}
              >
                {groups.map((group) => (
                  <li
                    key={group.id}
                    className={classNames(
                      'relative mt-px flex',
                      group.col_span,
                      group.col_start
                    )}
                    style={{ gridRow: group.gridRow }}
                  >
                    <span
                      className={classNames(
                        'group absolute inset-1 flex flex-col overflow-y-auto rounded-lg px-2 text-xs leading-5',
                        group.bg_color
                      )}
                    >
                      <p
                        className={classNames(
                          'order-1 font-semibold',
                          group.text_color
                        )}
                      >
                        {group.text}
                      </p>
                      <p className={classNames(group.time_color)}>
                        {group.time}
                      </p>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
