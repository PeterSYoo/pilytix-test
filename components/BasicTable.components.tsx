import { Fragment, useEffect, useState } from 'react';

export const BasicTable = () => {
  const [data, setData] = useState<any>([]);

  const handleRowClick = (event: any, row: any) => {
    console.log('row', row);
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch('/json/opportunities.json');
        const result = await data.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <div className="grid auto-rows-auto border border-gray-600 rounded-lg">
        <div className="grid grid-cols-[275px_275px_130px_120px_80px_90px_100px_150px] border-b border-black text-sm">
          <div className="pl-[20px]">Opp Name</div>
          <div className="pl-[20px]">Opp Stage</div>
          <div className="pl-[20px]">Rep Probability</div>
          <div className="pl-[20px]">PX Probability</div>
          <div className="pl-[20px]">PX Tier</div>
          <div className="pl-[20px]">Amount</div>
          <div className="pl-[20px]">Product</div>
          <div className="pl-[20px]">Sales Rep</div>
        </div>
        <div className="grid grid-cols-[275px_275px_130px_120px_80px_90px_100px_150px] text-sm">
          {data.map((row: any) => (
            <Fragment key={row.oppId}>
              <div
                onClick={(event: any) => handleRowClick(event, row)}
                className="mx-auto border-b border-black w-full pl-[20px]"
              >
                {row.oppName}
              </div>
              <div
                onClick={(event: any) => handleRowClick(event, row)}
                className="mx-auto border-b border-black w-full pl-[20px]"
              >
                {row.stage}
              </div>
              <div
                onClick={(event: any) => handleRowClick(event, row)}
                className="mx-auto border-b border-black w-full pl-[20px]"
              >
                {row.repProbability}
              </div>
              <div
                onClick={(event: any) => handleRowClick(event, row)}
                className="mx-auto border-b border-black w-full pl-[20px]"
              >
                {row.pilytixProbability}
              </div>
              <div
                onClick={(event: any) => handleRowClick(event, row)}
                className="mx-auto border-b border-black w-full pl-[20px]"
              >
                {row.pilytixTier}
              </div>
              <div
                onClick={(event: any) => handleRowClick(event, row)}
                className="mx-auto border-b border-black w-full pl-[20px]"
              >
                {row.amount}
              </div>
              <div
                onClick={(event: any) => handleRowClick(event, row)}
                className="mx-auto border-b border-black w-full pl-[20px]"
              >
                {row.product}
              </div>
              <div
                onClick={(event: any) => handleRowClick(event, row)}
                className="mx-auto border-b border-black w-full pl-[20px]"
              >
                {row.salesRepName}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
