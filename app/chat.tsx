import { COLOR_PALETTE } from '@/Utils/colorPallet';
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import moment from 'moment'
import { Navbar } from '@/components/navbar';
export interface IChatProps {
    chatDetail: any,
    adminCode: number,
    goBack: Function

}

export default function Chat({ chatDetail = [], adminCode = chatDetail[0].participants, goBack }: IChatProps) {
    const [text, setText] = useState<any>({ id: null, text: "", user: '', date: "" });
    const [displayTextArray, setDisplayTextArray] = useState<any>(chatDetail[0].messages ?? []);
    const yazdir = () => {
        if (text.text) {
            setDisplayTextArray([...displayTextArray, text]);
            setText({ senderId: 1, text: "", timestamp: "2024-11-30T10:00:00Z" },
            );

        }
    };

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }} >

            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : undefined} // iOS'ta padding, Android'de varsayılan
            >
                <StatusBar backgroundColor={COLOR_PALETTE.FIRST_PURPLE} />
                <View style={styles.text}>


                    {displayTextArray?.map((i: any, key: number) => {
                        return (
                            <View key={key + 1} style={i.senderId === String(adminCode) ? { ...styles.chatBubleContainer, alignItems: 'flex-end' } : { ...styles.chatBubleContainer, alignItems: 'flex-start' }}>
                                <View style={i.senderId === String(adminCode) ? { ...styles.messageArea, alignItems: 'flex-end' } : { ...styles.messageArea, alignItems: 'flex-start' }}>
                                    <Text style={styles.chatBuble} key={(key + 1) * 10}>{i.text}</Text>
                                    <Text key={(key + 1) * 100} style={styles.subTextDate}>{String(moment(i?.timestamp).format("DD/MM/YYYY-HH:mm"))}</Text>
                                </View>
                            </View>
                        );
                    })}
                </View>

                <View style={styles.textArea}>
                    <TextInput
                        placeholder="Mesaj..."
                        value={text.text}
                        onChangeText={(value) => setText({ senderId: 1, text: value, timestamp: new Date().getUTCDate() },
                        )}
                        style={styles.input}
                    />
                    <TouchableOpacity style={styles.button} onPress={yazdir}>
                        <Ionicons name="send" size={25} color={COLOR_PALETTE.SECOND_PURPLE} />
                    </TouchableOpacity>
                </View>


            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_PALETTE.FIRST_WHITE,
    },
    text: {
        alignItems: "center",
        backgroundColor: COLOR_PALETTE.FIRST_WHITE,
        height: '80%',
        width: '100%',
    },
    button: {
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        borderColor: COLOR_PALETTE.SECOND_PURPLE,
        borderWidth: 2,
        borderRadius: 50,
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: COLOR_PALETTE.FIRST_PURPLE,
        paddingHorizontal: 5,
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    textArea: {
        gap: 3,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: COLOR_PALETTE.FIRST_WHITE,
        height: '20%',
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
    chatBubleContainer: {
        width: "100%",
        paddingHorizontal: 10,

    },
    messageArea: {
        justifyContent: "center",

    },
    chatBuble: {
        maxWidth: "75%",
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#F7F4F2',
        color: COLOR_PALETTE.SECOND_PURPLE,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: COLOR_PALETTE.FIRST_PURPLE,
    },
    subTextDate: {
        fontSize: 8,
        fontWeight: "200",
        color: "black",
    },
});
