import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  @media (min-width: 768px) {
    width: 45%;
  }
`
export const Cards = styled.div`
  display: flex;
  flex-direction: column;
`
export const ImageButton = styled.button`
  border: 0;
  background: none;

  height: 2.5rem;
  width: 2.5rem;
  margin: 5px 5px 0 5px;

  cursor: pointer;
  overflow: hidden;

  opacity: 0.6;
  transition: opacity 0.2s;
  &:hover,
  &.active {
    opacity: 1;
    border: 1px solid var(--sixth);
  }

  img {
    width: 100%;
    height: 2.5rem;
    object-fit: cover;
  }
  @media (min-width: 768px) {
    height: 4.3rem;
    width: 4.3rem;

    img {
      width: 100%;
      height: 4.3rem;
      object-fit: cover;
    }
  }
`
export const SelectedImage = styled.img`
  height: 12rem;
  width: 50%;
  object-fit: cover;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;

  @media (min-width: 768px) {
    height: 19rem;
  }
`
