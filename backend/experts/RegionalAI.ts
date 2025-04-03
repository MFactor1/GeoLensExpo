import axios from 'axios';

const IMAGGA_API_KEY = process.env.IMAGGA_API_KEY || 'YOUR_IMAGGA_API_KEY';
const IMAGGA_API_SECRET = process.env.IMAGGA_API_SECRET || 'YOUR_IMAGGA_API_SECRET';
const IMAGGA_API_URL = 'https://api.imagga.com/v2/tags';

class RegionalAI {
  async analyzeRegion(pictureData: any): Promise<any> {
    const response = await axios.get(IMAGGA_API_URL, {
      headers: {
        Authorization: `Basic ${Buffer.from(`${IMAGGA_API_KEY}:${IMAGGA_API_SECRET}`).toString('base64')}`
      },
      params: {
        image_base64: pictureData.imageBase64
      }
    });

    const topTag = response.data.result.tags[0];

    return {
      expert: 'RegionalAI',
      analysis: topTag.tag.en,
      confidence: topTag.confidence / 100
    };
  }
}

export default new RegionalAI();