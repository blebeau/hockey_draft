import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  SafeAreaView,
  Button,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { Player } from "../types/PlayerTypes";
import PlayerData from "../HockeyData.js";
import PlayerCard from "./ForwardCard";
import GoalieCard from "./GoalieCard";
import ForwardCard from "./ForwardCard";

const TestPlayerData = [
  // Default data for testing the component while getting and setting DB data
  {
    id: "8478402",
    name: "Connor McDavid",
    img: "https://assets.nhle.com/mugs/nhl/20232024/EDM/8478402.png",
    weight: 194,
    height: `6' 1"`,
    age: 26,
    position: "Forward",
    team: "Edmonton Oilers",
    games: 82,
    goals: 64,
    assists: 89,
    pim: 36,
    hits: 89,
    plusMinus: 22,
    powerPlayGoals: 21,
    powerPlayPoints: 71,
    shots: 352,
    shortHandedGoals: 4,
    shortHandedPoints: 7,
    blocked: 40,
    shutouts: null,
    wins: null,
    goalAgainstAverage: null,
    savePercentage: null,
    shotsAgainst: null,
  },
  {
    id: "8480069",
    name: "Cale Makar",
    img: "https://assets.nhle.com/mugs/nhl/20232024/COL/8480069.png",
    weight: 187,
    height: `5' 11"`,
    age: 24,
    position: "Defenseman",
    team: "Colorado Avalanche",
    games: 60,
    goals: 17,
    assists: 49,
    pim: 30,
    hits: 65,
    plusMinus: 16,
    powerPlayGoals: 5,
    powerPlayPoints: 30,
    shots: 176,
    shortHandedGoals: null,
    shortHandedPoints: null,
    blocked: 78,
    shutouts: null,
    wins: null,
    goalAgainstAverage: null,
    savePercentage: null,
    shotsAgainst: null,
  },
  {
    id: "8478009",
    name: "Ilya Sorokin",
    img: "https://assets.nhle.com/mugs/nhl/20232024/NYI/8478009.png",
    weight: 195,
    height: `6' 3"`,
    age: 28,
    position: "Goalie",
    team: "New York Islanders",
    games: 62,
    goals: null,
    assists: null,
    pim: null,
    hits: null,
    plusMinus: null,
    powerPlayGoals: null,
    powerPlayPoints: null,
    shots: null,
    shortHandedGoals: null,
    shortHandedPoints: null,
    blocked: null,
    shutouts: 6,
    wins: 31,
    goalAgainstAverage: 2.341746,
    savePercentage: 0.924374,
    shotsAgainst: 1838,
  },
];

const Item = ({ data, ADP }: { data: Player; ADP: number }) => (
  <View
    style={{
      backgroundColor: "#eeeeee",
      borderRadius: 10,
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    }}
  >
    {/* This is going to become the PlayerCard */}
    {data.position === "Goalie" ? (
      <View>
        <GoalieCard
          id={data.id}
          averageDraftPick={ADP}
          name={data.name}
          games={data.games}
          img={data.img}
          weight={data.weight}
          age={data.age}
          height={data.height}
          team={data.team}
          position={data.position}
          goalAgainstAverage={data.goalAgainstAverage}
          savePercentage={data.savePercentage}
          shotsAgainst={data.shotsAgainst}
          shutouts={data.shutouts}
          wins={data.wins}
        />
      </View>
    ) : (
      <View>
        <ForwardCard
          id={data.id}
          averageDraftPick={ADP}
          name={data.name}
          games={data.games}
          img={data.img}
          weight={data.weight}
          age={data.age}
          height={data.height}
          team={data.team}
          position={data.position}
          goals={data.goals}
          hits={data.hits}
          pim={data.pim}
          plusMinus={data.plusMinus}
          powerPlayGoals={data.powerPlayGoals}
          powerPlayPoints={data.powerPlayPoints}
          shortHandedGoals={data.shortHandedGoals}
          shortHandedPoints={data.shortHandedPoints}
          shots={data.shots}
          blocked={data.blocked}
          assists={data.assists}
        />
      </View>
    )}
  </View>
);

const PlayerScroll = () => {
  console.log("playerData", PlayerData); // TODO: fix prop types

  return (
    <ScrollView>
      <View style={styles.container}>
        {PlayerData &&
          TestPlayerData.map((player, index) => (
            <View key={player.id}>
              <Item data={player} ADP={index} />
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

export default PlayerScroll;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
