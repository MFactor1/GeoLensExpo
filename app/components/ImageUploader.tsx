import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import getLocation from './GetLocation';
import styles from '../stylesheets';

export default function ImageUploader() {
  const [image, setImage] = useState<string | null>(null);
  const [imageLocation, setImageLocation] = useState<string | null>(null);

  const pickImage = async () => {

    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission denied!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setImageLocation(getLocation(result.assets[0].uri));
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.primaryButton} onPress={pickImage}>
        <Text style={styles.primaryButtonText}>Upload Image</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 8 }} />}
      {imageLocation ?
        <Text style={[styles.subTitle, { marginBottom: 0 }]}>Determined Location:</Text>
      : null }
      <Text style={[styles.baseText, { textAlign: "center" }]}>{imageLocation}</Text>
    </View>
  );
}
