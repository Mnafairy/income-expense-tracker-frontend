import { IncomeCard, ExpensesCard, GeldCard, IncomeChart } from "@/components";
const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col gap-10">
      <div className="flex justify-between">
        <GeldCard />
        <IncomeCard price="1,200,000" />
        <ExpensesCard price="-1,200,000" />
      </div>
      <div className="flex justify-between">
        <IncomeChart />
      </div>
    </div>
  );
};
export default Dashboard;
