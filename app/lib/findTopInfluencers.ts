import { IInfluencer } from '@app/types';

export function findTopInfluencers({
  influencers,
  groupByKey,
  topInfluencersByKey,
  limit = Infinity,
}: {
  influencers: IInfluencer[];
  groupByKey: keyof IInfluencer;
  topInfluencersByKey: keyof IInfluencer;
  limit?: number;
}) {
  let result: IInfluencer[] = [];
  if (groupByKey === 'Followers') {
    result = influencers
      .filter(influencer => typeof influencer[groupByKey] === 'number')
      .sort((a, b) => +b[groupByKey] - +a[groupByKey])
      .filter(
        (influencer, index, self) =>
          index === self.findIndex((i: IInfluencer) => i[topInfluencersByKey] === influencer[topInfluencersByKey]),
      )
      .slice(0, limit);
  } else {
    result = influencers
      .sort((a, b) => +b[groupByKey] - +a[groupByKey])
      .filter(
        (influencer, index, self) =>
          index === self.findIndex((i: IInfluencer) => i[topInfluencersByKey] === influencer[topInfluencersByKey]),
      )
      .slice(0, limit);
  }

  return result;
}
