import blackboard from './Blackboard';

class IdentificationManager {
  async processPicture(pictureData: any): Promise<any> {
    const results = await blackboard.notifyExperts(pictureData);
    await blackboard.forwardResult('RankManager', results);
    return results;
  }
}

export default new IdentificationManager();