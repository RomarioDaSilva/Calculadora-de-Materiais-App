import styled from "styled-components/native";

export const Container = styled.View`
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

export const Box = styled.View`
  margin: 10px;
  width: 95%;

`;

export const TextoTitulo = styled.Text`
  margin-top: -50px;
  margin-bottom: 20px;
  font-size: 25px;
  color: #fff;
`;

export const BoxInput = styled.TouchableOpacity`
  background-color: #fff;
  height: 100px;
  width: 90%;
  border-radius: 15px;
  margin: 15px;
  align-items: center;
  flex-direction: row;
`;

export const Texto = styled.Text`
  font-size: 30px;
  margin-left: 20px;
`;

export const Imagen = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 100px;
  margin-left: 10px;
`;
