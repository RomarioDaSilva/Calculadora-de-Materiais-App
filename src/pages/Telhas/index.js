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

export default function Telhas() {
  const navigation = useNavigation();

  function irTelhaAmericanas() {
    navigation.navigate('TelhaAmericana');
  }
  function irTelhaColonial() {
    navigation.navigate('TelhaColonial');
  }


return (
  <Container>
    <Header />
    <TextoTitulo>Bem Vindo!</TextoTitulo>
    <ContainerBox>
      <ScrollView>
      <ContainerBox>
        <Box onPress={irTelhaAmericanas}>
          <Imagen
            source={require('../../images/TelhaAmericana.png')}
            resizeMode="contain"
          />
          <Texto>Telha Americana</Texto>
        </Box>
        <Box onPress={irTelhaColonial}>
          <Imagen
            source={require('../../images/TelhaColonial.png')}
            resizeMode="contain"
          />
          <Texto>Telha Colonial</Texto>
        </Box>
      </ContainerBox>
      </ScrollView>
    </ContainerBox>
  </Container>
);
}
