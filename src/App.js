import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from './components/SignIn';
import Welcome from './components/Welcome';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'SignIn'}>
        <Stack.Screen
          name="Home"
          component={SignIn}
          options={{title: 'Login', headerShown: false}}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{title: 'Home'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
