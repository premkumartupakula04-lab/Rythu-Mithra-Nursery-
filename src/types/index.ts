export interface ChilliVariety {
  id: string;
  name: string;
  category: string;
  badge?: string;
  image: string;
  isReferenceImage?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'NURSERY' | 'SEEDLINGS' | 'CHILLI CROP' | 'FARMERS' | 'FIELD VISITS';
  image: string;
  description: string;
}

export interface NurseryStep {
  step: string;
  title: string;
  description: string;
  image: string;
}

export interface FeatureCard {
  title: string;
  description?: string;
  highlight?: string;
  iconName: string;
}

export interface FarmerCropRecord {
  id: string;
  farmerName: string;
  teluguName?: string;
  location: string;
  seedVariety: string;
  acres: string;
  cropImage: string;
  cropStatus: string;
  highlightNote: string;
}

