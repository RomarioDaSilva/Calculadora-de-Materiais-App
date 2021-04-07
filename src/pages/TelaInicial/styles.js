import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #160142;
`;


export const Texto = styled.Text`
  color: #00b0e8;
  font-size: 35px;
  margin: 50px;
`;

export const Botao = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #00b0e8;
  padding: 10px;
  border-radius: 5px;
  width: 90%;
`;

export const BotaoText = styled.Text`
  font-size: 20px;
`;

export const Alert = styled.View`
  flex: 1;
  height: 600px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Titulo = styled.Text`
  font-size: 40px;
  margin-bottom: 20px;
`;

export const TextoPrincipal = styled.Text`
  font-size: 20px;
  margin: 20px;
  text-align: center;
`;

export const BotaoModal = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #00b0e8;
  padding: 10px;
  border-radius: 5px;
  width: 90%;
  margin-top: 20px;
`;

export const BotaoModalTexto = styled.Text`
  font-size: 20px;
`;

export const Imagem = styled.Image`
  height: 350px;
  width: 350px;
  border-radius: 50px;
  margin-bottom: 20px;
`;
