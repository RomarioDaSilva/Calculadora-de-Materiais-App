import React, {useRef, useState} from 'react';
import {SafeAreaView, Keyboard, TouchableWithoutFeedback} from 'react-native';
import Header from '../../components/Header';
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
  TextoResul,
} from './styles';
import {Modalize} from 'react-native-modalize';

export default function TelhaColonial() {
  const modalizeRef = useRef(null);

  function abrirModal() {
    modalizeRef.current?.open();
    Keyboard.dismiss()
  }
  const [larg, setLarg] = useState(0);
  const [comp, setComp] = useState(0);
  const totalTelhado = (larg * comp).toFixed(2);
  const totalTelhas = totalTelhado * 32;
  const totalRipas = (totalTelhado * 3.95).toFixed(2);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header />
        <TextoTitulo>Telha colonial</TextoTitulo>
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
            <ModalTitulo>Resultado final</ModalTitulo>

            <ModalTexto>Total de metros do telhado:</ModalTexto>

            <TextoResul> {totalTelhado}mts²</TextoResul>

            <ModalTexto>Total de telhas:</ModalTexto>

            <TextoResul> {totalTelhas} un.</TextoResul>

            <ModalTexto>Total de metros de ripas:</ModalTexto>

            <TextoResul> {totalRipas}mts.</TextoResul>
            
          </ContainerModal>
        </Modalize>
      </Container>
    </TouchableWithoutFeedback>
  );
}
