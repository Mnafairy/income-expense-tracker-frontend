import "@/styles/globals.css";
import Layout from "../components/layout";
export default function App({ Component, pageProps }) {
  return (
    <div className="w-[1440px] px-[120px] m-auto bg-[#F3F4F6]">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
