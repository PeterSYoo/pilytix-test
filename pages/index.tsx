import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { IOpportunities } from '../types/opportunities';
import useFetchOpportunities from '@/hooks/useFetchOpportunities';
import { BasicTable } from '@/components/BasicTable.components';
import { Modal } from '@/components/Modal.components';

const Home = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [rowData, setRowData] = useState<IOpportunities | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Fetches & Caches Data
  const {
    dataOpportunities,
    isLoadingOpportunities,
    isErrorOpportunities,
    refetchOpportunities,
  } = useFetchOpportunities();

  const handleRowClick = (rowData: IOpportunities, index: number) => {
    setActiveIndex(index);
    setRowData(rowData);
    setIsModal(true);
  };

  const handleCloseModal = useCallback(() => {
    setIsModal(false);
  }, []);

  const handleNextItem = useCallback(() => {
    const currentIndex = dataOpportunities.indexOf(rowData);
    const nextIndex = (currentIndex + 1) % dataOpportunities.length;
    setRowData(dataOpportunities[nextIndex]);
    setActiveIndex(nextIndex);
  }, [dataOpportunities, rowData]);

  const handlePreviousItem = useCallback(() => {
    const currentIndex = dataOpportunities.indexOf(rowData);
    const previousIndex =
      (currentIndex - 1 + dataOpportunities.length) % dataOpportunities.length;
    setRowData(dataOpportunities[previousIndex]);
    setActiveIndex(previousIndex);
  }, [dataOpportunities, rowData]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        handlePreviousItem();
      } else if (event.key === 'ArrowRight') {
        handleNextItem();
      } else if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleNextItem, handlePreviousItem, handleCloseModal]);

  if (isLoadingOpportunities) return <>Loading...</>;
  if (isErrorOpportunities) return <>Error</>;

  return (
    <>
      {isModal && activeIndex !== null ? (
        <Modal
          handleNextItem={handleNextItem}
          handlePreviousItem={handlePreviousItem}
          rowData={rowData}
          onClose={handleCloseModal}
        />
      ) : null}
      <div className="w-full h-full grid grid-rows-[54px_44px_59px_1fr] xl:grid-rows-[54px_107px_44px_59px_1fr] xl:max-w-[1405px] mx-auto max-w-[1024px] bg-white">
        {/* Header */}
        {/* Row 1 */}
        <div className="flex justify-between items-center border-t-[5px] border-t-[#69A4F9] border-b border-b-[#F2F2F2] px-[15px] xl:px-[34px]">
          <div className="flex items-center text-xs font-medium">
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
        <div className="hidden xl:flex justify-between items-center px-[34px] pt-[18px] gap-[10px]">
          <div className="border border-[#F2F2F2] h-full w-full text-xs text-[#D7D7D7] font-bold flex justify-center items-center rounded-lg">
            PLACEHOLDER
          </div>
          <div className="border border-[#F2F2F2] h-full w-full text-xs text-[#D7D7D7] font-bold flex justify-center items-center rounded-lg">
            PLACEHOLDER
          </div>
          <div className="border border-[#F2F2F2] h-full w-full text-xs text-[#D7D7D7] font-bold flex justify-center items-center rounded-lg">
            PLACEHOLDER
          </div>
        </div>
        {/*  */}
        {/* Row 3 */}
        <div className="w-full border-b-[2px] border-b-[#F2F2F2] px-[15px] h-full xl:px-[34px]">
          <div className="flex items-end h-full border-b-[2px] border-b-[#44DDB0] w-fit mt-[2px]">
            <span className="text-sm font-bold pb-[6px]">
              OPPORTUNITIES ({dataOpportunities.length})
            </span>
          </div>
        </div>
        {/*  */}
        {/* Row 4 */}
        <div className="w-full px-[15px] flex justify-between items-center xl:px-[34px]">
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center h-[30px] rounded-lg px-[10px] gap-[4px] shadow-[0_3px_0px_0px_rgba(105,162,249,1)] hover:mt-[7px] hover:shadow-none bg-gradient-to-b from-[#69A2F9] to-[#72C6FB]">
            <Image
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676528284/PILYTIX%20Test/mobile/plus_wavqzz.png"
              alt="add"
              width={12}
              height={12}
            />
            <span className="text-xs text-white font-medium">
              New Opportunity
            </span>
          </button>
        </div>
        {/*  */}
        {/*  */}
        {/* Table */}
        <BasicTable
          dataOpportunities={dataOpportunities}
          handleRowClick={handleRowClick}
          searchTerm={searchTerm}
        />
        {/*  */}
      </div>
    </>
  );
};

export default Home;
