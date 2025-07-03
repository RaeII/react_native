import { View, Text, StyleSheet, Button, Alert } from "react-native";

export default function Index(){

    const handleMessage = () => {
        console.log("Dale");
        Alert.alert("Dale");
    }


    return(
        <View style={styles.container}>
            <Text>Hello World!</Text>
            <Button title="Dale" onPress={handleMessage} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
    },
});