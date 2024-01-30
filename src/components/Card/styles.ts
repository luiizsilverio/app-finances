import styled, { DefaultTheme } from 'styled-components/native'

interface Props {
  bgColor: string;  
}

export const Container = styled.View<Props>`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 10px;
  margin: 0 16px;
  background-color: ${(props: Props) => props.bgColor};   
`;

export const Title = styled.Text`
  font-family: ${({ theme }: DefaultTheme) => theme.fontTitle};
  font-size: ${({ theme }: DefaultTheme) => theme.h1};
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }: DefaultTheme) => theme.fontSubtitle};
  font-size: ${({ theme }: DefaultTheme) => theme.p};
`;

export const IconContainer = styled.View`
  margin-bottom: 8px;
`;
