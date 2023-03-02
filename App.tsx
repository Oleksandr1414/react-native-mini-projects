import Task1 from "./pages/task1";
import Task2 from "./pages/task2";
import Task3 from "./pages/task3";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Header from "./components/Header";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={"default"} />
      <Tab.Navigator screenOptions={{ headerStyle: { height: "max-content" } }}>
        <Tab.Screen
          name="Task1"
          component={Task1}
          options={{
            title: "Завдання №1",
            headerTitle: () => <Header n={1} />,
          }}
        />
        <Tab.Screen
          name="Task2"
          component={Task2}
          options={{
            title: "Завдання №2",
            headerTitle: () => <Header n={2} />,
          }}
        />
        <Tab.Screen
          name="Task3"
          component={Task3}
          options={{
            title: "Завдання №3",
            headerTitle: () => <Header n={3} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
