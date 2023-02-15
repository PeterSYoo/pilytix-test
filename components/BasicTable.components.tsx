import useFetchOpportunities from '@/hooks/useFetchOpportunities';
import { Fragment, useEffect, useState } from 'react';

export const BasicTable = ({
  dataOpportunities,
  isLoadingOpportunities,
  isErrorOpportunities,
  refetchOpportunities,
  handleRowClick,
}: any) => {
  return (
    <>
      <div className="mx-[13px] scrollbar-hide bg-white overflow-auto border border-[#F2F2F2] rounded-lg">
        <div className="grid auto-rows-auto text-sm">
          {dataOpportunities.map((row: any, index: number) => (
            <Fragment key={row.oppId}>
              <div
                onClick={() => handleRowClick(event, row)}
                className={`${
                  index % 2 === 0 ? 'bg-white' : 'bg-[#F2F2F2]'
                } hover:bg-[#e2e2e2] cursor-pointer border-b border-[#F2F2F2]`}
              >
                <div className="flex justify-between px-[10px] py-[4px]">
                  <p>OPP NAME</p>
                  <div className="">{row.oppName}</div>
                </div>
                <div className="flex justify-between px-[10px] py-[4px]">
                  <p>OPP STAGE</p>
                  <div className="bg-[#6f6f6f] rounded px-2">
                    {row.stage === '1. No Conversation' && (
                      <div className="text-[#e04747]">{row.stage}</div>
                    )}
                    {row.stage === '2. Attempted Contact' && (
                      <div className="text-[#ff9a6f]">{row.stage}</div>
                    )}
                    {row.stage === '3. Initial Conversation' && (
                      <div className="text-[#ffbe78]">{row.stage}</div>
                    )}
                    {row.stage === '5. Meeting or Product Discovery' && (
                      <div className="text-[#F8D600]">{row.stage}</div>
                    )}
                    {row.stage === '7. Nearing a Decision' && (
                      <div className="text-[#DDD500]">{row.stage}</div>
                    )}
                    {row.stage === '8. Payment Pending' && (
                      <div className="text-[#CAD400]">{row.stage}</div>
                    )}
                  </div>
                </div>
                <div className="flex justify-between px-[10px] py-[4px]">
                  <p>REPP PROBABILITY</p>
                  <div>{row.repProbability}</div>
                </div>
                <div className="flex justify-between px-[10px] py-[4px]">
                  <p>PX PROBABILITY</p>
                  <div>{row.pilytixProbability}</div>
                </div>
                <div className="flex justify-between px-[10px] py-[4px]">
                  <p>PX TIER</p>
                  <div>{row.pilytixTier}</div>
                </div>
                <div className="flex justify-between px-[10px] py-[4px]">
                  <p>AMOUNT</p>
                  <div>{row.amount}</div>
                </div>
                <div className="flex justify-between px-[10px] py-[4px]">
                  <p>PRODUCT</p>
                  <div>{row.product}</div>
                </div>
                <div className="flex justify-between px-[10px] py-[4px]">
                  <p>SALES REP</p>
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
