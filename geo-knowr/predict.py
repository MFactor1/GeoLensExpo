import torch
from torchvision import io
from torchvision.models import ResNet18_Weights
import os
import pickle

DEMO_IN = 'demo_in'
MODEL = 'model'
MODEL_GM = os.path.join(MODEL, 'gm.pkl')
MODEL_RESNET = os.path.join(MODEL, 'resnet.pt')

class GeoKnowr():
  def __init__(self):
    with open(MODEL_GM, 'rb') as gm_path:
      self.gm = pickle.load(gm_path)
    self.model = torch.load(MODEL_RESNET, weights_only=False)
    self.model.eval()
    assert self.gm.n_components == self.model.fc.out_features
    self.num_classes = self.gm.n_components

  def guess(self, image_path):
    image = io.read_image(image_path).float()
    image = preprocess(image)
    with torch.no_grad():
      pred = self.model(image.unsqueeze(0))
    cluster = torch.argmax(pred).item()
    lat, lng = self.gm.means_[cluster]
    return lat, lng
  
def preprocess(image):
  if image.shape[0] == 4:  # remove alpha channel
    image = image[:3]
  weights = ResNet18_Weights.DEFAULT
  transform = weights.transforms()
  return transform(image)

def main():
  geo_knowr = GeoKnowr()
  for filename in sorted(os.listdir(DEMO_IN)):
    if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
      image_path = os.path.join(DEMO_IN, filename)
      lat, lng = geo_knowr.guess(image_path)
      url = f'https://www.google.com/maps/place/{lat},{lng}/@{lat},{lng},5z'
      print(f'{filename}:')
      print(f'{url}')
      print()

if __name__ == '__main__':
  main()
