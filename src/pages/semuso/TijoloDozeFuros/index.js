import React from "react";
import { Alert, View } from "react-native";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  ContainerBox,
  TextoTitulo,
  BotaoBox,
  Texto,
} from "./styles";

export default function TijoloDozeFuros() {
  const navigation = useNavigation();

  /*function irVinteQuatro() {
    navigation.navigate("TijoloVinteQuatro");
  }*/

  return (
    <Container>
      <Header />
      <TextoTitulo>Tijolo 12 furos</TextoTitulo>

      <ContainerBox>
        <BotaoBox>
          <Texto>Tijolo 14 X 19 X 19 </Texto>
        </BotaoBox>

        <BotaoBox>
          <Texto>Tijolo 14 X 19 X 24 </Texto>
        </BotaoBox>

        <BotaoBox>
          <Texto>Tijolo 14 X 19 X 29 </Texto>
        </BotaoBox>
      </ContainerBox>
    </Container>
  );
}
