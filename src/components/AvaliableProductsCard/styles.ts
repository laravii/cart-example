import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  background-color: var(--white-primary);
  border-radius: var(--border-radius);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
