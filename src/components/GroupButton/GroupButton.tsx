import React, { ReactNode } from 'react';

import {
  Container,
  FeedbackText,
  OperatorPressable,
  OperatorText,
  Text,
} from './GroupButton.styles';

interface GroupButtonProps {
  children: ReactNode;
  feedBackText?: boolean;
  decreaseQuantity(): void;
  increaseQuantity(): void;
}

function GroupButton({
  children,
  feedBackText,
  decreaseQuantity,
  increaseQuantity,
}: GroupButtonProps) {
  return (
    <Container>
      {feedBackText && <FeedbackText>Added to Cart</FeedbackText>}
      <OperatorPressable onPress={decreaseQuantity}>
        <OperatorText>-</OperatorText>
      </OperatorPressable>
      <Text>{children}</Text>
      <OperatorPressable onPress={increaseQuantity}>
        <OperatorText>+</OperatorText>
      </OperatorPressable>
    </Container>
  );
}

export default GroupButton;
