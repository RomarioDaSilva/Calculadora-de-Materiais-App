import React, { useRef, useState } from "react";
import { SafeAreaView, Keyboard, TouchableWithoutFeedback } from "react-native";
import Header from "../../components/Header";
import { Modalize } from 'react-native-modalize';

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
  TextoResul,
} from "./styles";

export default function Laje() {

  const modalizeRef = useRef(null);

  function abrirModal() {
    modalizeRef.current?.open();
    Keyboard.dismiss()
  }

  const [comp, setComp] = useState(0);
  const [larg, setLarg] = useState(0);
  const totalLaje = (comp * larg).toFixed(2);
  const vigas = (comp / 0.4).toFixed(0);
  const isopor = (totalLaje * 2.25).toFixed(0);



  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header />
        <TextoTitulo>Laje de EPS(isopor)</TextoTitulo>

        <ContainerBox>
          <Box>
            <SafeAreaView>
              <Texto>Valores para calcular o tamanho de uma laje basica</Texto>
              <BoxInput>
                <Texto>largura da laje: (viga) </Texto>
                <Input
                  value={larg}
                  onChangeText={(text) => setLarg(text)}
                  placeholder="Mts"
                  keyboardType="numeric"
                  returnKeyType="next"
                  onSubmitEditing={() => Keyboard.dismiss()}
                />
              </BoxInput>

              <BoxInput>
                <Texto>Comprimento da laje:{"\n"} "lado oposto a viga" </Texto>
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
              Laje de {larg} X {comp}
            </ModalTexto>
            <ModalTexto>
              Tamanho Total da laje:
            </ModalTexto>
            <TextoResul>{totalLaje}Mts².</TextoResul>
            <ModalTexto>
              Quantidade de vigas:
            </ModalTexto>
            <TextoResul>{vigas} vigas com {larg} mts.</TextoResul>
            <ModalTexto>
              Quantidade de isopor:
            </ModalTexto>
            <TextoResul>{isopor} placas de 0,30x0,7x1,00.</TextoResul>
          </ContainerModal>
        </Modalize>

      </Container>
    </TouchableWithoutFeedback>
  );
}
