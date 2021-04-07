import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';




import TelaInicial from './src/pages/TelaInicial';
import Home from './src/pages/Home';
import Telhas from './src/pages/Telhas';
import Tijolos from './src/pages/Tijolos';
import Laje from './src/pages/Laje';
import TelhaAmericana from './src/pages/TelhaAmericana';
import TelhaColonial from './src/pages/TelhaColonial';
import TijoloVinteQuatro from './src/pages/TijoloVinteQuatro';
import TijoloVinteNove from './src/pages/TijoloVinteNove';
import TijoloDezenove from './src/pages/TijoloDezenove';


const Stack = createDrawerNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator
        /*drawerStyle = { {
          backgroundColor : '#000' , 
        } }*/
      >
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Telhas" component={Telhas}/>
        <Stack.Screen name="Laje" component={Laje}/>
        <Stack.Screen name="TelhaAmericana" component={TelhaAmericana}/>
        <Stack.Screen name="TelhaColonial" component={TelhaColonial}/>
        <Stack.Screen name="TijoloVinteQuatro" component={TijoloVinteQuatro}/>
        <Stack.Screen name="TijoloVinteNove" component={TijoloVinteNove}/>
        <Stack.Screen name="TijoloDezenove" component={TijoloDezenove}/>
        <Stack.Screen name="Tijolos" component={Tijolos}/>
 
  
      </Stack.Navigator>
    </NavigationContainer>
  )
}