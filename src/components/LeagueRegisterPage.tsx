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
import DropDownPicker from "react-native-dropdown-picker";

const LeagueRegisterPage = () => {
  const [leagueId, setLeagueId] = useState<string>("");
  const [leaguePassword, setLeaguePassword] = useState<string>("");
  const [leagueName, setLeagueName] = useState<string>("");
  const [newLeague, setNewLeague] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [teamCount, setTeamCount] = useState([
    { label: "4", value: 4 },
    { label: "6", value: 6 },
    { label: "8", value: 8 },
    { label: "12", value: 12 },
  ]);

  const joinLeague = () => {
    console.log("leagueId", leagueId);
    console.log("leaguePassword", leaguePassword);
  };

  const createLeague = () => {
    console.log("leagueId", leagueId);
    console.log("leaguePassword", leaguePassword);
  };

  const changeNewLeague = () => {
    return setNewLeague(!newLeague);
  };

  return (
    <View>
      <Button
        onPress={changeNewLeague}
        title={newLeague ? "Join League" : "Start New League"}
      />
      {newLeague ? (
        <View>
          <TextInput
            value={leagueName}
            onChangeText={(text) => setLeagueName(text)}
          />
          <TextInput
            placeholder="Create Password"
            value={leaguePassword}
            onChangeText={(text) => setLeaguePassword(text)}
          />
          <DropDownPicker
            open={open}
            value={value}
            items={teamCount}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setTeamCount}
          />
          <Button onPress={createLeague} title="Create League" />
        </View>
      ) : (
        <View>
          <TextInput
            value={leagueId}
            onChangeText={(text) => setLeagueId(text)}
          />
          <TextInput
            value={leaguePassword}
            onChangeText={(text) => setLeaguePassword(text)}
          />
          <Button onPress={joinLeague} title="Join League" />
        </View>
      )}
    </View>
  );
};

export default LeagueRegisterPage;
