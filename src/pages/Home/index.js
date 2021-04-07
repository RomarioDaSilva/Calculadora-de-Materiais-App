import React from "react";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  ContainerBox,
  TextoTitulo,
  Box,
  BoxInput,
  Texto,
  Imagen,
} from "./styles";
import Header from "../../components/Header";

export default function Home() {
  const navigation = useNavigation();

  function irTelhas() {
    navigation.navigate("Telhas");
  }
  function irTijolos() {
    navigation.navigate("Tijolos");
  }
  function irLaje() {
    navigation.navigate("Laje");
  }

  return (
    <Container>
      <Header />
      <TextoTitulo>Bem Vindo!</TextoTitulo>
      <ContainerBox>
        <Box>

        <SafeAreaView>
        <BoxInput onPress={irTelhas}>
          <Imagen source={require("../../images/Telhas.png")} />
          <Texto>Telhas</Texto>
        </BoxInput>

        <BoxInput onPress={irTijolos}>
          <Imagen
            source={require("../../images/Tijolo8furos.png")}
            resizeMode="contain"
          />
          <Texto>Tijolos</Texto>
        </BoxInput>

        <BoxInput onPress={irLaje}>
          <Imagen source={require("../../images/Laje.png")} />
          <Texto>Laje</Texto>
        </BoxInput>
        </SafeAreaView>
        </Box>
      </ContainerBox>
    </Container>
  );
}
