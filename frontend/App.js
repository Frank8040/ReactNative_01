import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./src/pages/Home";
import Tools from "./src/pages/Tools";
import { createStackNavigator } from "@react-navigation/stack";
import TaskForm from "./src/subpages/TaskForm";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const homeName = "Inicio";
const homeProduct = "Herramientas";

const Mycomponent = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === homeProduct) {
            iconName = focused ? "construct" : "construct-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={homeName}
        component={Home}
        options={() => ({
          headerStyle: { backgroundColor: "#192f6a" },
          headerTitleStyle: { fontWeight: "bold", color: "white" },
        })}
      />
      <Tab.Screen
        name={homeProduct}
        component={Tools}
        options={() => ({
          headerStyle: { backgroundColor: "gray" },
          headerTitleStyle: { fontWeight: "bold", color: "white" },
        })}
      />
    </Tab.Navigator>
  );
};

const SubMyComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="tab"
        component={Mycomponent}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TaskForm"
        component={TaskForm}
        options={{
          headerStyle: { backgroundColor: "#10ac84" },
          headerTitle: "Create a new task",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pantalla Principal"
          component={SubMyComponent}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
