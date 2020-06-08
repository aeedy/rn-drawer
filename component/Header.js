import React, { useState } from "react";
import { Avatar, Divider, Badge, Icon, withBadge,Header } from "react-native-elements";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ActivityIndicator,
} from "react-native";
import LeftComponent from '../component/LeftComponent'

export default function HeaderPage({handleOpen}) {
    console.log('xxxxx')
    return (
        <Header
        leftComponent={<LeftComponent openDrawer={handleOpen}/>}
        centerComponent={{ text: 'My Application', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        />
    )
}
