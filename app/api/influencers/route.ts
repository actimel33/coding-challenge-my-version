import { sortBy } from 'lodash';

import { NextResponse } from 'next/server';

import { IInfluencer } from '@app/types';
import { findTopInfluencers } from '@lib/findTopInfluencers';
import { parseInfluencers } from '@lib/parseInfluencers';
import { stringifyNumberWithSuffix } from '@lib/stringNumberWithSuffix';

async function handler() {
  // Read the csv file instagram_influencers.csv
  const fileContent = await parseInfluencers();

  const groupsByCategoryKey_1: keyof IInfluencer = 'category_1';
  const topInfluencersFollowers: keyof IInfluencer = 'Followers';

  const groupsByCategoryKey_2: keyof IInfluencer = 'Audience country(mostly)';
  const topInfluencersAuthenticEngagement: keyof IInfluencer = 'Authentic engagement';

  const topInfluencersByCategory = (
    sortBy(
      findTopInfluencers(fileContent, groupsByCategoryKey_1, topInfluencersFollowers),
      topInfluencersFollowers,
    ).reverse() as unknown as IInfluencer[]
  ).map(influencer => {
    if (typeof influencer[topInfluencersFollowers] !== 'string') {
      influencer[topInfluencersFollowers] = stringifyNumberWithSuffix(influencer[topInfluencersFollowers]);
    }

    return influencer;
  });

  const topInfluencersByCountry = (
    sortBy(
      findTopInfluencers(fileContent, groupsByCategoryKey_2, topInfluencersAuthenticEngagement),
      topInfluencersFollowers,
    ).reverse() as unknown as IInfluencer[]
  ).map(influencer => {
    if (typeof influencer[topInfluencersFollowers] !== 'string') {
      influencer[topInfluencersFollowers] = stringifyNumberWithSuffix(influencer[topInfluencersFollowers]);
    }

    return influencer;
  });

  const topInfluencers = {
    topInfluencersByCategory,
    topInfluencersByCountry,
  };

  //Return the content of the data file in json format
  return NextResponse.json({ data: topInfluencers });
}

export { handler as GET };
