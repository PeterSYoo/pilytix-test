import Image from 'next/image';
import { IOpportunities } from '../types/opportunities';
import { ProbabilityHistory } from './charts/ProbabilityHistory.components';
import { FactorsIncreasingWin } from './charts/FactorsIncreasingWin.components';
import { FactorsDecreasingWin } from './charts/FactorsDecreasingWin.components';

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
      <div className="h-screen w-screen bg-black/50 backdrop-blur-sm absolute flex justify-center items-center px-[18px]">
        <div className="flex flex-col place-items-center place-content-center h-full w-full gap-10">
          {/* Modal Container */}
          <div className="bg-white rounded-lg grid grid-rows-[58px_1fr] h-4/5 w-full">
            {/* Header */}
            <div className="flex justify-between items-center border-t-[5px] border-t-[#69A4F9] border-b border-b-[#F2F2F2] px-[31px] w-full">
              <div className="flex flex-col md:flex-row md:items-center text-xs font-medium">
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
              <button
                onClick={onClose}
                className="flex items-center h-[30px] rounded-lg px-[15px] gap-[4px] shadow-[0_3px_0px_0px_rgba(105,162,249,1)] hover:mt-[7px] hover:shadow-none bg-gradient-to-b from-[#69A2F9] to-[#72C6FB]"
              >
                <Image
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1676533324/PILYTIX%20Test/mobile/x-white_a3fhnh.png"
                  alt="x"
                  width={12}
                  height={12}
                />
              </button>
            </div>
            {/*  */}
            {/* Charts */}
            <div className="flex flex-col w-full overflow-auto scrollbar-hide gap-[30px]">
              {/* Probability History */}
              <ProbabilityHistory rowData={rowData} />
              {/*  */}
              {/* PILYTIX Factors Increasing Win */}
              <FactorsIncreasingWin rowData={rowData} />
              {/*  */}
              {/* PILYTIX Factors Decreasing Win */}
              <FactorsDecreasingWin rowData={rowData} />
              {/*  */}
            </div>
            {/*  */}
          </div>
          {/* Arrows */}
          <div className="flex justify-center items-center max-w-[1410px] w-full gap-[20%]">
            <div className="h-[45px]">
              <button
                onClick={() => handlePreviousItem()}
                className="flex items-center h-[40px] rounded-lg px-[35px] gap-[4px] shadow-[0_3px_0px_0px_rgba(73,109,165,1)] hover:mt-[3px] hover:shadow-none bg-gradient-to-b from-[#5781c3] to-[#72C6FB]"
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
            <div className="h-[45px]">
              <button
                onClick={() => handleNextItem()}
                className="flex items-center h-[40px] rounded-lg px-[35px] gap-[4px] shadow-[0_3px_0px_0px_rgba(73,109,165,1)] hover:mt-[3px] hover:shadow-none bg-gradient-to-b from-[#5781c3] to-[#72C6FB]"
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
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};
