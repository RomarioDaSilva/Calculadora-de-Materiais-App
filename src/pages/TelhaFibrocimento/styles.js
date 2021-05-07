import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #160142;
  padding: 5px;
  flex-direction: column;

`;
export const ContainerBox = styled.View`
  width: 100%;
  height:100%;
`;

export const TextoTitulo = styled.Text`
  margin-top: -47px;
  margin-bottom: 20px;
  font-size: 25px;
  color: #fff;
`;

export const Box = styled.TouchableOpacity`
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
