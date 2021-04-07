import React, { useRef, useState } from "react";
import { SafeAreaView, Keyboard, TouchableWithoutFeedback } from "react-native";
import Header from "../../components/Header";
import {
  Container,
  Texto,
  Box,
  Input,
  BoxInput,
  Botao,
  BotaoTexto,
  ContainerBox,
  TextoTitulo,
  ContainerModal,
  ModalTitulo,
  ModalTexto,
} from "./styles";
import { Modalize } from "react-native-modalize";

export default function Laje() {

  const modalizeRef = useRef(null);

  function abrirModal() {
    modalizeRef.current?.open();
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
              <Texto>  Calcular tamanho da Laje</Texto>
              <BoxInput>
                <Texto>largura da laje: (viga) </Texto>
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
                <Texto>Comprimento da laje: </Texto>
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
              Laje de {larg}X{comp}
            </ModalTexto>
            <ModalTexto>
              Tamanho Total da laje:{"\n"}{totalLaje}Mts².
            </ModalTexto>
            <ModalTexto>
              Quantidade de vigas: {"\n"}{vigas} vigas com {larg} mts.
            </ModalTexto>
            
            <ModalTexto>
              Quantidade de isopor:{"\n"}{isopor} placas de 0,30x0,8x1,00.
            </ModalTexto>

          </ContainerModal>
        </Modalize>

      </Container>
    </TouchableWithoutFeedback>
  );
}
