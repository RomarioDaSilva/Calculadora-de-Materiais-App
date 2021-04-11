import React, {useState} from 'react';
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

export default function Laje() {
  const [comp, setComp] = useState('');
  const [larg, setLarg] = useState('');
  const [resultado, setResultado] = useState(null);

  const comprimento = parseInt(comp).toFixed(2);
  const largura = parseInt(larg).toFixed(2);
  const totalLaje = (comp * larg).toFixed(2);
  const vigas = (comp / 0.4).toFixed(0);
  const isopor = (totalLaje * 2.25).toFixed(0);
  const barras = (totalLaje / 3).toFixed(0);

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

              <Texto>Laje de</Texto>
              <Texto>viga com {largura} mts</Texto>

              <ViewImagem>
                <BoxImagem>
                  <Img source={require('../../images/viga.png')} />
                </BoxImagem>
                <Texto>{comprimento} mts</Texto>
              </ViewImagem>

              <Texto>Tamanho Total da laje:</Texto>
              <TextoResul>{totalLaje} mts².</TextoResul>

              <Texto>Quantidade de vigas:</Texto>
              <TextoResul>
                {vigas} vigas com {largura} mts.
              </TextoResul>

              <Texto>Quantidade de isopor:</Texto>
              <TextoResul>{isopor} placas de 0,30x0,7x1,00.</TextoResul>

              <Texto>
                Quantidade de barras ferro para esteira de 40cmx40cm:
              </Texto>
              <TextoResul>{barras} com 12mts</TextoResul>
            </BoxResultado>
          )}
        </ScrollView>
      </Container>
    </TouchableWithoutFeedback>
  );
}
