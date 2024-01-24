import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalWrap = styled.View`
  width: 100%;
  height: 700px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 32px 16px;
`;

export const CloseButton = styled.TouchableOpacity``;

export const CloseIcon = styled.Text`
  font-size: 48px;
  margin-right: 8px;
  font-weight: ${({ theme }) => theme.fonts.weight.bolder};
  color: ${({ theme }) => theme.colors.white};
`;
