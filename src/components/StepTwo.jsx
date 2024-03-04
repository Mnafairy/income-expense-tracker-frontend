import { GeldIcon, Geldtxt, CoinsIcon } from "./icons/icon";
export const StepTwo = ({ setShowLoad }) => {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <div className="flex flex-col items-center gap-12 mt-10 mb-[140px]">
        <div className="flex items-center gap-[11px] justify-center">
          <GeldIcon width={"27.7"} height={"27.4"} />
          <Geldtxt width={"56"} height={"20"} />
        </div>
        <ul className="steps  w-[300px]">
          <li className="step step-primary step-before-[#E5E7EB]">Currency</li>
          <li className="step step-primary">Balance</li>
          <li className="step ">Finish</li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-8 w-[384px] h-[308px]">
        <div className="flex flex-col gap-3 ">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col gap-4 items-center">
              <div className="w-12 h-12 p-2 bg-[#0166FF] rounded-full flex justify-center items-center">
                <CoinsIcon />
              </div>
              <p className="text-2xl font-semibold text-[#0F172A]">
                Set up your cash Balance
              </p>
            </div>
            <div className="rounded-2">
              <input
                className="w-96 h-12 px-4 bg-gray-100 rounded-lg border border-gray-300"
                placeholder="Email"
              />
            </div>
          </div>
          <p className="text-xs text-[#475569]">
            How much cash do you have in your wallet?
          </p>
        </div>

        <button
          onClick={() => {
            setShowLoad("StepThree");
          }}
          className="flex w-[384px] h-12 justify-center items-center rounded-[20px]  bg-primary"
        >
          <p className="text-[#FFF] text-xl">Confirm</p>
        </button>
      </div>
    </div>
  );
};
