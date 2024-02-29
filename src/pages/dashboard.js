import Layout from "@/components/layout";
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
    <div className="bg-[#F3F4F6]">
      <div className="w-[1440px] px-[120px] m-auto">
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
      </div>
    </div>
  );
};

export default Dashboard;
Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
