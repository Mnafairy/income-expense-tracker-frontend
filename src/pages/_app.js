import "@/styles/globals.css";
import Layout from "../components/layout";
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <div className="bg-[#F3F4F6]">
        <div className="w-[1440px] px-[120px] m-auto">
          <Component {...pageProps} />
        </div>
      </div>
    </Layout>
  );
}
