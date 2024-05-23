import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BusinessListByCategory from '../Screens/BusinessListByCategorySearch/BusinessListByCategory';
import BusinessDetailsScreen from '../Screens/BusinessDetailScreen/BusinessDetailsScreen';
import { RootStackParamList } from '@/src/type';

const Stack = createStackNavigator<RootStackParamList>();


export default function HomeNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='homeNavi' component={HomeScreen} />
            <Stack.Screen name='business-list' component={BusinessListByCategory} />
            <Stack.Screen name='business-detail' component={BusinessDetailsScreen} />

        </Stack.Navigator>
    )
}

 