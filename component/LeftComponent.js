import React, { useState } from "react";
import {
  Avatar,
  Divider,
  Badge,
  Icon,
  withBadge,
  Header,
  Button,
} from "react-native-elements";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ActivityIndicator,
} from "react-native";

export default function LeftComponent({openDrawer}) {
  return (
    <Button onPress={openDrawer} icon={<Icon name="menu" size={15} color="white" />} title="Menu" />
  );
}
