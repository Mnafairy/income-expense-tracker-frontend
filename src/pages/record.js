import Layout from "@/components/layout";
const Record = () => {
  return (
    <div className="bg-[#F3F4F6] h-screen">
      <div className="w-[1440px] px-[120px] m-auto">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Record;
Record.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
