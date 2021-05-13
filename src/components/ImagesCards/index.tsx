import React, { useState } from 'react'
import { IImages } from '../../constants/types'

import { Container, Cards, ImageButton, SelectedImage } from './styles'

function ImagesCard({ images }: IImages) {
  const [selectedImage, setSelectedImage] = useState<string>(images[0])

  const selectingActiveImage = (id: number) => {
    setSelectedImage(images[id])
  }

  return (
    <Container>
      <Cards>
        {images.map((image, index) => {
          return (
            <ImageButton
              onClick={() => {
                selectingActiveImage(index)
              }}
              key={index}
            >
              <img src={image} alt="Foto do produto" />
            </ImageButton>
          )
        })}
      </Cards>
      <SelectedImage src={selectedImage} />
    </Container>
  )
}

export default ImagesCard
