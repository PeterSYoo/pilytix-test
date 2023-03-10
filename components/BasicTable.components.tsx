import { Fragment } from 'react';
import { IOpportunities } from '../types/opportunities';

export const BasicTable = ({
  dataOpportunities,
  handleRowClick,
  searchTerm,
}: {
  dataOpportunities: [IOpportunities];
  handleRowClick: (row: IOpportunities, index: number) => void;
  searchTerm: string;
}) => {
  // Filters the opportunities data based on the search term, converting both the row data and the search term to lowercase.
  const filteredOpportunities = dataOpportunities.filter((row) =>
    row.oppName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="mx-[13px] overflow-auto rounded-lg border border-[#F2F2F2] bg-white scrollbar-hide xl:mx-[34px]">
        <div className="grid auto-rows-auto text-sm xl:text-xs">
          {/* Column names for xl screens and higher */}
          <div className="hidden border-b border-[#F2F2F2] text-xs font-medium text-[#6C6F75] xl:grid xl:grid-cols-[1.9fr_1.9fr_1fr_1fr_1fr_1fr_1fr_1fr] xl:py-3 xl:pl-[17px]">
            <span>OPP NAME</span>
            <span>OPP STAGE</span>
            <span>REP PROBABILITY</span>
            <span>PX PROBABILITY</span>
            <span>PX TIER</span>
            <span>AMOUNT</span>
            <span>PRODUCT</span>
            <span>SALES REP</span>
          </div>
          {/*  */}
          {filteredOpportunities.map((row, index) => (
            <Fragment key={row.oppId}>
              <div
                onClick={() => handleRowClick(row, index)}
                className={`${
                  index % 2 === 0 ? 'bg-white' : 'bg-[#f7f7f7] xl:bg-white'
                } cursor-pointer border-b border-[#F2F2F2] hover:bg-[#F2F2F2] md:px-3 xl:grid xl:grid-cols-[1.9fr_1.9fr_1fr_1fr_1fr_1fr_1fr_1fr] xl:py-2 xl:px-2`}
              >
                <div className="flex justify-between px-[10px] py-[4px]">
                  <p className="xl:hidden">OPP NAME</p>
                  <div className="">{row.oppName}</div>
                </div>
                <div className="flex justify-between px-[10px] py-[4px]">
                  <p className="xl:hidden">OPP STAGE</p>
                  {row.stage === '1. No Conversation' && (
                    <div className="flex items-center justify-center rounded bg-[#F2F2F2] px-2 py-1 text-[#69A2F9]">
                      {row.stage}
                    </div>
                  )}
                  {row.stage === '2. Attempted Contact' && (
                    <div className="flex items-center justify-center rounded bg-[#F2F2F2] px-2 py-1 text-[#60A8EA]">
                      {row.stage}
                    </div>
                  )}
                  {row.stage === '3. Initial Conversation' && (
                    <div className="flex items-center justify-center rounded bg-[#F2F2F2] px-2 py-1 text-[#59ACDF]">
                      {row.stage}
                    </div>
                  )}
                  {row.stage === '5. Meeting or Product Discovery' && (
                    <div className="flex items-center justify-center rounded bg-[#F2F2F2] px-2 py-1 text-[#4CB4C7]">
                      {row.stage}
                    </div>
                  )}
                  {row.stage === '7. Nearing a Decision' && (
                    <div className="flex items-center justify-center rounded bg-[#F2F2F2] px-2 py-1 text-[#3FBDB0]">
                      {row.stage}
                    </div>
                  )}
                  {row.stage === '8. Payment Pending' && (
                    <div className="flex items-center justify-center rounded bg-[#F2F2F2] px-2 py-1 text-[#36C2A0]">
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
