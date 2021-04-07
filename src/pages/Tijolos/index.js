import React from "react";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  ContainerBox,
  TextoTitulo,
  BotaoBox,
  Texto,
} from "./styles";

export default function Tijolos() {
  const navigation = useNavigation();

  function irVinteQuatro() {
    navigation.navigate("TijoloVinteQuatro");
  }

  function irVinteNove() {
    navigation.navigate("TijoloVinteNove")
  }

  function irDezenove() {
    navigation.navigate("TijoloDezenove")
  }

  return (
    <Container>
      <Header />
      <TextoTitulo>Tijolo 8 furos</TextoTitulo>

      <ContainerBox>
        <BotaoBox onPress={irDezenove}>
          <Texto>Tijolo 9 X 19 X 19 </Texto>
        </BotaoBox>

        <BotaoBox onPress={irVinteQuatro}>
          <Texto>Tijolo 9 X 19 X 24 </Texto>
        </BotaoBox>

        <BotaoBox onPress={irVinteNove}>
          <Texto>Tijolo 9 X 19 X 29 </Texto>
        </BotaoBox>
      </ContainerBox>
    </Container>
  );
}
