import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #310098;
`;

export const ContainerBox = styled.View`
  height: 100%;
  width: 100%;
  background-color: #160142;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  align-items: center;
  padding-top: 20px;
`;
export const TextoTitulo = styled.Text`
  margin-top: -50px;
  margin-bottom: 20px;
  font-size: 25px;
  color: #fff;
`;

export const Texto = styled.Text`
  font-size: 20px;
  color: #000;
  margin: 10px;
`;

export const Box = styled.View`
  background-color: #fff;
  border-radius: 20px;
  margin: 20px;
  align-items: center;
`;

export const BoxInput = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin: 10px;
  align-items: center;
`;

export const Input = styled.TextInput`
  background-color: #c4c4c4;
  width: 100px;
  height: 45px;
  border-radius: 10px;
`;

export const Botao = styled.TouchableOpacity`
  background-color: #000;
  height: 50px;
  width: 250px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin: 20px;
`;

export const BotaoTexto = styled.Text`
  font-size: 30px;
  color: #FFF;
`;

export const ContainerModal = styled.View`
  height: 600px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;

export const ModalTitulo = styled.Text`
  font-size: 40px;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const ModalTexto = styled.Text`
  font-size: 22px;
  margin: 15px;
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

