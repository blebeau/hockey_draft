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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Player } from "../types/PlayerTypes";
import { teamColours } from "../styles/teamColourEnum";

const ForwardCard = ({
  id,
  name,
  img,
  games,
  goals,
  hits,
  pim,
  plusMinus,
  powerPlayGoals,
  powerPlayPoints,
  shortHandedGoals,
  shortHandedPoints,
  shots,
  weight,
  age,
  blocked,
  assists,
  height,
  team,
  position,
}: Player) => {
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
            <Text style={{ fontSize: 10 }}>Goals: {goals}</Text>
            <Text style={{ fontSize: 10 }}>Hits: {hits}</Text>
            <Text style={{ fontSize: 10 }}>PIMs: {pim}</Text>
            <Text style={{ fontSize: 10 }}>Plus Minus: {plusMinus}</Text>
            <Text style={{ fontSize: 10 }}>
              Power Play Goals: {powerPlayGoals}
            </Text>
            <Text style={{ fontSize: 10 }}>
              Power Play Points: {powerPlayPoints}
            </Text>
            <Text style={{ fontSize: 10 }}>
              Short Handed Goals: {shortHandedGoals}
            </Text>
            <Text style={{ fontSize: 10 }}>
              Short Handed Points: {shortHandedPoints}
            </Text>
            <Text style={{ fontSize: 10 }}>Shots: {shots}</Text>

            <Text style={{ fontSize: 10 }}>Blocked: {blocked}</Text>
            <Text style={{ fontSize: 10 }}>Assists: {assists}</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ForwardCard;

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
