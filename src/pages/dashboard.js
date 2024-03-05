import Layout from "@/components/layout";
import {
  IncomeCard,
  ExpensesCard,
  GeldCard,
  BarChart,
  DoughnutChart,
  LastRecords,
} from "@/components";
import { HomeIcon } from "@/components/icons/icon";
const Dashboard = () => {
  return (
    <div className="bg-[#F3F4F6] h-screen">
      <div className="w-[1440px] px-[120px] m-auto">
        <div className="pt-8 flex flex-col gap-8">
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
        <div className="bg-white rounded-xl mb-10">
          <div className="py-4 px-6 text-slate-900 font-semibold border-b border-slate-200 ">
            Last records
          </div>
          <div className="px-6">
            <div className="py-5 flex justify-between border-b border-base-200">
              <div className="flex gap-4 ">
                <div className="w-12 h-12 p-2 bg-[#0166FF] rounded-full flex justify-center items-center">
                  <HomeIcon />
                </div>
                <div>
                  <div>Lending & Renting</div>
                  <div className="text-xs text-gray-500">3 hours ago</div>
                </div>
              </div>
              <div className="text-lime-500 font-semibold">- 1,000₮</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
