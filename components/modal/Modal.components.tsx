import Image from 'next/image';
import { IOpportunities } from '../../types/opportunities';
import { ProbabilityHistory } from './charts/ProbabilityHistory.components';
import { FactorsIncreasingWin } from './charts/FactorsIncreasingWin.components';
import { FactorsDecreasingWin } from './charts/FactorsDecreasingWin.components';
import { List } from './List.components';

export const Modal = ({
  onClose,
  rowData,
  handleNextItem,
  handlePreviousItem,
}: {
  onClose: () => void;
  rowData: IOpportunities | null;
  handleNextItem: () => void;
  handlePreviousItem: () => void;
}) => {
  return (
    <>
      <div className="absolute flex h-screen w-screen items-center justify-center bg-black/50 px-[18px] backdrop-blur-sm">
        <div className="flex h-full w-full flex-col place-content-center place-items-center gap-10">
          {/* Modal Container */}
          <div className="grid h-4/5 w-full grid-rows-[58px_1fr_58px] rounded-lg bg-white">
            {/* Header */}
            <div className="flex w-full items-center justify-between border-t-[5px] border-b border-t-[#69A4F9] border-b-[#F2F2F2] px-[31px]">
              <div className="flex flex-col text-xs font-medium md:flex-row md:items-center">
                <div className="flex items-center">
                  <span>PILYTIX Scored Opportunities</span>
                  <div className="mt-[1px]">
                    <Image
                      src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676439192/PILYTIX%20Test/mobile/ei_chevron-right_zoefgi.png"
                      alt="chevron-right"
                      width={16}
                      height={16}
                    />
                  </div>
                </div>
                <span>{rowData?.oppName}</span>
              </div>
              {/* Close Modal */}
              <button
                onClick={onClose}
                className="flex h-[30px] items-center gap-[4px] rounded-lg bg-gradient-to-b from-[#69A2F9] to-[#72C6FB] px-[15px] shadow-[0_3px_0px_0px_rgba(105,162,249,1)] hover:mt-[7px] hover:shadow-none"
              >
                <Image
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676533324/PILYTIX%20Test/mobile/x-white_a3fhnh.png"
                  alt="x"
                  width={12}
                  height={12}
                />
              </button>
              {/*  */}
            </div>
            {/*  */}
            {/* Charts & List */}
            <div className="flex w-full flex-col gap-[30px] overflow-auto scrollbar-hide">
              {/* Probability History */}
              <ProbabilityHistory rowData={rowData} />
              {/*  */}
              {/* PILYTIX Factors Increasing Win */}
              <FactorsIncreasingWin rowData={rowData} />
              {/*  */}
              {/* PILYTIX Factors Decreasing Win */}
              <FactorsDecreasingWin rowData={rowData} />
              {/*  */}
              {/* List */}
              <List rowData={rowData} />
              {/*  */}
            </div>
            {/*  */}
            {/* Empty Footer */}
            <div className="w-full border-t border-t-[#F2F2F2]"></div>
            {/*  */}
          </div>
          {/* Arrows */}
          <div className="flex w-full max-w-[1410px] items-center justify-center gap-[20%]">
            {/* Navigate previous row */}
            <div className="h-[45px]">
              <button
                onClick={() => handlePreviousItem()}
                className="flex h-[40px] items-center gap-[4px] rounded-lg bg-gradient-to-b from-[#5781c3] to-[#72C6FB] px-[35px] shadow-[0_3px_0px_0px_rgba(73,109,165,1)] hover:mt-[3px] hover:shadow-none"
              >
                <Image
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676535959/PILYTIX%20Test/mobile/chevron-left_pbrrn9.png"
                  alt="x"
                  width={30}
                  height={30}
                  className="mr-1"
                />
              </button>
            </div>
            {/*  */}
            {/* Navigate next row */}
            <div className="h-[45px]">
              <button
                onClick={() => handleNextItem()}
                className="flex h-[40px] items-center gap-[4px] rounded-lg bg-gradient-to-b from-[#5781c3] to-[#72C6FB] px-[35px] shadow-[0_3px_0px_0px_rgba(73,109,165,1)] hover:mt-[3px] hover:shadow-none"
              >
                <Image
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676535959/PILYTIX%20Test/mobile/chevron-right_gvdljj.png"
                  alt=">"
                  width={30}
                  height={30}
                  className="ml-1"
                />
              </button>
            </div>
            {/*  */}
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};
