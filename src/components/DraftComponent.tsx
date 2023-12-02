import { View, Text, Pressable } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/styles";

const DraftComponent = ({ item }: any) => {
  const navigation = useNavigation<any>();

  const handleNavigation = () => {
    navigation.navigate("Draft", {
      id: item.id,
      name: item.name,
    });
  };

  return (
    <Pressable style={styles.draft} onPress={handleNavigation}>
      <View style={styles.Container}>
        <View>
          <Text style={styles.draftName}>{item.name}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default DraftComponent;
