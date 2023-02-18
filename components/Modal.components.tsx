import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveBullet } from '@nivo/bullet';
import { Line, ResponsiveLine } from '@nivo/line';
import { Radar, ResponsiveRadar } from '@nivo/radar';
import Image from 'next/image';
import { useState } from 'react';

export const Modal = ({
  onClose,
  rowData,
  handleNextItem,
  handlePreviousItem,
}: {
  onClose: () => void;
  rowData: any;
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
                <span>{rowData.oppName}</span>
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
            <div className="flex flex-col w-full overflow-auto scrollbar-hide gap-[30px]">
              {/* Probability History */}
              {rowData.probabilityHistory && (
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
                              .map((item: any) => ({
                                x: `${item.daysAgo}`,
                                y: item.pilytixProb,
                              })),
                          },
                          {
                            id: 'Rep Probability',
                            data: rowData.probabilityHistory
                              .slice()
                              .reverse()
                              .map((item: any) => ({
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
              {/*  */}
              {/* PILYTIX Factors Increasing Win */}
              {rowData.pilytixFactorsIncreasingWin && (
                <div className="px-[31px] pt-[18px] flex flex-col gap-[9px] w-full h-full ">
                  <span className="text-sm font-medium">
                    PILYTIX Factors Increasing Win
                  </span>
                  <div className="border rounded-lg flex justify-center items-center h-[350px] w-full">
                    {/* Radar Chart */}
                    <div className="hidden lg:block w-screen h-full pl-[100px] -ml-[100px]">
                      <ResponsiveRadar
                        data={rowData.pilytixFactorsIncreasingWin.map(
                          (factor: any) => ({
                            key: factor.name,
                            value: factor.weight.value,
                            color: 'blue',
                          })
                        )}
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
                        data={rowData.pilytixFactorsIncreasingWin.map(
                          (factor: any) => {
                            return {
                              name: factor.name,
                              value: factor.weight.value,
                            };
                          }
                        )}
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
              {/*  */}

              {/* PILYTIX Factors Decreasing Win */}
              {rowData.pilytixFactorsDecreasingWin && (
                <div className="px-[31px] pt-[18px] flex flex-col gap-[9px] w-full h-full pb-[100px]">
                  <span className="text-sm font-medium">
                    PILYTIX Factors Decreasing Win
                  </span>
                  <div className="border rounded-lg flex justify-center items-center h-[350px] w-full">
                    {/* Bar Chart */}
                    <div className="w-screen h-full pl-[100px] -ml-[100px]">
                      <ResponsiveBar
                        data={rowData.pilytixFactorsDecreasingWin.map(
                          (factor: any) => {
                            return {
                              name: factor.name,
                              value: factor.weight.value,
                            };
                          }
                        )}
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
