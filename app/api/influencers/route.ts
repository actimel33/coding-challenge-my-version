import fs from 'fs';
import { NextApiRequest } from 'next';

import { NextResponse } from 'next/server';

import { processFile } from '@lib/parseInfluencers';

async function handler(req: NextApiRequest) {
  // Read the csv file instagram_influencers.csv
  const fileContent = await processFile();

  //Return the content of the data file in json format
  return NextResponse.json({ data: fileContent });
}

export { handler as GET };
