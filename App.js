import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./app/screens/Home";
import RestoScreen from "./app/screens/RestoScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Resto" component={RestoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
