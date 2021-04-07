import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { Botao, Container, BotaoTexto } from './styles';

class BotaoCalcular extends Component {
  render() {
    return (
      <Container>
        <Botao>
          <BotaoTexto> Calcular </BotaoTexto>
        </Botao>
      </Container>
    );
  }
}

export default BotaoCalcular;
