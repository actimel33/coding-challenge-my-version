import { groupBy, mapValues, maxBy, compact } from 'lodash';

import { IInfluencer } from '@app/types';

export const findTopInfluencers = (
  records: string[],
  groupByKey: keyof IInfluencer,
  topInfluencersByKey: keyof IInfluencer,
) => {
  // Group records by category and find the top influencer in each category by followers
  const groupsByCategory = groupBy(records, groupByKey);
  const topInfluencers = mapValues(groupsByCategory, influencers => maxBy(influencers, topInfluencersByKey));

  return topInfluencers || [];
};
