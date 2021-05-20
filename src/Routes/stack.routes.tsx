import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../Styles/colors';
import IMC from '../Pages/IMC/IMC'
import Welcome from '../Pages/Welcome/Welcome'
import Register from '../Pages/Register/register'
import ResetPassword from '../Pages/ResetPassword/ResetPassword'


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
            name="IMC"
            component={IMC}
        />
        <stackRoutes.Screen
            name="Register"
            component={Register}
        />
        <stackRoutes.Screen
            name="ResetPassword"
            component={ResetPassword}
        />
    </stackRoutes.Navigator>
)

export default AppRoutes;