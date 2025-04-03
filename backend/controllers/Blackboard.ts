import { db } from '../firebase/firebaseConfig';
import GeoKnowAI from '../experts/GeoKnowAI';
import RegionalAI from '../experts/RegionalAI';
import LandmarkAI from '../experts/LandmarkAI';

class Blackboard {
  async storeData(key: string, value: object): Promise<void> {
    await db.collection('blackboard').doc(key).set(value);
  }

  async retrieveData(key: string): Promise<any | null> {
    const doc = await db.collection('blackboard').doc(key).get();
    return doc.exists ? doc.data() : null;
  }

  async forwardResult(manager: string, result: object): Promise<void> {
    console.log(`Forwarding result to ${manager}:`, result);
  }

  async notifyExperts(pictureData: any): Promise<any[]> {

    const results = await Promise.all([
      GeoKnowAI.analyzeLocation(pictureData),
      RegionalAI.analyzeRegion(pictureData),
      LandmarkAI.analyzeLandmarks(pictureData),
    ]);

    await this.storeData('expertResults', { results });
    return results;
  }
}

export default new Blackboard();
