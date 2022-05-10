import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <section>
    <Container>
      <Menu />
    </Container>
    {children}
    <S.SectionFooter>
      <Footer />
    </S.SectionFooter>
  </section>
)

export default Base
