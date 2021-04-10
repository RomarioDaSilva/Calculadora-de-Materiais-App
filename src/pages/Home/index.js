import React from 'react';
import { ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  ContainerBox,
  TextoTitulo,
  Box,
  Texto,
  Imagen,
} from './styles';
import Header from '../../components/Header';

export default function Home() {
  const navigation = useNavigation();

  function irTelhas() {
    navigation.navigate('Telhas');
  }
  function irTijolos() {
    navigation.navigate('Tijolos');
  }
  function irLaje() {
    navigation.navigate('Laje');
  }

  return (
    <Container>
      <Header />
      <TextoTitulo>Bem Vindo!</TextoTitulo>
      <ContainerBox>
        <ScrollView>
          <Box onPress={irTelhas}>
            <Imagen source={require('../../images/Telhas.png')} />
            <Texto>Telhas</Texto>
          </Box>

          <Box onPress={irTijolos}>
            <Imagen
              source={require('../../images/Tijolo8furos.png')}
              resizeMode="contain"
            />
            <Texto>Tijolos</Texto>
          </Box>

          <Box onPress={irLaje}>
            <Imagen source={require('../../images/Laje.png')} />
            <Texto>Laje</Texto>
          </Box>
        </ScrollView>
      </ContainerBox>
    </Container>
  );
}
