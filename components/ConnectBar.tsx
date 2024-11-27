import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from "react-native-animatable";

export interface IConnectBar {
    isConnected: boolean | null
}

export function ConnectBar({ isConnected }: IConnectBar) {
    return (
        <View style={styles.container}>
            {isConnected === null ? (
                <Animatable.View animation="rotate" iterationCount="infinite" duration={1000}>
                    <Ionicons name="sync" size={25} color="#fff" />
                </Animatable.View>
            ) : (
                <Text style={styles.text}>
                    {isConnected ? (
                        <>
                            <Ionicons name="checkmark-circle" size={25} color="#71DE90" />
                        </>
                    ) : (
                        <>
                            <Ionicons name="close-circle" size={25} color="#A80F0F" />
                        </>
                    )}
                </Text>
            )}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",


    },
    loadingContainer: {
        justifyContent: "center",
        alignItems: "center",
    },

    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: "#3E4A89",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
    },
});