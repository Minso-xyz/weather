import React from "react";
import { StyleSheet, Text, View, PickerIOSComponent } from "react-native";

export default function Loading() {
    return ( 
    <View style={styles.container}>
        <Text style={styles.text}>Senza scherzo.</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor : "skyblue"
    },

    text: {
        color: "#5c5c5c",
        fontSize: 30
    }

});