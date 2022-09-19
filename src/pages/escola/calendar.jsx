import { Header } from '@/components/layout/Header'
import { SchoolCalendar } from '@/components/calendars/School'
import { Container } from '@/components/Container'

export default function Calendar() {
  return (
    <>
      <Header />
      <Container>
        <SchoolCalendar />
      </Container>
    </>
  )
}
