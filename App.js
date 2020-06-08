import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";

import ModalPage from "./component/Modal";
import AvatarPage from "./component/Avatar";
import HeaderPage from "./component/Header";


import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import { Avatar, Divider, Badge, Icon, withBadge,Header,Button } from "react-native-elements";



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

function CustomToggleMenu(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}


function LeftComponent(props) {
  const openDrawer = () => {
    console.log(props);
  }

  return (
    <Button  icon={<Icon name="menu" size={15} color="white" />} title="Menu" />
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <Header
        leftComponent={<LeftComponent/>}
        centerComponent={{ text: 'My Application', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        />
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerContent={props =>  <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
