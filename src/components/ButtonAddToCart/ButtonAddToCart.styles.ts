import { css } from 'styled-components';
import styled from 'styled-components/native';

type Props = {
  loading: boolean;
};

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.purple_dark};
  border-radius: 32px;
  padding: 4px;
`;

export const IconWrap = styled.View<Props>`
  ${({ loading }) =>
    loading &&
    css`
      opacity: 0;
    `}
  margin-left: 8px;
`;

export const ButtonText = styled.Text<Props>`
  color: ${({ theme, loading }) =>
    loading ? 'transparent' : theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  font-size: 16px;
  text-align: center;
`;

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.white,
  size: 'small',
}))``;
