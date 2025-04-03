import { useRouter } from 'expo-router';
import { Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from 'react';
import styles from './stylesheets'

export default function Login() {
  const router = useRouter();

  // Track email and password state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Stores error message
  const [errMsg, setErrMsg] = useState<string | null>(null);

  // Function triggered when login button pushed
  const handleLogin = () => {
    // Reset any existing error message
    setErrMsg(null);

    // If there is an email and password input, change to the "home" page /*}
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
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.primaryButton} onPress={handleLogin}> {/* Login Button */}
        <Text style={styles.primaryButtonText}>Login</Text>
      </TouchableOpacity>
      {errMsg ? <Text style={styles.errorBox}>{errMsg}</Text> : null} {/* Display error message if one exists*/}
    </>
  );
}
