import styled from 'styled-components'
import { ICartProps, IInfosCartProps } from '../../constants/types'

export const Product = styled.div<ICartProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: var(--secundary);
  height: auto;
  padding: 0.5rem 1rem;
  margin: 3px 0;
  border-top: 2px solid var(--terciary);
  box-shadow: 0 0 5px var(--secundary);
  position: ${({ showingCart }) => (showingCart ? 'static' : 'absolute')};
`
export const ProductInfo = styled.div`
  display: flex;
  margin: 0 3px;
`

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1.5rem;
`
export const Infos = styled.strong<IInfosCartProps>`
  color: ${({ isProductDescription }) => isProductDescription && '#ffffff'};
`

export const ProductImage = styled.img`
  height: 4rem;
  width: 4rem;
  object-fit: contain;
  border: 1px solid #000000;
`
export const Button = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: flex-start;
`
