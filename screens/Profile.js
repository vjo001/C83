import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Profile extends Component {
    redner() {
        return (
            <View style={styles.container}>
                <Text>Profile</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});