import homescreen from "./screen/homescreen";
import screensecond from "./screen/screensecond"; 
import thirdscreen from "./screen/thirdscreen";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={homescreen}
          options={{ headerShown : false }}
        />
        <Stack.Screen
          name="second"
          component={screensecond}
          options ={{title : "second"}}
        />
        <Stack.Screen
          name="third"
          component={thirdscreen}
          options ={{title : "third"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}