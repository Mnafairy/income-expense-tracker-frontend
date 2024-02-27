import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const BarChart = () => {
  return (
    <div className="w-[590px] h-[285px] bg-white rounded-xl">
      <div className="flex justify-between py-4 px-6 border-b border-[#E2E8F0]">
        <div className="font-semibold text-[#0F172A]">Income-Expense</div>
      </div>
      <div className="py-8 px-6">
        <div className="w-[540px] h-[200px]">
          <Bar data={data} />
        </div>
      </div>
    </div>
  );
};
