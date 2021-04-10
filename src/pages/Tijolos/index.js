import React from 'react';
import { ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import {Container, ContainerBox, TextoTitulo, Box, Texto} from './styles';

export default function Tijolos() {
  const navigation = useNavigation();

  function irVinteQuatro() {
    navigation.navigate('TijoloVinteQuatro');
  }

  function irVinteNove() {
    navigation.navigate('TijoloVinteNove');
  }

  function irDezenove() {
    navigation.navigate('TijoloDezenove');
  }

  return (
    <Container>
      <Header />
      <TextoTitulo>Bem Vindo!</TextoTitulo>
      <ContainerBox>
        <ScrollView>
          <Box onPress={irDezenove}>
            <Texto>Tijolo 9 X 19 X 19 </Texto>
          </Box>

          <Box onPress={irVinteQuatro}>
            <Texto>Tijolo 9 X 19 X 24 </Texto>
          </Box>

          <Box onPress={irVinteNove}>
            <Texto>Tijolo 9 X 19 X 29 </Texto>
          </Box>
        </ScrollView>
      </ContainerBox>
    </Container>
  );
}
