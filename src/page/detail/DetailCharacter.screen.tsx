import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {GetCharacter} from '../../service/DetailCharacterService';
import {Character} from '../../model/Character';

import {
  DetailContainer,
  CharacterImage,
  TextName,
  TextDescription,
  TextInfo,
  ViewDescription,
  RowTextContainer,
  SubContainer,
} from './DetailCharacter.styles';

import LoadinRM from '../../component/ui/loadingrm/LoadinRM';
import {RMColors} from '../../assets/RMColors';

const DetailCharacter = (props: any) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [character, setCharacter] = useState<Character>({});

  useEffect(() => {
    setLoading(true);
    getCharacter(props.route.params.id);
  }, [props.route.params.id]);

  const getCharacter = (id: number) => {
    GetCharacter(id)
      .then(response => response.data)
      .then((response: Character) => {
        setCharacter(response);
        setLoading(false);
      })
      .catch(_error => {
        setLoading(false);
      });
  };

  const getData = (data: string) => {
    const returnData = data?.split('T');
    return returnData ? returnData[0] : '';
  };

  /**
   * @param {string} title
   * @param {string} description
   */
  const renderForms = (title: string, description: string) => {
    return (
      <ViewDescription>
        <TextInfo>{title}</TextInfo>
        <TextDescription>{description}</TextDescription>
      </ViewDescription>
    );
  };

  return (
    <>
      <StatusBar barStyle={RMColors.themes.statusBar} />
      <SafeAreaView style={{backgroundColor: RMColors.themes.backgroundColor}}>
        <LoadinRM loading={loading} />
        <DetailContainer>
          <CharacterImage
            source={{uri: character.image ? character.image : ''}}
            resizeMode="contain"
          />

          <SubContainer>
            <TextName>{character.name ? character.name : ''}</TextName>

            <RowTextContainer>
              {renderForms('Status:', character.status ? character.status : '')}
              {renderForms(
                'Specie:',
                character.species ? character.species : '',
              )}
            </RowTextContainer>

            <RowTextContainer>
              {renderForms(
                'Created:',
                getData(character.created ? character.created : ''),
              )}
              {renderForms('Gender:', character.gender ? character.gender : '')}
            </RowTextContainer>

            {renderForms(
              'Origin:',
              character.origin
                ? character.origin.name
                  ? character.origin.name
                  : ''
                : '',
            )}
            {renderForms(
              'Location:',
              character.location
                ? character.location.name
                  ? character.location.name
                  : ''
                : '',
            )}
          </SubContainer>
        </DetailContainer>
      </SafeAreaView>
    </>
  );
};

export default DetailCharacter;
