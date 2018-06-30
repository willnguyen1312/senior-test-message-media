import * as React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
`;

const Img = styled.img`
  width: 80vw;
  height: 300px;
  animation-name: zoom;
  animation-duration: 0.6s;

  @media (min-width: 48rem) {
    width: 60vw;
    height: auto;
    min-height: 480px;
  }

  @keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;

type closeModalCallbackFunction = () => void;

interface IModalProps {
  src: string;
  closeModal: closeModalCallbackFunction;
}

const handleClickOutside = (closeModal: closeModalCallbackFunction) => {
  return (e: React.MouseEvent<HTMLDivElement>) => {
    const id = (e.target as HTMLDivElement).id;
    if (id) {
      closeModal();
    }
  };
};

const Modal: React.SFC<IModalProps> = ({ src, closeModal }) => {
  return (
    <ModalWrapper id="modal" onClick={handleClickOutside(closeModal)}>
      <Img src={src} />
    </ModalWrapper>
  );
};

export default Modal;
