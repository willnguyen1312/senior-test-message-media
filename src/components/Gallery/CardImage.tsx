import * as React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ImageCaption = styled.div`
  margin-top: 10px;
  display: flex;
`;

const Img = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

const UserAvatar = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  border-radius: 50%;
`;

const Text = styled.span`
  font-size: 0.8rem;

  @media (min-width: 48rem) {
    font-size: 1rem;
  }
`;

interface ICardImageProps {
  altName: string;
  src: string;
  title: string;
  userAvatarUrl: string;
  userName: string;
}

const CardImage: React.SFC<ICardImageProps> = ({
  src,
  userAvatarUrl,
  userName,
  title,
  altName
}) => {
  return (
    <CardWrapper>
      <Img src={src} alt={title} />
      <ImageCaption>
        <UserAvatar alt={altName} src={userAvatarUrl} />
        <Text>{userName}</Text>
      </ImageCaption>
    </CardWrapper>
  );
};

export default CardImage;
