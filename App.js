import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

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
import TelhaFibrocimento from './src/pages/TelhaFibrocimento';
import TelhaFibro244 from './src/pages/TelhaFibro244';
import TelhaFibro183 from './src/pages/TelhaFibro183';
import TelhaFibro153 from './src/pages/TelhaFibro153';

const Stack = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        drawerContentOptions={{
          activeTintColor: '#00b0e8',
          headerStyle: '#000'
        }}
      >
        <Stack.Screen name="Tela Inicial" component={TelaInicial} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Telhas" component={Telhas} />
        <Stack.Screen name="Telha Americana" component={TelhaAmericana} />
        <Stack.Screen name="Telha Colonial" component={TelhaColonial} />
        <Stack.Screen name="Telha Fibrocimento" component={TelhaFibrocimento} />
        <Stack.Screen name="Telha 244" component={TelhaFibro244} />
        <Stack.Screen name="Telha 183" component={TelhaFibro183} />
        <Stack.Screen name="Telha 153" component={TelhaFibro153} />
        <Stack.Screen name="Laje" component={Laje} />
        <Stack.Screen name="Tijolo Vinte Quatro" component={TijoloVinteQuatro} />
        <Stack.Screen name="Tijolo Vinte Nove" component={TijoloVinteNove} />
        <Stack.Screen name="Tijolo Dezenove" component={TijoloDezenove} />
        <Stack.Screen name="Tijolos" component={Tijolos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
