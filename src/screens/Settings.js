import React from "react";
import {Text,View,StyleSheet, Button} from "react-native";
import {Auth} from 'aws-amplify';

const Settings = () => {
    return (
        <View style={styles.container}>
            <Button 
                title="Sign Out"
                onPress={() => Auth.signOut()}    
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    }
})

export default Settings;