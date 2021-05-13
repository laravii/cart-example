import styled from 'styled-components'
import { Heart } from '@styled-icons/boxicons-regular/Heart'
import { ArrowIosForward } from '@styled-icons/evaicons-solid/ArrowIosForward'

export const InfosProductCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;

  @media (min-width: 768px) {
    width: 55%;
    padding: 2rem 5px;

    line-height: 1;
  }
`
export const Description = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--dark-text);

  @media (min-width: 768px) {
    font-size: 2rem;
    line-height: 1.2;
  }
`

export const Line = styled.div`
  border-top: 1px solid var(--light-line);
  margin: 1rem 0;
  @media (min-width: 768px) {
    margin: 1.5rem 0;
  }
`

export const LikeIcon = styled(Heart)`
  height: 1rem;
  width: 1rem;
  color: #ffde54;
  @media (min-width: 768px) {
    height: 1.5rem;
    width: 1.5rem;
  }
`

export const Tag = styled.div`
  background: var(--fivety);
  color: var(--light-text);
  padding: 3px;
  width: 8rem;
  border-radius: 0 1rem 1rem 0;
  @media (min-width: 768px) {
    line-height: 1.5;
  }
`
export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`
export const PriceInfos = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;

  h5 {
    color: var(--dark-text);
  }

  h5 span {
    color: var(--secundary);
  }

  @media (min-width: 768px) {
    line-height: 1.5;
    font-size: 1rem;
  }
`
export const InstallmentInfos = styled.div`
  display: flex;
  align-items: center;
  color: var(--secundary);

  span {
    display: flex;
    font-size: 1rem;
  }
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5em;
  padding: 5px;
  margin: 0 1rem;
  background-color: var(--secundary);
  border: none;
  border-radius: var(--border-radius);
  color: var(--light-text);
  font-size: 0.7rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`

export const ArrowIcon = styled(ArrowIosForward)`
  width: 1rem;
  height: 1rem;
`
