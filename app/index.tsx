import { StatusBar, StyleSheet, View } from "react-native";
import { COLOR_PALETTE } from "../Utils/colorPallet"
import { useEffect, useState } from "react";
import Main from "./main";
import { chats } from "@/Utils/mockData";
import Chat from "./chat";
import { Navbar } from "@/components/navbar";

const pageName = ["index", "chat"]

export default function Index() {
  const [page, setPage] = useState<string>("index")
  const [selectUser, setSelectUser] = useState<any>({});
  const [detail, setDetail] = useState<any>({})

  useEffect(() => {
    if (Object.values(selectUser).length > 0) {
      setDetail(chats.filter((i: any) => i.chatId === selectUser.id));
      setPage(pageName[1])
      setSelectUser({})
    }
  }, [selectUser])
  return (
    <View style={styles.container}>

      <StatusBar animated={true} barStyle={"default"} backgroundColor={COLOR_PALETTE.FIRST_PURPLE} />

      <Navbar page={page} goBack={() => setPage(pageName[0])} isConnect={null} />
      {page === pageName[0] && <Main setSelectUser={setSelectUser} />}
      {page === pageName[1] && <Chat adminCode={detail[0].participants[0]} chatDetail={detail} goBack={() => setPage(pageName[0])} />}



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: COLOR_PALETTE.FIRST_PURPLE,
  },

});
