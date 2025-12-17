import React from "react";

import { Header } from "./Header";
import { Button } from "./Button";
import { ProfData } from "./ProfData";
import { animation } from "../constant/animation.var";
import { motion } from "framer-motion";
import { validatorStepThree } from "@/utils/Validators";

export const Profile = ({
  handlePrevios,
  handleClick,
  handleChange,
  formErrors,
  setFormErrors,
  formValues,
  setStep,
  step,
}) => {
  const handleSubmit = () => {
    const { thirdError, thirdIsValid } = validatorStepThree(formValues);

    setFormErrors(thirdError);
    if (thirdIsValid) {
      handleClick();
    }
  };
  return (
    <motion.div
      animate="active"
      exit="exit"
      initial="enter"
      variants={animation}
      className="flex flex-col gap-25.5 bg-white p-8 rounded-2xl"
    >
      <div className="flex flex-col gap-7">
        <Header />
        <ProfData
          handleChange={handleChange}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          formValues={formValues}
        />
      </div>
      <Button
        handlePrevios={handlePrevios}
        handleClick={handleSubmit}
        step={step + 1}
        setStep={setStep}
      />
    </motion.div>
  );
};
