import React from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  ContainerBox,
  TextoTitulo,
  ContainerTelhas,
  Imagen,
  Texto,
} from "./styles";

export default function Telhas() {
  const navigation = useNavigation();

  function irTelhaAmericanas() {
    navigation.navigate("TelhaAmericana");
  }
  function irTelhaColonial() {
    navigation.navigate("TelhaColonial");
  }

  return (
    <Container>
      <Header />
      <TextoTitulo>Telhas</TextoTitulo>
      <ContainerBox>
        <ContainerTelhas onPress={irTelhaAmericanas}>
          <Imagen source={require("../../images/TelhaAmericana.png")} resizeMode="contain" />
          <Texto>Telha Americana</Texto>
        </ContainerTelhas>
        <ContainerTelhas onPress={irTelhaColonial}>
          <Imagen source={require("../../images/TelhaColonial.png")} resizeMode="contain"/>
          <Texto>Telha Colonial</Texto>
        </ContainerTelhas>
      </ContainerBox>
    </Container>
  );
}
