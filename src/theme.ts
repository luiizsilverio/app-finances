import { DefaultTheme } from "styled-components/native";

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    fontTitle: string;
    fontSubtitle: string;
    h1: string;
    p: string;
    space: string;
  }
}

export const theme: DefaultTheme = {
  background: '#FFF',
  fontTitle: 'Inter_800ExtraBold',
  fontSubtitle: 'Inter_500Medium',
  h1: '20px',
  p: '12px',
  space: '16px',
}
