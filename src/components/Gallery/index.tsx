import * as React from "react";
import styled from "styled-components";
import CardImage from "./CardImage";

const GalleryWrapper = styled.section`
  display: grid;
  grid-row-gap: 50px;
  grid-template-columns: 45vw 45vw;
  grid-auto-rows: 200px;
  justify-items: self-end;
  width: 100vw;
  justify-content: space-evenly;

  @media (min-width: 48rem) {
    grid-template-columns: 30vw 30vw 30vw;
  }

  @media (min-width: 64rem) {
    grid-template-columns: 23vw 23vw 23vw 23vw;
  }
`;

export type handleClickCallbackFunction = (image: any) => void;

interface IGalleryProps {
  images: any[];
  onImageClick: handleClickCallbackFunction;
}

const handleImageClick = (
  onClickFunc: handleClickCallbackFunction,
  image: any
) => {
  return () => {
    onClickFunc(image);
  };
};

const Gallery: React.SFC<IGalleryProps> = ({ images, onImageClick }) => {
  return (
    <GalleryWrapper>
      {images.map(imageData => {
        const {
          id,
          images: {
            fixed_height_downsampled: { webp: src }
          },
          title,
          user: {
            avatar_url: userAvatarUrl = "https://picsum.photos/20/20",
            display_name: userName = "Anonymous",
            userName: altName = "anonymous"
          } = {
            avatar_url: "https://picsum.photos/20/20",
            display_name: "Anonymous",
            userName: "anonymous"
          }
        } = imageData;
        return (
          <CardImage
            onClick={handleImageClick(onImageClick, src)}
            key={id}
            src={src}
            title={title}
            altName={altName}
            userAvatarUrl={userAvatarUrl}
            userName={userName}
          />
        );
      })}
    </GalleryWrapper>
  );
};

export default Gallery;
