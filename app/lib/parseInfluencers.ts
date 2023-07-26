import { parse } from 'csv-parse';
import fs from 'fs';
import path from 'path';

import { parseNumberWithSuffix } from './parseNumberWithSuffix';

export const parseInfluencers = async () => {
  // Build file path

  // console.time();
  const publicDirectory = path.join(process.cwd(), 'public');
  const influencersFilePath = path.join(publicDirectory, 'instagram_influencers.csv');

  const results: string[] = [];

  const followersKey = 'Followers';
  const authenticEngagementKey = 'Authentic engagement';
  const engagementAvgKey = 'Engagement avg';

  const parser = fs.createReadStream(influencersFilePath).pipe(
    parse({
      delimiter: ',',
      columns: header => header.map((columnName: string) => columnName.trim()),
    }),
  );

  for await (const record of parser) {
    // Each record is an object representing a row in the CSV file
    record[followersKey] = parseNumberWithSuffix(record[followersKey]);
    record[authenticEngagementKey] = parseNumberWithSuffix(record[authenticEngagementKey]);
    record[engagementAvgKey] = parseNumberWithSuffix(record[engagementAvgKey]);
    results.push(record);
  }
  // console.timeEnd();

  return results;
};
