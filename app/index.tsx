import { Text, View } from "react-native";
import Login from './login';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Login /> {/* defaults to login page on start */}
    </View>
  );
}
