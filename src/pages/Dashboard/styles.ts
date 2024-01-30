import styled, { DefaultTheme } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }: DefaultTheme) => theme.fontTitle};
  font-size: 24px;
  color: #121212;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }: DefaultTheme) => theme.fontSubtitle};
  font-size: ${({ theme }: DefaultTheme) => theme.p};
  color: #666;
`;

export const CardContainer = styled.View`
  flex-direction: row;
    padding: 16px;
`;
