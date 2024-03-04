import Layout from "@/components/layout";
import { Loading } from "@/components";
export default function Home() {
  return (
    <div>
      <Loading />
    </div>
  );
}
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
