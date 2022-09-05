import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {RMColors} from '../../assets/RMColors';

const SeparatorView = styled.View`
  width: 100%;
  height: 1px;
  margin-top: 20px;
  background-color: ${RMColors.themes.textTitle};
`;

const HeaderContainer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 2%;
`;

const HeaderText = styled.Text`
  flex: 1;
  margin-start: 8%;
  font-size: 30px;
  font-weight: bold;
  margin-top: 2%;
  color: ${RMColors.themes.textTitle};
`;

const HeaderImage = styled.Image.attrs({})`
  margin-end: 8%;
  height: 50px;
  width: 50px;
`;

const styles = StyleSheet.create({
  list: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
});

export {HeaderImage, HeaderText, HeaderContainer, SeparatorView, styles};
