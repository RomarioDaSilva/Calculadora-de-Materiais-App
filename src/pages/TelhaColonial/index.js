import React, { useRef, useState } from "react";
import { SafeAreaView, Keyboard, TouchableWithoutFeedback } from "react-native";
import Header from "../../components/Header";
import {
  Container,
  ContainerBox,
  Box,
  TextoTitulo,
  Texto,
  Botao,
  BotaoTexto,
  Input,
  BoxInput,
  ContainerModal,
  ModalTitulo,
  ModalTexto,
  BotaoModal,
  BotaoModalTexto,
} from "./styles";
import { Modalize } from "react-native-modalize";

export default function TelhaColonial() {
  const modalizeRef = useRef(null);

  function abrirModal() {
    modalizeRef.current?.open();
  }
  const [larg, setLarg] = useState(0);
  const [comp, setComp] = useState(0);
  const totalTelhado = larg * comp;
  const totalTelhas = totalTelhado * 32;
  const totalRipas = totalTelhado * 3.95;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header />
        <TextoTitulo>Telha colonial</TextoTitulo>

        <ContainerBox>
          <Box>
            <Texto>Calcular tamanho do telhado em metros quadrados ²:</Texto>
            <SafeAreaView>
              <BoxInput>
                <Texto>Largura do telhado:</Texto>
                <Input
                  value={larg}
                  onChangeText={(larg) => setLarg(larg)}
                  placeholder="Mts"
                  keyboardType="numeric"
                  returnKeyType="next"
                  onSubmitEditing={() => Keyboard.dismiss()}
                />
              </BoxInput>

              <BoxInput>
                <Texto>Comprimento do telhado:</Texto>
                <Input
                  value={comp}
                  onChangeText={(comp) => setComp(comp)}                
                  placeholder="Mts"
                  keyboardType="numeric"
                  returnKeyType="next"
                  onSubmitEditing={() => Keyboard.dismiss()}
                />
              </BoxInput>
            </SafeAreaView>
            <Botao onPress={abrirModal}>
              <BotaoTexto>Calcular</BotaoTexto>
            </Botao>
          </Box>
        </ContainerBox>

        <Modalize ref={modalizeRef} snapPoint={500} /*o quanto vai abrir na tela o modal*/ >

          <ContainerModal>
            <ModalTitulo>Resultado final</ModalTitulo>
            <ModalTexto>
              Total de metros do telhado: {totalTelhado}mts².
            </ModalTexto>
            <ModalTexto>
              Total de telhas: {totalTelhas} un.
            </ModalTexto>
            <ModalTexto>
              Total de metros de ripas: {totalRipas}mts.
            </ModalTexto>
          </ContainerModal>

        </Modalize>

      </Container>
    </TouchableWithoutFeedback>
  );
}
