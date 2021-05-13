import styled from 'styled-components'
import { Menu } from '@styled-icons/entypo/Menu'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  background-color: var(--primary);
  padding: 1rem;

  @media (min-width: 768px) {
    height: 5rem;
  }
`
export const Logo = styled.img`
  width: 3rem;
  height: 3rem;

  @media (min-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`

export const HamburgerMenu = styled(Menu)`
  width: 2rem;
  height: 2rem;
  color: black;

  @media (min-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`

export const CartAmountInfo = styled.div`
  position: absolute;
  display: flex;
  align-content: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  background-color: #d8272d;
  color: var(--light-text);
  font-weight: 600;
  border-radius: 50%;

  @media (min-width: 320px) {
    left: 85.5%;
    top: 3.7%;
  }
  @media (min-width: 360px) {
    left: 86.9%;
    top: 3.4%;
  }

  @media (min-width: 375px) {
    left: 87%;
    top: 3.3%;
  }

  @media (min-width: 425px) {
    left: 88.6%;
    top: 3.7%;
  }

  @media (min-width: 768px) {
    width: 1.1rem;
    height: 1.1rem;
    left: 92.9%;
    top: 5.6%;
  }

  @media (min-width: 1024px) {
    left: 94.7%;
    top: 6%;
  }
`
export const Button = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: flex-start;
`
