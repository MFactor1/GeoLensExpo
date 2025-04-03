import ImageUploader from './components/ImageUploader';
import { useRouter } from 'expo-router';
import { Button, View, TouchableOpacity, Text } from 'react-native';
import styles from './stylesheets';

export default function App() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageUploader /> {/* Show image uploader component */}
        <TouchableOpacity onPress={() => router.push("/")} style={styles.secondayButton}> {/* Back to login button */}
        <Text style={styles.secondayButtonText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}
