import React, { useRef, useState } from "react";
import { SafeAreaView, Keyboard, TouchableWithoutFeedback } from "react-native";
import Header from "../../components/Header";
import {
  Container,
  ContainerBox,
  Box,
  Texto,
  Botao,
  BotaoTexto,
  Input,
  BoxInput,
  ContainerModal,
  ModalTitulo,
  ModalTexto,
  TextoTitulo,
} from "./styles";
import { Modalize } from "react-native-modalize";

export default function TelhaAmericana() {
  const modalizeRef = useRef(null);

  function abrirModal() {
    modalizeRef.current?.open();
  }

  const [ larg, setLarg ] = useState(0);
  const [ comp, setComp ] = useState(0);
  const totalTelhado = larg * comp;
  const totalTelhas = totalTelhado * 13;
  const totalRipas = (totalTelhado * 3.8).toFixed(2);
  

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header />
        <TextoTitulo>TELHA AMERICANA</TextoTitulo>
        <ContainerBox>
          <Box>
            <SafeAreaView>
              <Texto>Calcular tamanho do telhado em metros quadrados ²:</Texto>
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
            <Botao onPress={ abrirModal }>
              <BotaoTexto>Calcular</BotaoTexto>
            </Botao>
          </Box>
        </ContainerBox>

        <Modalize ref={modalizeRef} snapPoint={500} /*o quanto vai abrir na tela o modal*/>
          <ContainerModal>

            <ModalTitulo>Resultado Final</ModalTitulo>
            <ModalTexto>
              Tamanho Total do telhado: {totalTelhado}Mts²
            </ModalTexto>
            <ModalTexto>
              Quantidade Total do telhas: {totalTelhas} un
            </ModalTexto>
            
            <ModalTexto>
              Quantidade total de mts de ripas: {totalRipas}Mts
            </ModalTexto>

          </ContainerModal>
        </Modalize>

      </Container>
    </TouchableWithoutFeedback>
  );
}
