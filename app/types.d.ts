export interface IInfluencer {
  Followers: string;
  'Influencer insta name': string;
  'instagram name': string;
  category_1: string;
  category_2: string;
  Followers: number;
  'Audience country(mostly)': string;
  'Authentic engagement': number;
  'Engagement avg': number;
}

export enum ETableTitle {
  CATEGORY = 'Top Influencers By Category',
  COUNTRY = 'Top Influencers By Country',
}
