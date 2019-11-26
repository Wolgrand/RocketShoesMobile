import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';
import colors from '../../styles/colors';

import logo from '../../../assets/images/logo.png';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  background: ${colors.dark};
  flex-direction: row;
  color: #fff;
`;

export const Container = styled.View`
  flex-direction: row;
  ${Platform.select({
    ios: css`
      flex: 1;
    `,
    android: css`
      flex: 0;
    `,
  })};
  background: ${colors.dark};
  justify-content: space-between;
  ${Platform.select({
    ios: css`
      padding: 20px;
    `,
    android: css`
      padding: 40px;
    `,
  })};
  color: #fff;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: ${colors.primary};
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
