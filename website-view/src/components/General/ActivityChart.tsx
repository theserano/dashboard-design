import { useEffect, useRef } from "react";
import { Chart, ChartItem } from "chart.js/auto";

const ActivityChart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      const myChart = new Chart(ctx as ChartItem, {
        type: "line",
        data: {
          labels: ["S", "M", "T", "W", "T", "F", "S"],
          datasets: [
            {
              label: "Activity chart",

              pointBorderColor: "#546FFF",
              pointRadius: 7,
              pointBorderWidth: 3,
              borderColor: "#141522",
              data: [5, 9, 3, 1, 6, 5, 2],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              grid: {
                display: false, // This removes the grid lines on the y-axis
              },
            },
          },
        },
      });

      // Cleanup the chart instance on component unmount
      return () => {
        myChart.destroy();
      };
    }
  }, []);

  return <canvas style={{
    height: '90px',
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "1rem"
  }} ref={chartRef} />;
};


export default ActivityChart;
