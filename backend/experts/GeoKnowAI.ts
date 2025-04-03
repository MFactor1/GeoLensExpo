import axios from 'axios';

class GeoKnowAI {
  async analyzeLocation(pictureData: any): Promise<any> {
    const response = await axios.post('https://api.geoknowr.com/analyze', {
      image: pictureData.imageBase64
    });

    return {
      expert: 'GeoKnowAI',
      analysis: response.data.location,
      confidence: response.data.confidence
    };
  }
}

export default new GeoKnowAI();