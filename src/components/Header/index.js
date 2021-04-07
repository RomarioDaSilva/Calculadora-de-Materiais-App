import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import {Container, ContainerBox, ButtonMenu} from './styles';

export default function Header() {
 const navigation = useNavigation();

 return (
   <Container>
        <ButtonMenu onPress={ () => navigation.toggleDrawer() }>
         <Ionicons name="menu" color="#FFF" size={40} />
         </ButtonMenu>
   </Container>
  );
}