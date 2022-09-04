import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { GymCalendar } from '@/components/calendars/Gym'
import { Container } from '@/components/Container'

import { CMS_NAME } from '@/lib/constants'
import Head from 'next/head'
import { MainTitleDesc } from '@/components/layout/main_title'

const PAGE_TITLE = CMS_NAME + ' - Us del gimnàs'
const MAIN_TITLE = 'Us del gimnàs'

export default function Calendar() {
  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
      </Head>
      <Container className="bg-white">
        <MainTitleDesc title={MAIN_TITLE} />
        <GymCalendar />
      </Container>
    </>
  )
}
