import React from 'react';

import {
  CloseButton,
  CloseIcon,
  Container,
  ModalWrap,
} from './ModalContent.styles';

interface ModalContentProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
}

function ModalContent({ visible, setvisible }: ModalContentProps) {
  return (
    <Container>
      <CloseButton>
        <CloseIcon>X</CloseIcon>
      </CloseButton>
      <ModalWrap></ModalWrap>
    </Container>
  );
}

export default ModalContent;
