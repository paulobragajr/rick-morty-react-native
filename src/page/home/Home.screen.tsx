import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, StatusBar, Image} from 'react-native';

import {GetListCharacter} from '../../service/HomeService';
import {
  HeaderImage,
  HeaderText,
  HeaderContainer,
  SeparatorView,
  styles,
} from './Home.style';
import CharacterCell from '../../component/charactercell/CharacterCell';
import LoadingFooter from '../../component/ui/loadingfooter/LoadingFooter';

import {CharacterList} from '../../model/CharacterList';
import {RMColors} from '../../assets/RMColors';

const Home: React.FC<Props> = ({navigation}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingFooter, setLoadingFooter] = useState<boolean>(false);
  const [nextPage, setNextPage] = useState<number>(1);
  const [listCharacter, setListCharacter] = useState<Array<CharacterList>>([]);

  useEffect(() => {
    getListCharacter();
  }, []);

  /**
   * Request Service
   */
  const getListCharacter = () => {
    if (!loading) {
      setLoadingFooter(true);
    }

    GetListCharacter(nextPage)
      .then(response => response.data)
      .then((response: CharacterList) => {
        const list = [...listCharacter, ...response.results];
        setListCharacter(list);
        setNextPage(nextPage + 1);
        setLoading(false);
        setLoadingFooter(false);
      })
      .catch(error => {
        console.warn(error);
        setLoading(false);
        setLoadingFooter(false);
      });
  };

  const showDetails = (_id: number) => {
    navigation.navigate('DetailCharacter', {id: _id});
  };

  const _renderItem = ({item}) => {
    return (
      <CharacterCell
        id={item.id}
        name={item.name}
        sourceImage={item.image}
        onPress={showDetails}
      />
    );
  };

  const _renderFooter = <LoadingFooter loading={loadingFooter} />;

  return (
    <>
      <StatusBar barStyle={RMColors.themes.statusBar} />
      <SafeAreaView style={{backgroundColor: RMColors.themes.backgroundColor}}>
        <HeaderContainer>
          <HeaderText>Rick and Morty</HeaderText>
          <HeaderImage source={require('../../assets/logo_rick_morty.png')} />
        </HeaderContainer>
        <SeparatorView />

        <FlatList
          style={styles.list}
          onEndReached={getListCharacter}
          onEndReachedThreshold={0.1}
          data={listCharacter}
          renderItem={_renderItem}
          ListFooterComponent={_renderFooter}
        />
      </SafeAreaView>
    </>
  );
};

export default Home;
