import ImageUploader from './components/ImageUploader';
import { useRouter } from 'expo-router';
import { Button } from 'react-native';

export default function App() {
  const router = useRouter();

  return (
    <>
      <Button title={"Back to Login"} onPress={() => router.push("/")} />
      <ImageUploader />
    </>
  );
}
