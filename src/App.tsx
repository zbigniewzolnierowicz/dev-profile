import { FC } from 'react'
import styled from 'styled-components'
import { Header } from './components/Header'

const BasePage = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => `linear-gradient(${theme.colors.main[800]}, ${theme.colors.monochrome[800]})`};
  min-height: 100vh;
`

export const App: FC = () => {
  return (
    <BasePage>
      <Header />
      <main>
        I am man!
      </main>
    </BasePage>
  )
}
