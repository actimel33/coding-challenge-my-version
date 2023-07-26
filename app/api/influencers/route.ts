import { NextApiRequest } from 'next';

import { NextResponse } from 'next/server';

import { findTopInfluencers } from '@lib/findTopInfluencers';
import { parseInfluencers } from '@lib/parseInfluencers';

async function handler(req: NextApiRequest) {
  // Read the csv file instagram_influencers.csv
  const fileContent = await parseInfluencers();

  const groupsByCategoryKey_1 = 'category_1';
  const topInfluencersFollowers = 'Followers';

  const groupsByCategoryKey_2 = 'Audience country(mostly)';
  const topInfluencersAuthenticEngagement = 'Authentic engagement';

  const topInfluencers = {
    topInfluencersByCategory: findTopInfluencers(fileContent, groupsByCategoryKey_1, topInfluencersFollowers),
    topInfluencersByCountry: findTopInfluencers(fileContent, groupsByCategoryKey_2, topInfluencersAuthenticEngagement),
  };

  //Return the content of the data file in json format
  return NextResponse.json({ data: topInfluencers });
}

export { handler as GET };
