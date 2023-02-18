import { IOpportunities } from '@/types/opportunities';

export const List = ({ rowData }: { rowData: IOpportunities | null }) => {
  return (
    <div className="mx-auto flex h-full w-full max-w-[1100px] flex-col justify-center gap-[9px] px-[31px] pt-[18px] pb-[100px] text-xs">
      <div className="flex justify-between border-b border-[#F2F2F2] py-[4px]">
        <p>OPP NAME</p>
        <div>{rowData?.oppName}</div>
      </div>
      <div className="flex justify-between border-b border-[#F2F2F2] py-[4px]">
        <p>OPP STAGE</p>
        {rowData?.stage === '1. No Conversation' && (
          <div className="flex items-center justify-center rounded bg-[#F2F2F2] px-2 py-1 text-[#69A2F9]">
            {rowData?.stage}
          </div>
        )}
        {rowData?.stage === '2. Attempted Contact' && (
          <div className="flex items-center justify-center rounded bg-[#F2F2F2] px-2 py-1 text-[#60A8EA]">
            {rowData?.stage}
          </div>
        )}
        {rowData?.stage === '3. Initial Conversation' && (
          <div className="flex items-center justify-center rounded bg-[#F2F2F2] px-2 py-1 text-[#59ACDF]">
            {rowData?.stage}
          </div>
        )}
        {rowData?.stage === '5. Meeting or Product Discovery' && (
          <div className="flex items-center justify-center rounded bg-[#F2F2F2] px-2 py-1 text-[#4CB4C7]">
            {rowData?.stage}
          </div>
        )}
        {rowData?.stage === '7. Nearing a Decision' && (
          <div className="flex items-center justify-center rounded bg-[#F2F2F2] px-2 py-1 text-[#3FBDB0]">
            {rowData?.stage}
          </div>
        )}
        {rowData?.stage === '8. Payment Pending' && (
          <div className="flex items-center justify-center rounded bg-[#F2F2F2] px-2 py-1 text-[#36C2A0]">
            {rowData?.stage}
          </div>
        )}
      </div>
      <div className="flex justify-between border-b border-[#F2F2F2] py-[4px]">
        <p>REPP PROBABILITY</p>
        <div>{rowData?.repProbability}</div>
      </div>
      <div className="flex justify-between border-b border-[#F2F2F2] py-[4px]">
        <p>PX PROBABILITY</p>
        <div>{rowData?.pilytixProbability}</div>
      </div>
      <div className="flex justify-between border-b border-[#F2F2F2] py-[4px]">
        <p>PX TIER</p>
        <div>{rowData?.pilytixTier}</div>
      </div>
      <div className="flex justify-between border-b border-[#F2F2F2] py-[4px]">
        <p>AMOUNT</p>
        <div>{rowData?.amount}</div>
      </div>
      <div className="flex justify-between border-b border-[#F2F2F2] py-[4px]">
        <p>PRODUCT</p>
        <div>{rowData?.product}</div>
      </div>
      <div className="flex justify-between border-b border-[#F2F2F2] py-[4px]">
        <p>SALES REP</p>
        <div>{rowData?.salesRepName}</div>
      </div>
    </div>
  );
};
