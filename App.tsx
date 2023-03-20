import RouteLab1 from "./routes/lab1";
import RouteLab2 from "./routes/lab2";
import { MainContainer, BottomComment, NavButton } from "./styles/pageStyles";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <>
      <MainContainer>
        <NavButton onClick={() => navigation.navigate("ЛАБОРАТОРНА РОБОТА №1")}>
          ЛАБОРАТОРНА РОБОТА №1
        </NavButton>
        <NavButton onClick={() => navigation.navigate("ЛАБОРАТОРНА РОБОТА №2")}>
          ЛАБОРАТОРНА РОБОТА №2
        </NavButton>
      </MainContainer>
      <BottomComment>ВИКОНАВ: ЧАБАНЮК ОЛЕКСАНДР КН-32</BottomComment>
    </>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={"default"} />
      <Stack.Navigator>
        <Stack.Screen name="ГОЛОВНА" component={HomeScreen} />
        <Stack.Screen name="ЛАБОРАТОРНА РОБОТА №1" component={RouteLab1} />
        <Stack.Screen name="ЛАБОРАТОРНА РОБОТА №2" component={RouteLab2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
