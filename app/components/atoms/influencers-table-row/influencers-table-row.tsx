import { IInfluencerWithStringFollowers } from '@app/types.d';
import InfluencersTableCell from '@components/atoms/influencers-table-cell';
import { fetchInfluencers } from '@lib/fetchInfluencers';

export async function generateStaticParams() {
  const {
    data: { topInfluencersByCategory, topInfluencersByCountry },
  } = await fetchInfluencers();

  return Object.values({ ...topInfluencersByCategory, ...topInfluencersByCountry });
}

export default async function InfluencersTableRow({ influencer }: { influencer: IInfluencerWithStringFollowers }) {
  const values = Object.values(influencer);

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      {values.map((item, index) => (
        <InfluencersTableCell key={`${item}_${index}`} text={item} />
      ))}
    </tr>
  );
}
