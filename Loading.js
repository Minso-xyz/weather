import React from "react";
import { StyleSheet, Text, View, PickerIOSComponent } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Loading() {
    return ( 
    <View style={styles.container}>
        <Text style={styles.text}>Let's get the weather!</Text>
    </View>
    );

    // Background Linear Gradient
    <LinearGradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: 300,
        }}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor : "#F4C986"
    },

    text: {
        color: "#5c5c5c",
        fontSize: 30
    }

});