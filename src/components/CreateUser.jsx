import Link from "next/link";
import { GeldIcon, Geldtxt } from "@/components/icons/icon";
import { useState } from "react";
export const CreateUser = ({ setShowLoad }) => {
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
  };
  //  async function handleSubmit(e) {
  //     const data = {
  //       username: e.target.username.value,
  //       age: e.target.age.value,
  //       id: newid,
  //     };
  //     const options = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     };
  //     const FETCHED_DATA = await fetch(BE_URL, options);
  //     const FETCHED_JSON = await FETCHED_DATA.json();
  //     setUser(FETCHED_JSON.users);
  //     // setUse(FETCHED_JSON.users);
  //   }
  return (
    <div className="w-screen h-screen flex">
      <div className=" w-1/2 h-full relative flex justify-center items-center">
        <div className="w-96 flex flex-col items-center gap-10 relative left-[50px]">
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
          <form
            onSubmit={() => submitHandler()}
            className="[&_input]:w-96 [&_input]:h-12 [&_input]:px-4 [&_input]:bg-gray-100 [&_input]:rounded-lg [&_input]:border [&_input]:border-gray-300 flex flex-col gap-4"
          >
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <input
              type="password"
              name="re-ppassword"
              placeholder="Re-password"
              required
            />
            <button
              className="text-white text-xl leading-7 w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex"
              onClick={() => {
                setShowLoad("StepOne");
              }}
            >
              Sign up
            </button>
          </form>
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
