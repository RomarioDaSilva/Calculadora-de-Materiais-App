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
  ViewImagem,
  Img,
  BoxImagem,
} from './styles';

export default function TelhaAmericana() {
  const [comp, setComp] = useState('');
  const [larg, setLarg] = useState('');
  const [resultado, setResultado] = useState(null);

  const comprimento = parseInt(comp).toFixed(2);
  const largura = parseInt(larg).toFixed(2);
  const totalTelhado = (larg * comp).toFixed(2);
  const totalTelhas = totalTelhado * 13;
  const totalRipas = (totalTelhado * 3.8).toFixed(2);

  function calcular() {
    Keyboard.dismiss();
    if (isNaN(parseFloat(larg)) || comp === '') {
      alert('Preencha todos os campos');
      return;
    }
    setResultado(comp, larg);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header />
        <HeaderTitulo>Telha Americana</HeaderTitulo>
        <ScrollView>
          <Box>
            <SafeAreaView>
              <Texto>Calcular tamanho do telhado em metros quadrados ²:</Texto>
              <BoxInput>
                <Texto>Largura do telhado:</Texto>
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
                <Texto>Comprimento do telhado:</Texto>
                <Input
                  value={comp}
                  onChangeText={(text) => setComp(text)}
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

          {resultado && (
            <BoxResultado>
              <TituloRel>Resultado Final</TituloRel>

              <Texto>Tamanho Total do telhado:</Texto>
              <TextoResul>{totalTelhado} mts².</TextoResul>

              <Texto>Quantidade Total do telhas:</Texto>
              <TextoResul>{totalTelhas} un.</TextoResul>

              <Texto>Quantidade total de mts de ripas:</Texto>
              <TextoResul>{totalRipas} mts².</TextoResul>
            </BoxResultado>
          )}
        </ScrollView>
      </Container>
    </TouchableWithoutFeedback>
  );
}
