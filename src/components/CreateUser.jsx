import Link from "next/link";
import { GeldIcon, Geldtxt } from "@/components/icons/icon";
export const CreateUser = ({ setShowLoad }) => {
  return (
    <div className="w-screen h-screen flex">
      <div className=" w-1/2 h-full relative flex justify-center items-center">
        <div className="w-96 flex flex-col items-center gap-10 relative left-[150px]">
          <div className="flex items-center gap-[10px] p-[5.5px]">
            <GeldIcon width={"23.8"} height={"23.5"} />
            <Geldtxt width={"48"} height={"16.7"} />
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
            <button
              className="text-white text-xl leading-7 w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex"
              onClick={() => {
                setShowLoad("StepOne");
              }}
            >
              Sign up
            </button>
          </div>
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
