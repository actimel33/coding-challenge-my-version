import { NextResponse } from 'next/server';

import { IInfluencer } from '@app/types';
import { findTopInfluencers } from '@lib/findTopInfluencers';
import { parseInfluencers } from '@lib/parseInfluencers';

async function handler() {
  // Read the csv file instagram_influencers.csv
  const fileContent = (await parseInfluencers()) as unknown as IInfluencer[];

  const topInfluencersFollowers: keyof IInfluencer = 'Followers';
  const groupsByCategoryKey_1: keyof IInfluencer = 'category_1';

  const topInfluencersAuthenticEngagement: keyof IInfluencer = 'Engagement avg';
  const groupsByAudienceKey_2: keyof IInfluencer = 'Audience country(mostly)';

  const topInfluencersByCategory = findTopInfluencers({
    influencers: fileContent,
    groupByKey: topInfluencersFollowers,
    topInfluencersByKey: groupsByCategoryKey_1,
  });
  const topInfluencersByCountry = findTopInfluencers({
    influencers: fileContent,
    groupByKey: topInfluencersAuthenticEngagement,
    topInfluencersByKey: groupsByAudienceKey_2,
  });

  const topInfluencers = {
    topInfluencersByCategory,
    topInfluencersByCountry,
  };

  //Return the content of the data file in json format
  return NextResponse.json({ data: topInfluencers });
}

export { handler as GET };
