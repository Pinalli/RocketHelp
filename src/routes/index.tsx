import {NavigationContainer} from '@react-navigation/native';

import {SignIn} from '../screens/signin';
import { AppRoutes } from './app.routes';

export function Routes(){
    return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    );
}