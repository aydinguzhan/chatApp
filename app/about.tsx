import { StyleSheet, Text, View } from 'react-native';

export interface IAboutProps {
}

export default function About(props: IAboutProps) {
    return (
        <View style={style.container} >
            <Text style={style.text}>About Screen</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#fff'
    }
})
