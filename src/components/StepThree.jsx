import { GeldIcon, Geldtxt, CheckIcon } from "./icons/icon";
import Link from "next/link";
export const StepThree = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <div className="flex flex-col items-center gap-12 mt-10 mb-[140px]">
        <div className="flex items-center gap-[11px] justify-center">
          <GeldIcon width={"27.7"} height={"27.4"} />
          <Geldtxt width={"56"} height={"20"} />
        </div>
        <ul className="steps  w-[300px]">
          <li className="step step-primary">Currency</li>
          <li className="step step-primary">Balance</li>
          <li className="step step-primary">Finish</li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-8 w-[384px] h-[308px]">
        <div className="flex flex-col items-center gap-3 ">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col gap-4 items-center">
              <div className="w-12 h-12 p-2 bg-[#0166FF] rounded-full flex justify-center items-center">
                <CheckIcon />
              </div>
              <p className="text-2xl font-semibold text-[#0F172A]">
                Good Job!{" "}
              </p>
            </div>
            <div className="text-center text-[#475569]">
              Your very first account has been created. Now continue to
              dashboard and start tracking
            </div>
          </div>
        </div>
        <Link href={"/dashboard"}>
          <button className="flex w-[384px] h-12 justify-center items-center rounded-[20px] text-white bg-primary">
            Go to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};
