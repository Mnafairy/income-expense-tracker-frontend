import { GeldIcon, Geldtxt, DollarIcon } from "./icons/icon";
export const StepOne = ({ setShowLoad, newUserId }) => {
  // async function ID ashiglaad DB update hiine

  async function handleSumbit(e) {
    e.preventDefault();
    
  }
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <div className="flex flex-col items-center gap-12 mt-10 mb-[140px]">
        <div className="flex items-center gap-[11px] justify-center">
          <GeldIcon width={"27.7"} height={"27.4"} />
          <Geldtxt width={"56"} height={"20"} />
        </div>
        <ul className="steps w-[300px] ">
          <li className="step step-primary">Currency</li>
          <li className="step ">Balance</li>
          <li className="step ">Finish</li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-8 w-[384px] h-[308px]">
        <div className="flex flex-col items-center gap-3 ">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col gap-4 items-center">
              <div className="w-12 h-12 p-2 bg-[#0166FF] rounded-full flex justify-center items-center">
                <DollarIcon />
              </div>
              <p className="text-2xl font-semibold text-[#0F172A]">
                Select base currency
              </p>
            </div>
            <select className="text-[#1F2937] font-semibold select select-bordered select-lg w-[384px] bg-gray-100 border ">
              <option>MNT-Mongolian Tugrik</option>
              <option>UKT-Ukraine UAH</option>
              <option>KR-Korea KRW</option>
              <option>JP-Japanese YEN</option>
            </select>
          </div>
          <p className="text-xs text-[#475569]">
            Your base currency should be the one you use most often. All
            transaction in other currencies will be calculated based on this one{" "}
          </p>
        </div>

        <button
          onClick={() => {
            setShowLoad("StepTwo");
          }}
          className="flex w-[384px] h-12 justify-center items-center rounded-[20px]  bg-primary"
        >
          <p className="text-[#FFF] text-xl">Confirm</p>
        </button>
      </div>
    </div>
  );
};
