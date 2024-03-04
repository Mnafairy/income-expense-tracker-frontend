import { useState } from "react";
import { CreateUser, StepOne, StepTwo, StepThree } from "@/components";
const signUp = () => {
  const [showLoad, setShowLoad] = useState("signUp");
  return (
    <div>
      <div className={`${showLoad == "signUp" ? "block" : "hidden"}`}>
        <CreateUser showLoad={showLoad} setShowLoad={setShowLoad} />
      </div>
      <div className={`${showLoad == "StepOne" ? "block" : "hidden"}`}>
        <StepOne showLoad={showLoad} setShowLoad={setShowLoad} />
      </div>
      <div className={`${showLoad == "StepTwo" ? "block" : "hidden"}`}>
        <StepTwo showLoad={showLoad} setShowLoad={setShowLoad} />
      </div>
      <div className={`${showLoad == "StepThree" ? "block" : "hidden"}`}>
        <StepThree />
      </div>
    </div>
  );
};
export default signUp;
