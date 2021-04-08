import React, {useRef} from 'react';
import {} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Modalize } from 'react-native-modalize';

import {
  Container,
  Imagem,
  Texto,
  Botao,
  BotaoText,
  Alert,
  Titulo,
  TextoPrincipal,
  BotaoModal,
  BotaoModalTexto,
} from './styles';


export default function TelaInicial() {
  const modalizeRef = useRef(null);

  const navigation = useNavigation();

  function abrirModal() {
    modalizeRef.current?.open();
  }

  function irHome() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <Imagem
        source={require('../../images/Material.png')}
        resizeMode="contain"
      />

      <Texto>Calc-Construção</Texto>

      <Botao onPress={abrirModal}>
        <BotaoText>Começar</BotaoText>
      </Botao>

      <Modalize
        ref={modalizeRef}
        snapPoint={600} /*o quanto vai abrir na tela o modal*/
      >
        <Alert>
          <Titulo>Aviso Importante!</Titulo>
          <TextoPrincipal>
            Todos os cálculos feitos pelo aplicativo são aproximados, por tanto
            é essencial a orientação de um PROFISSIONAL habilitado para
            acompanhamento da obra não sendo, portanto, de responsabilidade dos
            criadores deste aplicativo.
          </TextoPrincipal>
          <BotaoModal onPress={irHome}>
            <BotaoModalTexto>OK</BotaoModalTexto>
          </BotaoModal>
        </Alert>
      </Modalize>
    </Container>
  );
}
