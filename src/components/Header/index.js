import React from 'react';
// import { connect } from 'react-redux';

import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Wrapper, Container, Logo, BasketContainer, ItemCount } from './styles';

function Header({ navigation, cartSize }) {
  return (
    <>
      {Platform.OS === 'ios' ? (
        <Wrapper>
          <Container>
            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
              <Logo />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <BasketContainer>
                <Icon name="shopping-basket" color="#FFF" size={24} />
              </BasketContainer>
              <ItemCount>{cartSize || 0}</ItemCount>
            </TouchableOpacity>
          </Container>
        </Wrapper>
      ) : (
        <Container>
          <TouchableNativeFeedback onPress={() => navigation.navigate('Main')}>
            <Logo />
          </TouchableNativeFeedback>
          <BasketContainer onPress={() => navigation.navigate('Cart')}>
            <Icon name="shopping-basket" color="#FFF" size={24} />
            <ItemCount>{cartSize || 0}</ItemCount>
          </BasketContainer>
        </Container>
      )}
    </>
  );
}

export default Header;
