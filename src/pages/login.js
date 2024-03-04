import Link from "next/link";
import { GeldIcon, Geldtxt } from "@/components/icons/icon";
const Login = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className=" w-1/2 h-full relative">
        <div className="flex flex-col items-center gap-10 relative left-[150px] top-80 ">
          <div className="flex items-center gap-[10px] p-[5.5px]">
            <GeldIcon width={"23.8"} height={"23.5"} />
            <Geldtxt width={"48"} height={"16.7"} />
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-2xl font-semibold text-[#0F172A]">
              Welcome Back
            </div>
            <div className="text-[#334155]">
              Welcome back, Please enter your details
            </div>
          </div>
          <div className="flex-col gap-4 flex">
            <input
              className="w-96 h-12 p-4 bg-gray-100 rounded-lg border border-gray-300"
              placeholder="Email"
            />
            <input
              className="w-96 h-12 p-4 bg-gray-100 rounded-lg border border-gray-300"
              placeholder="Password"
            />
            <Link href={"/dashboard"}>
              <div className="w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex">
                <div className="text-white text-xl leading-7">Log in</div>
              </div>
            </Link>
          </div>
          <div className="text-[#0F172A]">
            Don't have account?{" "}
            <Link href={"/signUp"}>
              <button className="text-primary pl-3">Sign up</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-primary w-1/2 h-full"></div>
    </div>
  );
};
export default Login;
