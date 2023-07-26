import { parse } from 'csv-parse';
import fs from 'fs';
import path from 'path';

export const processFile = async () => {
  // Build file path
  const publicDirectory = path.join(process.cwd(), 'public');
  const influencersFilePath = path.join(publicDirectory, 'instagram_influencers.csv');

  const results: string[] = [];

  const parser = fs.createReadStream(influencersFilePath).pipe(parse({ delimiter: ',' }));

  for await (const record of parser) {
    // Each record is an array representing a row in the CSV file
    results.push(record);
  }

  return results;
};
