import { IOpportunities } from '../../types/opportunities';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveRadar } from '@nivo/radar';

export const FactorsIncreasingWin = ({
  rowData,
}: {
  rowData: IOpportunities | null;
}) => {
  return (
    <>
      {rowData?.pilytixFactorsIncreasingWin && (
        <div className="px-[31px] pt-[18px] flex flex-col gap-[9px] w-full h-full ">
          <span className="text-sm font-medium">
            PILYTIX Factors Increasing Win
          </span>
          <div className="border rounded-lg flex justify-center items-center h-[350px] w-full">
            {/* Radar Chart */}
            <div className="hidden lg:block w-screen h-full pl-[100px] -ml-[100px]">
              <ResponsiveRadar
                data={rowData.pilytixFactorsIncreasingWin.map((factor) => ({
                  key: factor.name,
                  value: factor.weight.value,
                  color: 'blue',
                }))}
                keys={['value']}
                margin={{ top: 65, right: 50, bottom: 65, left: 50 }}
                indexBy="key"
                maxValue="auto"
                curve="linearClosed"
                borderWidth={2}
                borderColor={() => '#69A2F9'}
                gridLevels={5}
                gridShape="circular"
                gridLabelOffset={36}
                enableDots={true}
                dotSize={10}
                dotColor={() => '#69A2F9'}
                dotBorderWidth={2}
                dotBorderColor={() => '#69A2F9'}
                enableDotLabel={true}
                dotLabel="value"
                dotLabelYOffset={-12}
                colors={() => '#69A2F9'}
                fillOpacity={0.25}
                blendMode="multiply"
                animate={true}
              />
            </div>
            {/*  */}

            {/* Bar Chart */}
            <div className="block lg:hidden w-screen h-full pl-[100px] -ml-[100px]">
              <ResponsiveBar
                data={rowData.pilytixFactorsIncreasingWin.map((factor) => {
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
                colors={() => '#69A4F9'}
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
