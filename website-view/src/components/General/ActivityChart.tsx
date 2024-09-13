import { useEffect, useRef } from "react";
import { Chart, ChartItem } from "chart.js/auto";

const ActivityChart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");

    if (ctx) {
      // Initialize chart
      chartInstanceRef.current = new Chart(ctx as ChartItem, {
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
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              grid: {
                display: false,
              },
            },
          },
        },
      });

      // Function to handle resizing
      const handleResize = () => {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.resize();
        }
      };

      // Add resize event listener
      window.addEventListener("resize", handleResize);

      // Cleanup on component unmount
      return () => {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <canvas
      style={{
        height: "150px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        padding: "1rem",
      }}
      ref={chartRef}
    />
  );
};

export default ActivityChart;
