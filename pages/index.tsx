import { BasicTable } from '@/components/BasicTable.components';
import useFetchOpportunities from '@/hooks/useFetchOpportunities';
import Image from 'next/image';

const Home = () => {
  // Fetches & Caches Data
  const {
    dataOpportunities,
    isLoadingOpportunities,
    isErrorOpportunities,
    refetchOpportunities,
  } = useFetchOpportunities();

  console.log(dataOpportunities);

  const handleRowClick = (event: any, row: any) => {
    console.log('row', row);
  };

  if (isLoadingOpportunities) return <>Loading...</>;
  if (isErrorOpportunities) return <>Error</>;

  return (
    <>
      <div className="w-full h-full grid grid-rows-[54px_44px_59px_1fr] mx-auto max-w-[1024px] bg-white">
        {/* Header */}
        {/* Row 1 */}
        <div className="flex justify-between items-center border-t-[5px] border-t-[#69A4F9] border-b border-b-[#F2F2F2] px-[15px]">
          <div className="flex items-center text-xs">
            <span>PILYTIX</span>
            <div className="mt-[1px]">
              <Image
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676439192/PILYTIX%20Test/mobile/ei_chevron-right_zoefgi.png"
                alt="avatar"
                width={16}
                height={16}
              />
            </div>
            <span>PILYTIX Scored Opportunities</span>
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676438993/PILYTIX%20Test/mobile/avatar_dypulg.png"
              alt="avatar"
              width={28}
              height={28}
            />
          </div>
        </div>
        {/*  */}
        {/* Row 2 */}
        <div className="w-full border-b-[2px] border-b-[#F2F2F2] px-[15px] h-full">
          <div className="flex items-end h-full border-b-[2px] border-b-[#44DDB0] w-fit mt-[2px]">
            <span className="text-sm font-bold pb-[6px]">
              OPPORTUNITIES ({dataOpportunities.length})
            </span>
          </div>
        </div>
        {/*  */}
        {/* Row 3 */}
        <div className="w-full px-[15px] flex justify-between items-center">
          <div className="flex items-center gap-[11px] h-[30px] border border-[#DFE1E4] rounded-lg px-[10px]">
            <Image
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676441190/PILYTIX%20Test/mobile/search_zmpj2l.png"
              alt="search"
              width={16}
              height={16}
            />
            <input
              type="text"
              className="w-full focus:outline-none text-xs placeholder:text-xs"
              placeholder="Search Opportunities"
            />
          </div>
          <button className="flex items-center h-[30px] border border-[#DFE1E4] rounded-lg px-[10px] gap-[4px] shadow-[0_3px_0px_0px_rgba(223,225,228,1)] hover:mt-[3px] hover:shadow-none">
            <Image
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676441600/PILYTIX%20Test/mobile/add_muhdlz.png"
              alt="add"
              width={15}
              height={15}
              className="pt-[1px]"
            />
            <span className="text-xs text-[#6C6F75]">New Opportunity</span>
          </button>
        </div>
        {/*  */}
        {/*  */}
        {/* Table */}
        <BasicTable
          dataOpportunities={dataOpportunities}
          isLoadingOpportunities={isLoadingOpportunities}
          isErrorOpportunities={isErrorOpportunities}
          refetchOpportunities={refetchOpportunities}
          handleRowClick={handleRowClick}
        />
        {/*  */}
      </div>
    </>
  );
};

export default Home;
