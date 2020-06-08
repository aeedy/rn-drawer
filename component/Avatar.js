import React, { useState } from "react";
import { Avatar, Divider, Badge, Icon, withBadge } from "react-native-elements";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ActivityIndicator,
} from "react-native";

export default function AvatarPage() {
  return (
    <>
      <Avatar
        rounded
        source={{
          uri:
            "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        }}
      />
      <Avatar
        source={{
          uri:
            "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        }}
        showEditButton
      />
      <Avatar
        size="small"
        rounded
        title="MT"
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
      />
      <Avatar
        size="medium"
        title="BP"
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
      />
      <Avatar
        size="large"
        title="LW"
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
      />
      <Avatar
        size="xlarge"
        rounded
        title="CR"
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
      />

      <Badge status="success" />
      <Badge status="error" />
      <Badge status="primary" />
      <Badge status="warning" />
      <Badge
          status="success"
          containerStyle={{ position: "absolute", top: 300,left:200 }}
        />
        
      <View>
        <Avatar
          rounded
          source={{
            uri: "https://randomuser.me/api/portraits/men/41.jpg",
          }}
          size="large"
        />

        <Badge
          status="success"
          containerStyle={{ position: "absolute", top: 10, right: -40 }}
        />
      </View>
    </>
  );
}
