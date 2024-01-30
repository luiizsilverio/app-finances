import React, { ReactElement } from 'react';

import * as S from './styles';

interface CardProps {
  title: string;
  subtitle: string;
  color: string;
  icon: ReactElement;
}

export function Card({ title, subtitle, color = '#f8eee6', icon }: CardProps) {
  return (
    <S.Container bgColor={color}>
      <S.IconContainer>{ icon }</S.IconContainer>

      <S.Title>{ title }</S.Title>

      <S.Subtitle>{ subtitle }</S.Subtitle>
    </S.Container>
  );
}