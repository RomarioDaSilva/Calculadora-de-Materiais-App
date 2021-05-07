import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #160142;
  padding: 15px;
`;

export const HeaderTitulo = styled.Text`
  margin-top: -47px;
  margin-bottom: 20px;
  font-size: 25px;
  color: #fff;
`;

export const Box = styled.View`
  background-color: #fff;
  border-radius: 20px;
  align-items: center;
  margin-bottom: 20px;
`;

export const Texto = styled.Text`
  font-size: 20px;
  margin-left: 10px;
  margin-top: 20px;
  color: #000;
  text-align: center;
`;

export const Botao = styled.TouchableOpacity`
  background-color: #000;
  justify-content: center;
  align-items: center;
  margin: 20px;
  height: 50px;
  width: 250px;
  border-radius: 50px;
`;

export const BotaoTexto = styled.Text`
  color: #fff;
  font-size: 25px;
  padding: 5px;
`;

export const Input = styled.TextInput`
  justify-content: center;
  padding: 5px;
  background-color: #c4c4c4;
  height: 40px;
  width: 90%;
  margin-top: 10px;
  border-radius: 10px;
  text-align: center;
`;

export const BoxInput = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const TituloRel = styled.Text`
  font-size: 40px;
  margin-top: 10px;
`;

export const TextoResul = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

export const BoxResultado = styled.View`
  background-color: #FFF;
  border-radius: 20px;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
`;

export const ViewImagem = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 90%;
`;

export const BoxImagem = styled.View`
  border-color: #000;
  border: 1px;
  margin: 5px;

`;

export const Img = styled.Image`
  height: 150px;
  width: 250px;
  margin-left: 10px;
`;
