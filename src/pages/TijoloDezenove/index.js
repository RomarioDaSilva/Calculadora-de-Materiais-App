import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Header from '../../components/Header';

import {
  Container,
  Box,
  Texto,
  Botao,
  BotaoTexto,
  Input,
  BoxInput,
  TituloRel,
  HeaderTitulo,
  TextoResul,
  BoxResultado,
} from './styles';

export default function TijoloDezenove() {
  const modalizeRef = useRef(null);

  function abrirModal() {
    modalizeRef.current?.open();
    Keyboard.dismiss();
  }

  const [comp, setComp] = useState(0);
  const [alt, setAlt] = useState(0);
  const totalParede = (comp * alt).toFixed(2);
  const totalTijolos = (totalParede * 25).toFixed(0);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header />
        <HeaderTitulo>Tijolo 9 X 19 X 19</HeaderTitulo>
        <ScrollView>
          <Box>
            <SafeAreaView>
              <Texto>
                Valores para calcular a quantidade de tijolos 9 X 19 X 19
              </Texto>
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
          <BoxResultado>
            <TituloRel>Resultado Final</TituloRel>

            <Texto>Tamanho Total da Parede:</Texto>

            <TextoResul>{totalParede} mts²</TextoResul>

            <Texto>Quantidade Total do tijolos:</Texto>

            <TextoResul>{totalTijolos} un</TextoResul>
          </BoxResultado>
        </ScrollView>
      </Container>
    </TouchableWithoutFeedback>
  );
}
