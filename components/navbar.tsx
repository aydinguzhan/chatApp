import { COLOR_PALETTE } from '@/Utils/colorPallet';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { View } from 'react-native';
import ConnectBar from './connectBar';
export interface INavbarProps {
    isConnect: null | boolean,
    goBack: Function,
    page: string

}

export function Navbar({ page, goBack, isConnect = null }: INavbarProps) {
    return (

        <View style={styles.container}>
            {page !== "index" &&
                <>
                    <TouchableOpacity onPress={() => goBack()} >
                        <Ionicons name="arrow-back-circle-outline" size={30} color={COLOR_PALETTE.FIRST_WHITE} />
                    </TouchableOpacity>
                    <ConnectBar />
                </>
            }

            <TouchableOpacity onPress={() => { }}>
                <View style={styles.profilAvatarArea}>
                    <Image source={require('../assets/images/profil.png')} style={styles.image} alt='profile' />
                </View>
            </TouchableOpacity>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderColor: COLOR_PALETTE.FIRST_WHITE,
        borderBottomWidth: 1,
        height: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLOR_PALETTE.FIRST_PURPLE,
        paddingHorizontal: 10


    },
    profilAvatarArea: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: COLOR_PALETTE.FIRST_WHITE,
        backgroundColor: COLOR_PALETTE.FIRST_WHITE,
        borderRadius: "100%",
        justifyContent: "center",
        alignItems: "center"
    },

    image: {
        width: 20,
        height: 20,
        resizeMode: 'contain',

    },

});
