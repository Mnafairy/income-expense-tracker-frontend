import Link from "next/link";
import { useRouter } from "next/router";
import { GeldIcon, Geldtxt } from "@/components/icons/icon";
import { useState } from "react";
const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch("http://localhost:4000/login", options);
    const FETCHED_JSON = await FETCHED_DATA.json();
  };

  return (
    <div className="w-screen h-screen flex">
      <div className=" w-1/2 h-full relative flex justify-center items-center">
        <div className="w-96 flex flex-col items-center gap-10 relative left-[50px] ">
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
          <form onSubmit={handleLogin} className="flex-col gap-4 flex">
            <input
              className="w-96 h-12 p-4 bg-gray-100 rounded-lg border border-gray-300"
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-96 h-12 p-4 bg-gray-100 rounded-lg border border-gray-300"
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <Link href={"/dashboard"}> */}
            <button
              type="submit"
              className="w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex"
            >
              <div className="text-white text-xl leading-7">Log in</div>
            </button>
            {/* </Link> */}
          </form>
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
