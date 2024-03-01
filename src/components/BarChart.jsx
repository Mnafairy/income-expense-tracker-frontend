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
  labels: labels,
  datasets: [
    {
      label: "Income",
      data: labels.map(() => faker.number.int({ min: 0, max: 10000000 })),
      backgroundColor: "#84CC16",
      barThickness: 15,
      borderRadius: 20,
      gap: 40,
    },
    {
      label: "Expense",
      data: labels.map(() => faker.number.int({ min: 0, max: 10000000 })),
      backgroundColor: "#F97316",
      barThickness: 15,
      borderRadius: 20,
      gap: 40,
    },
  ],
};

export const BarChart = () => {
  return (
    <div className="w-[590px] h-[285px] bg-white rounded-xl">
      <div className="flex justify-between py-4 px-6 border-b border-[#E2E8F0]">
        <div className="font-semibold text-[#0F172A]">Income-Expense</div>
      </div>
      <div className="w-[588px] h-[226px] py-2 px-6">
        <div className="w-full h-full">
          <Bar data={data} />
        </div>
      </div>
    </div>
  );
};
