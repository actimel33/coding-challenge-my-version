import { ETableTitle, IInfluencer } from '@app/types.d';
import InfluencersTableRow from '@components/atoms/influencers-table-row';

export default async function InfluencersTable({
  title,
  influencers,
}: {
  title: ETableTitle;
  influencers: IInfluencer[];
}) {
  return (
    <table className="min-w-max w-full table-auto">
      <caption className="bg-gray-100 text-lg py-6 font-bold uppercase">{title}</caption>
      <thead>
        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th className="py-3 px-2 text-left capitalize text-xs">Followers</th>
          <th className="py-3 px-2 text-left capitalize text-xs">Influencer insta name</th>
          <th className="py-3 px-2 text-left capitalize text-xs">category</th>
          <th className="py-3 px-2 text-left capitalize text-xs">instagram name</th>
          <th className="py-3 px-2 text-left capitalize text-xs">Followers</th>
          <th className="py-3 px-2 text-left capitalize text-xs">Audience country(mostly)</th>
          <th className="py-3 px-2 text-left capitalize text-xs">Authentic engagement</th>
          <th className="py-3 px-2 text-left capitalize text-xs">Engagement avg</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm font-light">
        {Object.values(influencers).map((item, index) => (
          <InfluencersTableRow key={`${item.Followers}_${index}`} influencer={item} />
        ))}
      </tbody>
    </table>
  );
}
