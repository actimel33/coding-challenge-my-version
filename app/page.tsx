import { ETableTitle } from '@app/types.d';
import InfluencersTable from '@components/molecules/influencers-table/influencers-table';
import { fetchInfluencers } from '@lib/fetchInfluencers';

export default async function Home() {
  const {
    data: { topInfluencersByCategory, topInfluencersByCountry },
  } = await fetchInfluencers();

  return (
    <main>
      <div className="flex flex-col">
        <div className="w-full">
          <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
            <div className="w-full ">
              <div className="bg-white shadow-md rounded my-6">
                <InfluencersTable influencers={topInfluencersByCategory} title={ETableTitle.CATEGORY} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden ">
            <div className="w-full">
              <div className="bg-white shadow-md rounded my-6">
                <InfluencersTable influencers={topInfluencersByCountry} title={ETableTitle.COUNTRY} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
