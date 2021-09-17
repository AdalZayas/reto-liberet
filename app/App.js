import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Main from './screens/Main'
import Info from './screens/Info'
import LocationComponent from './components/Location'
import IconMi from 'react-native-vector-icons/MaterialIcons'
import TabComponent from './components/Tab'
import ChipsMenu from './components/ChipsMenu'
import { Children } from 'react'

const Tab = createBottomTabNavigator()

const App = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={{}} initialRouteName='Home'>
      <Tab.Screen
        name="Info"
        component={Info}
        options={{
          tabBarButton: (props) => <TabComponent label="shopping-cart" {...props} />
        }}
      />

      <Tab.Screen
        name="Home"
        component={Main}
        options={{
          tabBarButton: (props) => <TabComponent label="grid" {...props} />,
          headerTitle: "",
          headerRight: () => <IconMi style={{ marginRight: 20, }} name="filter-list" size={30} color="#4D4D4D" />,
          headerLeft: (props) => (<LocationComponent {...props} />)
        }}
      />

      <Tab.Screen
        name="Profile"
        options={{ tabBarButton: (props) => <TabComponent label="user" {...props} /> }}
        component={Info}
      />
    </Tab.Navigator>
  </NavigationContainer>
)

export default App
