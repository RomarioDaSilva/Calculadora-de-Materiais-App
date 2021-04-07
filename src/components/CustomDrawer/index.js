import React from 'react';
import { Text, } from 'react-native';
import { DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

export default function CustomDrawer(){
    return(
        <DrawerContentScrollView>
            <Text>CalcConstrução</Text>
        </DrawerContentScrollView>
    );
}