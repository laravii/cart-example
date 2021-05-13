import styled from 'styled-components'

interface ICartProps {
  readonly showingCart: boolean
}

export const Container = styled.div<ICartProps>`
  opacity: ${({ showingCart }) => (showingCart ? '1' : '0')};
  transition: opacity 1s ease-in-out;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: auto;
  right: 0.1%;
  top: 21%;
  padding-bottom: 10px;
  z-index: 2;
  background-color: var(--terciary);

  @media (min-width: 320px) {
    top: 7.5%;
  }

  @media (min-width: 375px) {
    top: 7.6%;
  }

  @media (min-width: 425px) {
    top: 7.5%;
  }

  @media (min-width: 768px) {
    top: 11.5%;
  }
`
export const Line = styled.div`
  border-top: 1px solid #000000;
  width: 100%;
  background-color: black;
  margin: 5px 0 1rem 0;
`

export const SubtotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 1.5rem;
  padding: 0 1rem;
`
