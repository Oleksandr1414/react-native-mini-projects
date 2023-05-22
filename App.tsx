import RouteLab1 from "./routes/lab1";
import RouteLab2 from "./routes/lab2";
import RouteLab3 from "./routes/lab3";
import RouteLab4 from "./routes/lab4";
import RouteLab6 from "./routes/lab6";
import RouteLab7 from "./routes/lab7";
import RouteLab8 from "./routes/lab8";
import { MainContainer, BottomComment, NavButton } from "./styles/pageStyles";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
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
        <NavButton onClick={() => navigation.navigate("ЛАБОРАТОРНА РОБОТА №3")}>
          ЛАБОРАТОРНА РОБОТА №3
        </NavButton>
        <NavButton onClick={() => navigation.navigate("ЛАБОРАТОРНА РОБОТА №4")}>
          ЛАБОРАТОРНА РОБОТА №4
        </NavButton>
        <NavButton onClick={() => navigation.navigate("ЛАБОРАТОРНА РОБОТА №6")}>
          ЛАБОРАТОРНА РОБОТА №6
        </NavButton>
        <NavButton onClick={() => navigation.navigate("ЛАБОРАТОРНА РОБОТА №7")}>
          ЛАБОРАТОРНА РОБОТА №7
        </NavButton>
        <NavButton onClick={() => navigation.navigate("ЛАБОРАТОРНА РОБОТА №8")}>
          ЛАБОРАТОРНА РОБОТА №8
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
        <Stack.Screen name="ЛАБОРАТОРНА РОБОТА №3" component={RouteLab3} />
        <Stack.Screen name="ЛАБОРАТОРНА РОБОТА №4" component={RouteLab4} />
        <Stack.Screen name="ЛАБОРАТОРНА РОБОТА №6" component={RouteLab6} />
        <Stack.Screen name="ЛАБОРАТОРНА РОБОТА №7" component={RouteLab7} />
        <Stack.Screen name="ЛАБОРАТОРНА РОБОТА №8" component={RouteLab8} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
