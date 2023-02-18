import { IOpportunities } from '../../types/opportunities';
import { ResponsiveBar } from '@nivo/bar';

export const FactorsDecreasingWin = ({
  rowData,
}: {
  rowData: IOpportunities | null;
}) => {
  return (
    <>
      {rowData?.pilytixFactorsDecreasingWin && (
        <div className="px-[31px] pt-[18px] flex flex-col gap-[9px] w-full h-full pb-[100px]">
          <span className="text-sm font-medium">
            PILYTIX Factors Decreasing Win
          </span>
          <div className="border rounded-lg flex justify-center items-center h-[350px] w-full">
            {/* Bar Chart */}
            <div className="w-screen h-full pl-[100px] -ml-[100px]">
              <ResponsiveBar
                data={rowData.pilytixFactorsDecreasingWin.map((factor) => {
                  return {
                    name: factor.name,
                    value: factor.weight.value,
                  };
                })}
                keys={['value']}
                indexBy="name"
                margin={{ top: 50, right: 30, bottom: 130, left: 65 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={() => '#36C2A0'}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 90,
                  legend: '',
                  legendPosition: 'middle',
                  legendOffset: 32,
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'Weight',
                  legendPosition: 'middle',
                  legendOffset: -50,
                }}
                labelTextColor="white"
              />
            </div>
            {/*  */}
          </div>
        </div>
      )}
    </>
  );
};
