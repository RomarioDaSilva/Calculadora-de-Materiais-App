import React, { useState} from 'react';
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
  ViewInfo,
} from './styles';

export default function TijoloDezenove() {
  const [comp, setComp] = useState('');
  const [alt, setAlt] = useState('');
  const [resultado, setResultado] = useState(null);

  const comprimento = parseInt(comp).toFixed(2);
  const altura = parseInt(alt).toFixed(2);
  const totalParede = (comp * alt).toFixed(2);
  const totalTijolos = (totalParede * 25).toFixed(0);

  function calcular() {
    Keyboard.dismiss();
    if (isNaN(parseFloat(alt)) || comp === '') {
      alert('Preencha todos os campos');
      return;
    }
    setResultado(comp, alt);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header />

        <ViewInfo>
          <Texto> M </Texto>
        </ViewInfo>

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
                  onChangeText={(text) => setComp(text)}
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
                  onChangeText={(text) => setAlt(text)}
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

              <Texto>Tamanho da parede</Texto>
              <Texto>Comprimento {comprimento} mts</Texto>

              <ViewImagem>
                <BoxImagem>
                <Img source={require('../../images/ParedeTijolos.png')} />
                </BoxImagem>
                <Texto>{altura} mts</Texto>
              </ViewImagem>
       
              <Texto>Tamanho Total da Parede:</Texto>

              <TextoResul>{totalParede} mts²</TextoResul>

              <Texto>Quantidade Total do tijolos:</Texto>

              <TextoResul>{totalTijolos} un</TextoResul>
            </BoxResultado>
          )}
        </ScrollView>
      </Container>
    </TouchableWithoutFeedback>
  );
}
