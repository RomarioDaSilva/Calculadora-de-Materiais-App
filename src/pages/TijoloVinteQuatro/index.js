import React, {useRef, useState} from 'react';
import {SafeAreaView, Keyboard, TouchableWithoutFeedback} from 'react-native';
import Header from '../../components/Header';
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
} from './styles';
import {Modalize} from 'react-native-modalize';

export default function TijoloVinteQuatro() {
  const modalizeRef = useRef(null);

  function abrirModal() {
    modalizeRef.current?.open();
    Keyboard.dismiss()
  }

  const [comp, setComp] = useState(0);
  const [alt, setAlt] = useState(0);
  const totalParede = (comp * alt).toFixed(2);
  const totalTijolos = (totalParede * 20).toFixed(0);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header />
        <TextoTitulo>Tijolo 9X19X24</TextoTitulo>

        <ContainerBox>
          <Box>
            <SafeAreaView>
              <Texto>Valores para calcular a quantidade de tijolos 19x24:</Texto>
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
            <Botao onPress={abrirModal}>
              <BotaoTexto>Calcular</BotaoTexto>
            </Botao>
          </Box>
        </ContainerBox>

        <Modalize
          ref={modalizeRef}
          snapPoint={500} /*o quanto vai abrir na tela o modal*/
        >
          <ContainerModal>
            <ModalTitulo>Resultado Final</ModalTitulo>
            <ModalTexto>Tamanho Total do Parede:</ModalTexto>
            <TextoResul> {totalParede} mts²</TextoResul>
            <ModalTexto>
              Quantidade Total do tijolos:
            </ModalTexto>
            <TextoResul> {totalTijolos} un</TextoResul>

            <ModalTexto></ModalTexto>
          </ContainerModal>
        </Modalize>
      </Container>
    </TouchableWithoutFeedback>
  );
}
