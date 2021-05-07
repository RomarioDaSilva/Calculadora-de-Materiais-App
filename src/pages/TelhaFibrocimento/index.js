import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  ContainerBox,
  TextoTitulo,
  Box,
  Imagen,
  Texto,
} from './styles';

export default function TelhaFibrocimento() {
  const navigation = useNavigation();

  function irTelha244() {
    navigation.navigate('Telha 244');
  }
  function irTelha183() {
    navigation.navigate('Telha 183');
  }
  function irTelha153() {
    navigation.navigate('Telha 153');
  }

return (
  <Container>
    <Header />
    <TextoTitulo>Bem Vindo!</TextoTitulo>
    <ContainerBox>
      <ScrollView>
      <ContainerBox>
        <Box onPress={irTelha244}>
          <Imagen
            source={require('../../images/TelhaFibrocimento.jpeg')}
            resizeMode="contain"
          />
          <Texto>Telha 2,44 x 1,10</Texto>
        </Box>
        <Box onPress={irTelha183}>
          <Imagen
            source={require('../../images/TelhaFibrocimento.jpeg')}
            resizeMode="contain"
          />
          <Texto>Telha 1,83 x 1,10</Texto>
        </Box>
        <Box onPress={irTelha153}>
          <Imagen
            source={require('../../images/TelhaFibrocimento.jpeg')}
            resizeMode="contain"
          />
          <Texto>Telha 1,53 x 1,10</Texto>
        </Box>
      </ContainerBox>
      </ScrollView>
    </ContainerBox>
  </Container>
);
}
