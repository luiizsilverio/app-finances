import React from 'react';
import Feather from '@expo/vector-icons/Feather';

import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <S.MenuWrapper>
        <Feather name="menu" size={32} color="#121212" />
      </S.MenuWrapper>
      <S.UserWrapper>
        <S.UserImageWrapper>
          <S.UserImage 
            source={{uri: 'https://github.com/luiizsilverio.png'}} 
            resizeMode='cover'
          />
        </S.UserImageWrapper>
      </S.UserWrapper>
    </S.Container>
  );
}