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
`;
export const TextoTitulo = styled.Text`
  margin-top: -50px;
  margin-bottom: 20px;
  font-size: 25px;
  color: #fff;
`;

export const BotaoBox = styled.TouchableOpacity`
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  height: 50px;
  width: 90%;
  border-radius: 15px;
`;

export const Texto = styled.Text`
  font-size: 25px;
`;
