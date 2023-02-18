/*
name: Peter Yoo
email: petersyoox@gmail.com

I testify that this assignment was completely done by myself without any assistance from someone else.
*/
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { IOpportunities } from '../types/opportunities';
import useFetchOpportunities from '@/hooks/useFetchOpportunities';
import { BasicTable } from '@/components/BasicTable.components';
import { Modal } from '@/components/modal/Modal.components';

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

  // Function for handling row clicks
  const handleRowClick = (rowData: IOpportunities, index: number) => {
    setActiveIndex(index);
    setRowData(rowData);
    setIsModal(true);
  };

  // Function for closing the modal
  const handleCloseModal = useCallback(() => {
    setIsModal(false);
  }, []);

  // Function for handling navigation for next row
  const handleNextItem = useCallback(() => {
    const currentIndex = dataOpportunities.indexOf(rowData);
    const nextIndex = (currentIndex + 1) % dataOpportunities.length;
    setRowData(dataOpportunities[nextIndex]);
    setActiveIndex(nextIndex);
  }, [dataOpportunities, rowData]);

  // Function for handling navigation for previous row
  const handlePreviousItem = useCallback(() => {
    const currentIndex = dataOpportunities.indexOf(rowData);
    const previousIndex =
      (currentIndex - 1 + dataOpportunities.length) % dataOpportunities.length;
    setRowData(dataOpportunities[previousIndex]);
    setActiveIndex(previousIndex);
  }, [dataOpportunities, rowData]);

  // Event listener for keyboard navigation on keypress and close modal on key press.
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

  // Conditional rendering for loading and error states from custom hook
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
      <div className="mx-auto grid h-full w-full max-w-[1024px] grid-rows-[54px_44px_59px_1fr] bg-white xl:max-w-[1405px] xl:grid-rows-[54px_107px_44px_59px_1fr]">
        {/* Header */}
        {/* Row 1 */}
        <div className="flex items-center justify-between border-t-[5px] border-b border-t-[#69A4F9] border-b-[#F2F2F2] px-[15px] xl:px-[34px]">
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
        <div className="hidden items-center justify-between gap-[10px] px-[34px] pt-[18px] xl:flex">
          <div className="flex h-full w-full items-center justify-center rounded-lg border border-[#F2F2F2] text-xs font-bold text-[#D7D7D7]">
            PLACEHOLDER
          </div>
          <div className="flex h-full w-full items-center justify-center rounded-lg border border-[#F2F2F2] text-xs font-bold text-[#D7D7D7]">
            PLACEHOLDER
          </div>
          <div className="flex h-full w-full items-center justify-center rounded-lg border border-[#F2F2F2] text-xs font-bold text-[#D7D7D7]">
            PLACEHOLDER
          </div>
        </div>
        {/*  */}
        {/* Row 3 */}
        <div className="h-full w-full border-b-[2px] border-b-[#F2F2F2] px-[15px] xl:px-[34px]">
          <div className="mt-[2px] flex h-full w-fit items-end border-b-[2px] border-b-[#44DDB0]">
            <span className="pb-[6px] text-sm font-bold">
              OPPORTUNITIES ({dataOpportunities.length})
            </span>
          </div>
        </div>
        {/*  */}
        {/* Row 4 */}
        <div className="flex w-full items-center justify-between px-[15px] xl:px-[34px]">
          <div className="flex h-[30px] items-center gap-[11px] rounded-lg border border-[#DFE1E4] px-[10px]">
            <Image
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676441190/PILYTIX%20Test/mobile/search_zmpj2l.png"
              alt="search"
              width={16}
              height={16}
            />
            <input
              type="text"
              className="w-full text-xs placeholder:text-xs focus:outline-none"
              placeholder="Search Opportunities"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex h-[30px] items-center gap-[4px] rounded-lg bg-gradient-to-b from-[#69A2F9] to-[#72C6FB] px-[10px] shadow-[0_3px_0px_0px_rgba(105,162,249,1)] hover:mt-[7px] hover:shadow-none">
            <Image
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676528284/PILYTIX%20Test/mobile/plus_wavqzz.png"
              alt="add"
              width={12}
              height={12}
            />
            <span className="text-xs font-medium text-white">
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
