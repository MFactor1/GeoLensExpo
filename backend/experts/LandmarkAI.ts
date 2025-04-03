import axios from 'axios';

const APYHUB_API_KEY = process.env.APYHUB_API_KEY || 'YOUR_APYHUB_API_KEY'; // Pls do not put API key in codebase!!

class LandmarkAI {
  async analyzeLandmarks(pictureData: any): Promise<any> {
    const response = await axios.post('https://api.apyhub.com/analyze/image/landmark', {
      image: pictureData.imageBase64
    }, {
      headers: {
        'Content-Type': 'application/json',
        'apy-token': APYHUB_API_KEY
      }
    });

    return {
      expert: 'LandmarkAI',
      analysis: response.data.data.landmark,
      confidence: response.data.data.confidence
    };
  }
}

export default new LandmarkAI();
