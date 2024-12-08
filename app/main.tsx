import Channel from '@/components/channel';
import * as React from 'react';
import { View } from 'react-native-animatable';
import { chatList } from "../Utils/mockData"
import { COLOR_PALETTE } from '@/Utils/colorPallet';

export interface IMainProps {
    setSelectUser: any
}

export default function Main({ setSelectUser }: IMainProps) {
    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: COLOR_PALETTE.FIRST_PURPLE }}>
            <Channel setSelectUser={setSelectUser} chatList={chatList} />
        </View>
    );
}
