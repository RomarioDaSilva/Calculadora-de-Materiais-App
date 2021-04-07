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

export default function TijoloVinteNove() {

  const modalizeRef = useRef(null);

  function abrirModal() {
    modalizeRef.current?.open();
  }

  const [comp, setComp] = useState(0);
  const [alt, setAlt] = useState(0);
  const totalParede = (comp * alt).toFixed(2);
  const totalTijolos = (totalParede * 17.25).toFixed(0);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header />
        <TextoTitulo>Tijolo 9X19X24</TextoTitulo>

        <ContainerBox>
          <Box>
            <SafeAreaView>
              <Texto>  Calcular tijolo de 19x24</Texto>
              <BoxInput>
                <Texto>Comprimento da parede: </Texto>
                <Input
                  value={comp}
                  onChangeText={(comp) => setComp(comp)}
                  placeholder="Mts"
                  keyboardType="numeric"
                  returnKeyType="next"
                  onSubmitEditing={() => Keyboard.dismiss()}
                />
              </BoxInput>

              <BoxInput>
                <Texto>Altura da parede: </Texto>
                <Input
                  value={alt}
                  onChangeText={(alt) => setAlt(alt)}
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
              Tamanho Total do Parede: {totalParede}Mts²
            </ModalTexto>
            <ModalTexto>
              Quantidade Total do tijolos: {totalTijolos} un
            </ModalTexto>
            
            <ModalTexto>
              
            </ModalTexto>

          </ContainerModal>
        </Modalize>

      </Container>
    </TouchableWithoutFeedback>
  );
}
