import { Header } from '@/components/Header'
import { CalendarGroup } from '@/components/Calendar'
import { Container } from '@/components/Container'

export default function Calendar() {
  return (
    <>
      <Header />
      <Container>
        <CalendarGroup />
      </Container>
    </>
  )
}
