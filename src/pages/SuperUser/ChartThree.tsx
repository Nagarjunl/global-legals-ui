import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';

interface ChartThreeState {
  series;
}

const ChartThree = ({chartData}) => {

  const chartArray = chartData.map(chart => chart.totalCount);
  const chartMonth = chartData.map(chart => chart.month);
  
  const options: ApexOptions = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: chartMonth,
    },
  };

  const [state, setState] = useState<ChartThreeState>({
    series: [{
      name: "Views",
      data: chartArray
    }],
  });

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default  sm:px-7.5 xl:col-span-12">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Visitors Analytics
          </h5>
        </div>
      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto">
          <ReactApexChart
            options={options}
            series={state.series}
            type="line"
            height={350} 
          />
        </div>
      </div>

    </div>
  );
};

export default ChartThree;
