import { db } from '../firebase/firebaseConfig';

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
    const geo = await import('../experts/GeoKnowAI');
    const regional = await import('../experts/RegionalAI');
    const landmark = await import('../experts/LandmarkAI');

    const results = await Promise.all([
      geo.default.analyzeLocation(pictureData),
      regional.default.analyzeRegion(pictureData),
      landmark.default.analyzeLandmarks(pictureData),
    ]);

    await this.storeData('expertResults', { results });
    return results;
  }
}

export default new Blackboard();