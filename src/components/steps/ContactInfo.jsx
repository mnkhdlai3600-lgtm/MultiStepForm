import React from "react";

import { Header } from "./Header";
import { Button } from "./Button";
import { ContactInput } from "./ContactInput";
import { animation } from "../constant/animation.var";
import { motion } from "framer-motion";
import { validatorStepOne } from "@/utils/Validators";

export const ContactInfo = ({
  handlePrevios,
  handleClick,
  setStep,
  step,
  handleChange,
  formErrors,
  setFormErrors,
  formValues,
}) => {
  const handleSubmit = () => {
    const { errors, isValid } = validatorStepOne(formValues);

    setFormErrors(errors);
    if (isValid) {
      handleClick();
    }
  };

  return (
    <motion.div
      animate="active"
      exit="exit"
      initial="enter"
      variants={animation}
      className="flex flex-col gap-40.5 bg-white p-8 rounded-2xl"
    >
      <div className="flex flex-col gap-7">
        <Header />
        <ContactInput
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
