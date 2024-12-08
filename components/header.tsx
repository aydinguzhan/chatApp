import { COLOR_PALETTE } from '@/Utils/colorPallet';
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'; import { Link } from 'expo-router';
export interface IHeaderProps {
    pageName: string,
    onPress: {
        next: Function,

    }
}

export function Header({ pageName = "Home", onPress }: IHeaderProps) {
    return (
        <View style={styles.container}>
            <Link href="/main">Main</Link>,

        </View >
    );
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLOR_PALETTE.FIRT_YELLOW,
        gap: 10,
        paddingVertical: 5

    },
    box: {
        width: 40,
        height: 30,
        textAlign: "center",
        marginTop: 2,
    }

})