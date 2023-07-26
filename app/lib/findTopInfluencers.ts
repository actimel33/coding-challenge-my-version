import { groupBy, mapValues, maxBy } from 'lodash';

export const findTopInfluencers = (records: string[], groupByKey: string, topInfluencersByKey: string) => {
  // Group records by category and find the top influencer in each category by followers
  const groupsByCategory = groupBy(records, groupByKey);
  const topInfluencers = mapValues(groupsByCategory, influencers => maxBy(influencers, topInfluencersByKey));

  return topInfluencers;
};
