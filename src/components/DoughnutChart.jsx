import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

const data = {
  labels: ["2021", "2022", "2023"],
  datasets: [
    {
      label: "Customer",
      data: [3, 19, 12],
      backgroundColor: [
        "rgb(247, 67, 166)",
        "rgba(125, 70, 227)",
        "rgb(219, 216, 206)",
      ],
      borderColor: [
        "rgb(247, 67, 166)",
        "rgb(125, 70, 227)",
        "rgb(219, 216, 206)",
      ],
    },
  ],
};
const options = {
  cutout: 115,
  hoverOffset: 30,
  radius: 115,
};

const DoughnutChartData = () => {
  return (
    <div className="bg-slate-50 rounded-full relative">
      <Doughnut data={data} options={options} />
      <div className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-center">
        <h1 className="text-3xl font-extrabold">65%</h1>
        <p className="font-semibold">Total New Customers</p>
      </div>
    </div>
  );
};

export default DoughnutChartData;
