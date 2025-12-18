import React from "react";
import { Header } from "./Header";
import { Button } from "./Button";
import { PrivateInput } from "./PrivateInput";
import { animation } from "../constant/animation";
import { motion } from "framer-motion";
import { validatorStepTwo } from "@/utils/Validators";

export const PrivateInfo = ({
  handlePrevios,
  handleClick,
  handleChange,
  formErrors,
  formValues,
  setFormErrors,
  setStep,
  step,
}) => {
  const handleSubmitTwo = () => {
    const { secondError, secondIsValid } = validatorStepTwo(formValues);
    console.log(secondError);
    setFormErrors(secondError);
    if (secondIsValid) {
      handleClick();
    }
  };
  return (
    <motion.div
      key="b"
      animate="active"
      exit="exit"
      initial="enter"
      variants={animation}
      className="flex flex-col gap-20.5 bg-white p-8 rounded-2xl"
    >
      <div className="flex flex-col gap-7">
        <Header />
        <PrivateInput handleChange={handleChange} formErrors={formErrors} />
      </div>

      <Button
        handlePrevios={handlePrevios}
        handleClick={handleSubmitTwo}
        step={step + 1}
        setStep={setStep}
      />
    </motion.div>
  );
};
