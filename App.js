import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  SafeAreaView,
  Button
} from 'react-native';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import {
  withAuthenticator,
  useAuthenticator,
} from '@aws-amplify/ui-react-native';

import { Amplify } from 'aws-amplify';

import awsExports from './src/aws-exports';
import PlayerScroll from './src/components/PlayerScroll';
Amplify.configure(awsExports);

// retrieves only the current value of 'user' from 'useAuthenticator'
const userSelector = (context) => [context.user]

const SignOutButton = () => {
  const { user, signOut } = useAuthenticator(userSelector);

  return (
    <Pressable onPress={signOut} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>
        Sign out
      </Text>
    </Pressable>
  );
};

const App = () => {


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SignOutButton />
        <PlayerScroll />
      </View>
    </SafeAreaView>
  );
};

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: { width: 400, flex: 1, padding: 20, alignSelf: 'center' },
  todo: { marginBottom: 15 },
  input: { backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  buttonContainer: {
    alignSelf: 'flex-end',
    backgroundColor: 'red',
    paddingHorizontal: 8,
  },
  buttonText: { color: 'white', padding: 16, fontSize: 18 },
});

