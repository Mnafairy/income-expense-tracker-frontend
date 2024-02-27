import {
  IncomeCard,
  ExpensesCard,
  GeldCard,
  BarChart,
  DoughnutChart,
  LastRecords,
} from "@/components";
const Dashboard = () => {
  return (
    <div className="h-screen pt-8 flex flex-col gap-8">
      <div className="flex justify-between">
        <GeldCard />
        <IncomeCard price="1,200,000" />
        <ExpensesCard price="-1,200,000" />
      </div>
      <div className="flex justify-between">
        <BarChart />
        <DoughnutChart />
      </div>
      <LastRecords />
    </div>
  );
};
export default Dashboard;
