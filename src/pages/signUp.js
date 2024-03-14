import { useState } from "react";
import { CreateUser, StepOne, StepTwo, StepThree } from "@/components";
const signUp = () => {
  const [showLoad, setShowLoad] = useState("signUp");
  const [newUserId, setNewUserId] = useState("");

  return (
    <div>
      <div className={`${showLoad == "signUp" ? "block" : "hidden"}`}>
        <CreateUser setShowLoad={setShowLoad} setNewUserId={setNewUserId} />
      </div>
      <div className={`${showLoad == "StepOne" ? "block" : "hidden"}`}>
        <StepOne setShowLoad={setShowLoad} newUserId={newUserId} />
      </div>
      <div className={`${showLoad == "StepTwo" ? "block" : "hidden"}`}>
        <StepTwo setShowLoad={setShowLoad} />
      </div>
      <div className={`${showLoad == "StepThree" ? "block" : "hidden"}`}>
        <StepThree />
      </div>
    </div>
  );
};
export default signUp;
