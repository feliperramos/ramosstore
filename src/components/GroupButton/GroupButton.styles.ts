import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 2px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary.purple_dark};
  flex: 1 0 auto;
  position: relative;
`;

export const FeedbackText = styled.Text`
  color: ${({ theme }) => theme.colors.primary.acqua};
  font-size: 12px;
  text-align: center;
`;

export const Text = styled.Text``;

export const OperatorPressable = styled.Pressable.attrs({
  hitSlop: 4,
})`
  padding: 4px;
`;

export const OperatorText = styled.Text`
  color: ${({ theme }) => theme.colors.primary.purple_dark};
  font-size: 20px;
  line-height: 24px;
`;
