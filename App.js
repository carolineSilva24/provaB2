import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DashboardPage from './src/pages/DashboardPage';
import ForgetPasswordPage from './src/pages/ForgetPasswordPage';
import LoginPage from './src/pages/LoginPage';
import Registerpage from './src/pages/RegisterPage';
import RPGPage from './src/pages/RPGPage';

const animationConfig = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
}

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='RPGPage' component={RPGPage} options= {{headerShown: false}} />
        <Stack.Screen name='DashboardPage' component={DashboardPage} />
        <Stack.Screen name='ForgetPasswordPage' component={ForgetPasswordPage} />
        <Stack.Screen name='LoginPage' component={LoginPage} options={{
            transitionSpec: {
              open: animationConfig,
              close: animationConfig
            }}}/>
          <Stack.Screen name="RegisterPage" component={Registerpage} options={{
            transitionSpec: {
              open: animationConfig,
              close: animationConfig
            }}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
