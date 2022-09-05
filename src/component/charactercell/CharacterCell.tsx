import React from 'react';
import {TouchableHighlight} from 'react-native';
import {
  Container,
  ContainerElement,
  ImageCharacter,
  TextName,
} from './CharacterCell.style';

/**
 * @name CharacterCell propTypes
 * @type {propTypes}
 * @memberof CharacterCell
 * @static
 * @example
 * <CharacterCell onPress={onPress} name= {name} sourceImage={sourceImage} id={id} />
 */

const CharacterCell = (props: {
  onPress?: any;
  id?: any;
  sourceImage?: any;
  name?: any;
}) => {
  const _detailCharacter = () => {
    props.onPress(props.id);
  };

  const {sourceImage, name} = props;

  return (
    <Container>
      <TouchableHighlight
        underlayColor={'transparent'}
        onPress={_detailCharacter}>
        <ContainerElement>
          <ImageCharacter source={{uri: sourceImage}} />
          <TextName>{name}</TextName>
        </ContainerElement>
      </TouchableHighlight>
    </Container>
  );
};

export default CharacterCell;

CharacterCell.defaultProps = {
  onPress: undefined,
  name: '',
  sourceImage: '',
  id: 0,
};
