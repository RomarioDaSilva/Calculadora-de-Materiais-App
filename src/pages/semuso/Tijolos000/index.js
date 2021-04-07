import React from "react";
import { View, Text } from "react-native";
import Header from "../../../components/Header";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  ContainerBox,
  TextoTitulo,
  ContainerTelhas,
  Imagen,
  Texto,
} from "./styles";

export default function Tijolos000() {
  const navigation = useNavigation();

  function irTijolo8() {
    navigation.navigate("TijoloOitofuros");
  }
  function irTijolo12() {
    navigation.navigate("TijoloDozeFuros");
  }

  return (
    <Container>
      <Header />
      <TextoTitulo>Tijolos</TextoTitulo>
      <ContainerBox>
        <ContainerTelhas onPress={irTijolo8}>
          <Imagen source={require("../../images/Tijolo8furos.png")} resizeMode="contain"/>
          <Texto>Tijolo 8 furos</Texto>
        </ContainerTelhas>
        <ContainerTelhas onPress={irTijolo12}>
          <Imagen source={require("../../images/Tijolo12furos.png")} resizeMode="contain"/>
          <Texto>tijolo 12 furos</Texto>
        </ContainerTelhas>
      </ContainerBox>
    </Container>
  );
}
