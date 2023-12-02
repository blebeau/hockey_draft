import React, { useState, useLayoutEffect, useEffect } from "react";
import { View, Text, Pressable, SafeAreaView, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import socket from "../utils/socket";
import { DraftRoom } from "../types/draftRoomType";
import { styles } from "../styles/styles";
import DraftComponent from "../components/DraftComponent";

// screen with chats
const Tables = () => {
  const [visible, setVisible] = useState(false);
  const [draftRoom, setDraftRoom] = useState<DraftRoom[]>([]);

  useLayoutEffect(() => {
    function fetchTables() {
      fetch("http://10.0.2.2:4000/api/draftRooms")
        .then((res) => res.json())
        .then((data) => setDraftRoom(data))
        .catch((err) => console.error(err));
    }
    fetchTables();
  }, []);

  useEffect(() => {
    socket.on("tableList", (tables: DraftRoom[]) => {
      setDraftRoom(tables);
    });
  }, [socket]);

  const handleCreateGroup = () => setVisible(true);
  return (
    <SafeAreaView style={styles.draftRooms}>
      <View style={styles.chattopContainer}>
        <View style={styles.chatheader}>
          <Text style={styles.chatheading}>Tables</Text>
          <Pressable onPress={handleCreateGroup}>
            <Feather name="edit" size={24} color="green" />
          </Pressable>
        </View>
      </View>

      <View style={styles.draftListContainer}>
        <View style={{ height: "50%" }}>
          {draftRoom.length > 0 ? (
            <FlatList
              data={draftRoom}
              renderItem={({ item }) => <DraftComponent item={item} />}
              keyExtractor={(item: DraftRoom) => item.id}
            />
          ) : (
            <View style={styles.chatemptyContainer}>
              <Text style={styles.chatemptyText}>No tables created!</Text>
              <Text>Click the icon above to create a Table</Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Tables;
