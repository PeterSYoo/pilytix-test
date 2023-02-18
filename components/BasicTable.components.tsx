import { Fragment } from 'react';
import { IOpportunities } from '../types/opportunities';

export const BasicTable = ({
  dataOpportunities,
  handleRowClick,
}: {
  dataOpportunities: [IOpportunities];
  handleRowClick: (row: IOpportunities, index: number) => void;
}) => {
  return (
    <>
      <div className="mx-[13px] xl:mx-[34px] scrollbar-hide bg-white overflow-auto border border-[#F2F2F2] rounded-lg">
        <div className="grid auto-rows-auto text-sm xl:text-xs">
          <div className="hidden xl:grid-cols-[1.9fr_1.9fr_1fr_1fr_1fr_1fr_1fr_1fr] xl:grid xl:py-3 xl:pl-[17px] text-xs font-medium text-[#6C6F75] border-b border-[#F2F2F2]">
            <span>OPP NAME</span>
            <span>OPP STAGE</span>
            <span>REP PROBABILITY</span>
            <span>PX PROBABILITY</span>
            <span>PX TIER</span>
            <span>AMOUNT</span>
            <span>PRODUCT</span>
            <span>SALES REP</span>
          </div>
          {dataOpportunities.map((row, index) => (
            <Fragment key={row.oppId}>
              <div
                onClick={() => handleRowClick(row, index)}
                className={`${
                  index % 2 === 0 ? 'bg-white' : 'bg-[#f7f7f7] xl:bg-white'
                } hover:bg-[#F2F2F2] cursor-pointer border-b border-[#F2F2F2] xl:grid-cols-[1.9fr_1.9fr_1fr_1fr_1fr_1fr_1fr_1fr] xl:grid xl:py-2 xl:px-2 md:px-3`}
              >
                <div className="flex justify-between px-[10px] py-[4px]">
                  <p className="xl:hidden">OPP NAME</p>
                  <div className="">{row.oppName}</div>
                </div>
                <div className="flex justify-between px-[10px] py-[4px]">
                  <p className="xl:hidden">OPP STAGE</p>
                  {row.stage === '1. No Conversation' && (
                    <div className="text-[#69A2F9] bg-[#F2F2F2] rounded px-2 py-1 flex justify-center items-center">
                      {row.stage}
                    </div>
                  )}
                  {row.stage === '2. Attempted Contact' && (
                    <div className="text-[#60A8EA] bg-[#F2F2F2] rounded px-2 py-1 flex justify-center items-center">
                      {row.stage}
                    </div>
                  )}
                  {row.stage === '3. Initial Conversation' && (
                    <div className="text-[#59ACDF] bg-[#F2F2F2] rounded px-2 py-1 flex justify-center items-center">
                      {row.stage}
                    </div>
                  )}
                  {row.stage === '5. Meeting or Product Discovery' && (
                    <div className="text-[#4CB4C7] bg-[#F2F2F2] rounded px-2 py-1 flex justify-center items-center">
                      {row.stage}
                    </div>
                  )}
                  {row.stage === '7. Nearing a Decision' && (
                    <div className="text-[#3FBDB0] bg-[#F2F2F2] rounded px-2 py-1 flex justify-center items-center">
                      {row.stage}
                    </div>
                  )}
                  {row.stage === '8. Payment Pending' && (
                    <div className="text-[#36C2A0] bg-[#F2F2F2] rounded px-2 py-1 flex justify-center items-center">
                      {row.stage}
                    </div>
                  )}
                </div>
                <div className="flex justify-between px-[10px] py-[4px]">
                  <p className="xl:hidden">REPP PROBABILITY</p>
                  <div>{row.repProbability}</div>
                </div>
                <div className="flex justify-between px-[10px] py-[4px]">
                  <p className="xl:hidden">PX PROBABILITY</p>
                  <div>{row.pilytixProbability}</div>
                </div>
                <div className="flex justify-between px-[10px] py-[4px]">
                  <p className="xl:hidden">PX TIER</p>
                  <div>{row.pilytixTier}</div>
                </div>
                <div className="flex justify-between px-[10px] py-[4px]">
                  <p className="xl:hidden">AMOUNT</p>
                  <div>{row.amount}</div>
                </div>
                <div className="flex justify-between px-[10px] py-[4px]">
                  <p className="xl:hidden">PRODUCT</p>
                  <div>{row.product}</div>
                </div>
                <div className="flex justify-between px-[10px] py-[4px]">
                  <p className="xl:hidden">SALES REP</p>
                  <div>{row.salesRepName}</div>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
