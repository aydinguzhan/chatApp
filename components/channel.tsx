import { COLOR_PALETTE } from "@/Utils/colorPallet";
import * as React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native-animatable";

export interface IItemProps {
    item: {
        id?: string | number,
        userName: string,
        lastMessage: string
        date: string,
        imageSource: string | any
    },
    setSelectUser: any


}

export interface IChannelProps {
    chatList: any;
    setSelectUser: any
}



const Item = ({ item, setSelectUser }: IItemProps) => {
    return (
        <TouchableOpacity onPress={() => setSelectUser(item)} style={styles.container}>
            <View style={styles.imageBox} >
                <Image source={item.imageSource} style={styles.image} />
            </View>
            <View style={styles.infoBox}>
                <Text style={styles.title}>{item.userName}</Text>
                <Text style={styles.text}>{item.lastMessage}</Text>
                <Text style={styles.text}>{item.date}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default function Channel({ chatList, setSelectUser }: IChannelProps) {


    return (
        <FlatList data={chatList} renderItem={({ item }: any) => <Item item={item} setSelectUser={setSelectUser} />} />
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: COLOR_PALETTE.FIRST_WHITE,
        borderWidth: 1,

        borderRadius: 10,
        marginVertical: 3,
        marginHorizontal: 6,

    },
    imageBox: {
        flex: 1,
    },
    infoBox: {
        flex: 5,
        justifyContent: "center",
        alignItems: "flex-start",

    },
    image: {
        backgroundColor: "black",
        width: 40,
        height: 40,
        borderRadius: 50,
        margin: 5
    },
    title: {
        fontWeight: 500
    },

    text: {
        fontSize: 10,
        opacity: .5,
        overflow: "hidden",
    }
    ,
    date: {
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    }

});
