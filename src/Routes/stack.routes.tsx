import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../Styles/colors';
import IMC from '../Pages/imcPage/IMC'
import Register from '../Pages/Register/register'
import ResetPassword from '../Pages/ResetPassword/ResetPassword'
import initialPage from '../Pages/InitialPage/initialPage'
import Login from '../Pages/Login/Login';
import completeRegister from '../Pages/Register/completeRegister'
import UserPage from '../Pages/userPage/userPage'



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
            name="Login"
            component={Login}
        />
        <stackRoutes.Screen
            name="Register"
            component={Register}
        />
        <stackRoutes.Screen
            name="ResetPassword"
            component={ResetPassword}
        />
        <stackRoutes.Screen
            name="initialPage"
            component={initialPage}
        />
        <stackRoutes.Screen
            name="IMC"
            component={IMC}
        />
        <stackRoutes.Screen
            name="completeRegister"
            component={completeRegister}
        />
        <stackRoutes.Screen
            name="UserPage"
            component={UserPage}
        />
    </stackRoutes.Navigator>
)

export default AppRoutes;