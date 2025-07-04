import { useState } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

export default function Index(){

    const [count, setCount] = useState(0);

    const handleMessage = () => {
        setCount(count + 1);
        
        console.log(count);
        Alert.alert("Dale " + count);
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