import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default NotificationScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Notification Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
