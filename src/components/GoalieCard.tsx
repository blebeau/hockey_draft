import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  SafeAreaView,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import { teamColours } from "../styles/teamColourEnum";

import { Player } from "../types/PlayerTypes";

const GoalieCard = ({
  id,
  name,
  games,
  img,
  weight,
  age,
  height,
  team,
  position,
  goalAgainstAverage,
  savePercentage,
  shotsAgainst,
  shutouts,
  wins,
}: Player) => {
  console.log(teamColours["Anaheim Ducks"]);

  return (
    <SafeAreaView>
      {img && (
        <View style={styles.playerImgInfo}>
          <LinearGradient colors={teamColours[`${team as keyof typeof team}`]}>
            <View style={styles.playerInfo}>
              <View style={styles.playerImg}>
                <Image
                  source={{
                    uri: img,
                  }}
                  style={styles.tinyLogo}
                />
              </View>

              <View style={styles.playerPersonal}>
                <Text style={{ fontSize: 18, textAlign: "center" }}>
                  {name}
                </Text>
                <View style={styles.tableStyle}>
                  <View>
                    <Text
                      style={{ fontSize: 10, paddingLeft: 5, paddingRight: 5 }}
                    >
                      Age
                    </Text>
                    <Text
                      style={{ fontSize: 10, paddingLeft: 5, paddingRight: 5 }}
                    >
                      {age}
                    </Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text
                      style={{ fontSize: 10, paddingLeft: 5, paddingRight: 5 }}
                    >
                      Weight
                    </Text>
                    <Text
                      style={{ fontSize: 10, paddingLeft: 5, paddingRight: 5 }}
                    >
                      {weight}
                    </Text>
                  </View>
                  <View style={{ alignItems: "flex-end" }}>
                    <Text
                      style={{ fontSize: 10, paddingLeft: 5, paddingRight: 5 }}
                    >
                      Height
                    </Text>
                    <Text
                      style={{ fontSize: 10, paddingLeft: 5, paddingRight: 5 }}
                    >
                      {height}
                    </Text>
                  </View>
                </View>
                <View style={styles.tableStyle}>
                  <View>
                    <Text style={{ fontSize: 10 }}>Team</Text>
                    <Text style={{ fontSize: 10 }}>{team}</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10 }}>Position</Text>
                    <Text style={{ fontSize: 10 }}>{position}</Text>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
          <View style={styles.playerStats}>
            <Text style={{ fontSize: 10 }}>Games: {games}</Text>
            <Text style={{ fontSize: 10 }}>
              goalAgainstAverage: {goalAgainstAverage}
            </Text>
            <Text style={{ fontSize: 10 }}>
              savePercentage: {savePercentage}
            </Text>
            <Text style={{ fontSize: 10 }}>shotsAgainst: {shotsAgainst}</Text>
            <Text style={{ fontSize: 10 }}>shutouts: {shutouts}</Text>
            <Text style={{ fontSize: 10 }}>wins: {wins}</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default GoalieCard;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 80,
    height: 80,
  },
  logo: {
    width: 66,
    height: 58,
  },
  playerInfo: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
  playerStats: {
    flex: 1,
  },
  playerImgInfo: {
    flex: 1,
  },
  playerImg: {
    width: "30%",
  },
  playerPersonal: {
    width: "70%",
    alignContent: "flex-end",
  },
  tableStyle: {
    flex: 1,
    alignContent: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
