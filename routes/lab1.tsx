import Header from "../components/Header";
import Task1 from "../pages/lab1/task1";
import Task2 from "../pages/lab1/task2";
import Task3 from "../pages/lab1/task3";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function RouteLab1() {
  return (
    <Tab.Navigator screenOptions={{ headerStyle: { height: "max-content" } }}>
      <Tab.Screen
        name="Task3"
        component={Task3}
        options={{
          title: "Завдання №3",
          headerTitle: () => <Header n={3} />,
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
        name="Task1"
        component={Task1}
        options={{
          title: "Завдання №1",
          headerTitle: () => <Header n={1} />,
        }}
      />
    </Tab.Navigator>
  );
}
