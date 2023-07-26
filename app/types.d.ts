export interface IInfluencer {
  'Influencer insta name': string;
  'instagram name': string;
  category_1: string;
  category_2: string;
  Followers: number;
  'Audience country(mostly)': string;
  'Authentic engagement': number;
  'Engagement avg': number;
}

export interface IInfluencerWithStringFollowers extends IInfluencer {
  Followers: string;
}

export enum ETableTitle {
  CATEGORY = 'Top Influencers By Category',
  COUNTRY = 'Top Influencers By Country',
}
