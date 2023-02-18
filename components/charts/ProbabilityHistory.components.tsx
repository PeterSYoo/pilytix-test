import { IOpportunities } from '../../types/opportunities';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line';

export const ProbabilityHistory = ({
  rowData,
}: {
  rowData: IOpportunities | null;
}) => {
  return (
    <>
      {rowData?.probabilityHistory && (
        <div className="px-[31px] pt-[18px] flex flex-col gap-[9px] w-full">
          <span className="text-sm font-medium">Probably History</span>
          <div className="border rounded-lg flex justify-center items-center h-[350px] w-full">
            {/* Line Chart */}
            <div className="hidden lg:block w-screen h-full pl-[100px] -ml-[100px]">
              <ResponsiveLine
                data={[
                  {
                    id: 'Pilytix Probability',
                    data: rowData.probabilityHistory
                      .slice()
                      .reverse()
                      .map((item) => ({
                        x: `${item.daysAgo}`,
                        y: item.pilytixProb,
                      })),
                  },
                  {
                    id: 'Rep Probability',
                    data: rowData.probabilityHistory
                      .slice()
                      .reverse()
                      .map((item) => ({
                        x: `${item.daysAgo}`,
                        y: item.repProb,
                      })),
                  },
                ]}
                margin={{ top: 50, right: 40, bottom: 65, left: 70 }}
                xScale={{ type: 'point' }}
                yScale={{
                  type: 'linear',
                  min: 0,
                  max: 1,
                  stacked: false,
                  reverse: false,
                }}
                axisTop={null}
                axisRight={null}
                enableGridX={false}
                enableGridY={true}
                colors={['#69A2F9', '#36C2A0']}
                lineWidth={2}
                enablePoints={true}
                pointSize={6}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                  {
                    anchor: 'top-right',
                    direction: 'row',
                    justify: false,
                    translateX: -30,
                    translateY: -30,
                    itemsSpacing: 40,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                      {
                        on: 'hover',
                        style: {
                          itemBackground: 'rgba(0, 0, 0, .03)',
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'Days Ago',
                  legendOffset: 50,
                  legendPosition: 'middle',
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'Probability',
                  legendOffset: -50,
                  legendPosition: 'middle',
                }}
              />
            </div>
            {/*  */}

            {/* Bar Chart */}
            <div className="block lg:hidden w-screen h-full pl-[100px] -ml-[100px]">
              <ResponsiveBar
                data={rowData.probabilityHistory.slice().reverse()}
                keys={['pilytixProb', 'repProb']}
                indexBy="daysAgo"
                margin={{ top: 50, right: 40, bottom: 65, left: 70 }}
                padding={0.2}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={({ id, data }) => {
                  if (id === 'pilytixProb') {
                    return '#69A2F9';
                  } else {
                    return '#36C2A0';
                  }
                }}
                layout="horizontal"
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor="white"
                legends={[
                  {
                    dataFrom: 'keys',
                    anchor: 'top-right',
                    direction: 'row',
                    justify: false,
                    translateX: -30,
                    translateY: -30,
                    itemsSpacing: 40,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                      {
                        on: 'hover',
                        style: {
                          itemBackground: 'rgba(0, 0, 0, .03)',
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 90,
                  legend: 'Probability',
                  legendOffset: 50,
                  legendPosition: 'middle',
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'Days Ago',
                  legendOffset: -50,
                  legendPosition: 'middle',
                }}
                animate={true}
              />
            </div>
            {/*  */}
          </div>
        </div>
      )}
    </>
  );
};
