import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import getLocation from './GetLocation';
import styles from '../stylesheets';

export default function ImageUploader() {

  // Stores image path and determined location
  const [image, setImage] = useState<string | null>(null);
  const [imageLocation, setImageLocation] = useState<string | null>(null);

  const pickImage = async () => {

    // Get image library permissions
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission denied!');
      return;
    }

    // Launch image picker screen
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // If an image was successfully selected, show the image, and get the location
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setImageLocation(getLocation(result.assets[0].uri));
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.primaryButton} onPress={pickImage}> {/* Upload image button */}
        <Text style={styles.primaryButtonText}>Upload Image</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 8 }} />} {/* Show image if one exists */}
      {imageLocation && <Text style={[styles.subTitle, { marginBottom: 0 }]}>Determined Location:</Text>}
      <Text style={[styles.baseText, { textAlign: "center" }]}>{imageLocation}</Text>
    </View>
  );
}
