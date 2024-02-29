import Link from "next/link";
import { GeldIcon, Geldtxt } from "@/components/icons/icon";
const signUp = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className=" w-1/2 h-full relative">
        <div className="flex flex-col items-center gap-10 relative left-[280px] top-80 ">
          <div className="flex items-center gap-[10px] p-[5.5px]">
            <GeldIcon />
            <Geldtxt />
            {/* <div className="text-2xl font-semibold ">Geld</div> */}
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-2xl font-semibold text-[#0F172A]">
              Create Geld Account
            </div>
            <div className="text-[#334155]">
              Sign up below to create your Wallet account
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <input
              className="w-96 h-12 px-4 bg-gray-100 rounded-lg border border-gray-300"
              placeholder="Name"
            />
            <input
              className="w-96 h-12 px-4 bg-gray-100 rounded-lg border border-gray-300"
              placeholder="Email"
            />
            <input
              className="w-96 h-12 px-4 bg-gray-100  rounded-lg border border-gray-300"
              placeholder="Password"
            />
            <input
              className="w-96 h-12 px-4 bg-gray-100 rounded-lg border border-gray-300"
              placeholder=" Re-password"
            />
            <div className="w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex">
              <div className="text-white text-xl leading-7">Sign up</div>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-[352px] "></div>

          <div className="text-[#0F172A]">
            Already have account?
            <Link href={"/login"}>
              <button className="text-primary pl-3">Log in</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-primary w-1/2 h-full"></div>
    </div>
  );
};
export default signUp;
