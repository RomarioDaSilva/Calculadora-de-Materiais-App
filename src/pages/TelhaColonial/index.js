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

export default function TelhaColonial() {
  const modalizeRef = useRef(null);

  function calcular() {
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
        <HeaderTitulo>Telha Colonial</HeaderTitulo>
        <ScrollView>
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
            <Botao onPress={calcular}>
              <BotaoTexto>Calcular</BotaoTexto>
            </Botao>
          </Box>

          <BoxResultado>
            <TituloRel>Resultado Final</TituloRel>

            <Texto>Total de metros do telhado:</Texto>

            <TextoResul> {totalTelhado} mts².</TextoResul>

            <Texto>Quantidade Total do telhas:</Texto>

            <TextoResul> {totalTelhas} un.</TextoResul>

            <Texto>Quantidade total de mts de ripas:</Texto>

            <TextoResul> {totalRipas} mts².</TextoResul>
          </BoxResultado>
        </ScrollView>
      </Container>
    </TouchableWithoutFeedback>
  );
}
