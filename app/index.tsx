import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { ConnectBar } from '@/components/ConnectBar';

enum sendToWhoMessahe {
  ADMIN,
  CLIENT
}


export default function Index() {
  const [text, setText] = useState<any>({ id: null, text: "", user: '', date: "" });
  const [displayTextArray, setDisplayTextArray] = useState<any>([]);
  const [count, setCount] = useState<number>(0);
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  const yazdir = () => {
    if (text.text) {
      setDisplayTextArray([...displayTextArray, text])
      setText({ id: null, text: "", user: '', date: "27/11/24" });
      setCount(count => count += 1)
    }

  }
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (

    <View
      style={styles.container}
    >
      <StatusBar backgroundColor={"#907DD6"} />


      <View style={{ width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: isConnected ? "green" : "" }}>
        {/* <View style={styles.userAttachBar}>
          <View style={styles.profilImage}></View>
        </View> */}
        {isConnected ? <ConnectBar isConnected={isConnected} /> : <Text style={{ color: "white" }} >{count}</Text>}


      </View>
      <View style={styles.text}>
        {displayTextArray.map((i: any) => {
          return (
            <View key={i.id} style={i.user === 'admin' ? { ...styles.chatBubleContainer, alignItems: 'flex-end', } : { ...styles.chatBubleContainer, alignItems: 'flex-start' }}>
              <View style={i.user === 'admin' ? { ...styles.messageArea, alignItems: 'flex-end', } : { ...styles.messageArea, alignItems: 'flex-start' }}>
                <Text style={styles.chatBuble} key={i.id * 10} >{i.text}</Text>
                <Text key={i.id * 100} style={styles.subTextDate}>{i?.date}</Text>
              </View>
            </View>
          )
        })}
      </View>
      <View style={styles.textArea} >
        <TextInput placeholder="Bane birşeyler yaz..."
          value={text.text}
          onChangeText={(value) => setText({ id: Math.random(), text: value, user: count % 2 == 0 ? 'admin' : "client", date: "27/11/24" })}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={yazdir}>
          <Ionicons name="send" size={25} color="#F7F4F2" />
        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#8177BB',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  text: {
    alignItems: "center",
    backgroundColor: '#EDE7E3',
    height: '80%',
    width: '100%'
  },
  button: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: "50%",


  },
  input: {
    flex: 1,
    height: '90%',
    borderColor: '#8177BB',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 3,
    backgroundColor: "#ffff",
    borderRadius: 10,
  },
  textArea: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    paddingHorizontal: 8,
    marginVertical: 8,

  },
  chatBubleContainer: {
    width: "100%",
    paddingHorizontal: 5,
    alignItems: "flex-start",



  },
  messageArea: {
    justifyContent: "center",
    alignItems: "flex-end"
  },
  chatBuble: {
    maxWidth: "75%",
    minWidth: "40%",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderColor: '#EDE7E4',
    borderRadius: 10,
    backgroundColor: '#F7F4F2',
    color: "#8177BB",
    marginVertical: 5,
  },
  subTextDate: {
    maxWidth: "75%",
    paddingHorizontal: 10,
    fontSize: 8,
    fontWeight: 200,
    color: "black"

  },
  userAttachBar: {
    width: "100%",
    paddingHorizontal: 5,
    justifyContent: "space-between",
    alignItems: "flex-start"

  },
  profilImage: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "#EBDDD3",
    borderRadius: "50%"
  }
})
