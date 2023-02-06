import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigation';
import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import awsconfig from './src/aws-exports';
import { getUser } from './src/graphql/queries';
import { createUser } from './src/graphql/mutations';

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

function App() {

  useEffect(() => {
    const syncUser = async () => {

      //get Auth user
      const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });

      //query db using ID
      const userData = await API.graphql(graphqlOperation(getUser, { id: authUser.attributes.sub }));

      //if user exists, do nothing:else create user in db
      if (userData.data.getUser) {
        return;
      }

      const newUser = {
        id: authUser.attributes.sub,
        name: authUser.attributes.phone_number,
        image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",
        status: "WhatsDown, homies?",
      };

      const newUserResponse = await API.graphql(graphqlOperation(
        createUser, { input: newUser }
      ));

    }
    syncUser();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Navigator />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
  },
});

export default withAuthenticator(App);