import React, {useRef, useState} from 'react';
import {SafeAreaView, Keyboard, TouchableWithoutFeedback, ScrollView} from 'react-native';
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

export default function Laje() {
  const modalizeRef = useRef(null);
  const [comp, setComp] = useState(0);
  const [larg, setLarg] = useState(0);
  const totalLaje = (comp * larg).toFixed(2);
  const vigas = (comp / 0.4).toFixed(0);
  const isopor = (totalLaje * 2.25).toFixed(0);
  const barras = (totalLaje / 3).toFixed(0);

  function calcular() {
    modalizeRef.current?.open();
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header />
        <HeaderTitulo>Laje de EPS(isopor)</HeaderTitulo>
        <ScrollView>
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
                <Texto>Comprimento da laje:{'\n'} "lado oposto a viga" </Texto>
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
            <Texto>
              Laje de {larg} X {comp}
            </Texto>
            <Texto>Tamanho Total da laje:</Texto>
            <TextoResul>{totalLaje}Mts².</TextoResul>
            <Texto>Quantidade de vigas:</Texto>
            <TextoResul>
              {vigas} vigas com {larg} mts.
            </TextoResul>
            <Texto>Quantidade de isopor:</Texto>
            <TextoResul>{isopor} placas de 0,30x0,7x1,00.</TextoResul>
            <Texto>Quantidade de barras ferro para esteira de 40cmx40cm:</Texto>
            <TextoResul>{barras} com 12mts</TextoResul>
          </BoxResultado>
        </ScrollView>
      </Container>
    </TouchableWithoutFeedback>
  );
}
