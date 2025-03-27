import { useRouter } from 'expo-router';
import { Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from 'react';
import styles from './stylesheets'

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState<string | null>(null);

  const handleLogin = () => {
    setErrMsg(null);
    if (email != "" && password != "") {
      router.push("./home");
    } else {
      setErrMsg('Please input email and password');
    }
  }

  return (
    <>
      <Text style={styles.title} >Login to your GeoLens Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.primaryButton} onPress={handleLogin}>
        <Text style={styles.primaryButtonText}>Login</Text>
      </TouchableOpacity>
      {errMsg ? <Text style={styles.errorBox}>{errMsg}</Text> : null}
    </>
  );
}
