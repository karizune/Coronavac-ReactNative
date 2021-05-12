import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../Styles/colors';
import Page1 from '../Pages/Page1/Page1'
import Welcome from '../Pages/Welcome/Welcome'


const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode='none'
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            }
        }}
    >
        <stackRoutes.Screen
            name="Welcome"
            component={Welcome}
        />
        <stackRoutes.Screen
            name="Page1"
            component={Page1}
        />
    </stackRoutes.Navigator>
)

export default AppRoutes;