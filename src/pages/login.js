import Link from "next/link";
import { useRouter } from "next/router";
import { GeldIcon, Geldtxt } from "@/components/icons/icon";
const Login = () => {
  const router = useRouter();
  const handleSubmit = async () => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/users");
    const users = await res.json();
    users.map((val) => {
      return val.email === e.target.email.value &&
        val.password === e.target.password.value
        ? router.push("/dashboard")
        : alert(error);
    });
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
          <form onSubmit={handleSubmit} className="flex-col gap-4 flex">
            <input
              className="w-96 h-12 p-4 bg-gray-100 rounded-lg border border-gray-300"
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              className="w-96 h-12 p-4 bg-gray-100 rounded-lg border border-gray-300"
              type="password"
              placeholder="Password"
              name="password"
            />
            {/* <Link href={"/dashboard"}> */}
            <button className="w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex">
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
