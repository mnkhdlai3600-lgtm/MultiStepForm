import { useState, useRef } from "react";

import { ContactInfo, PrivateInfo, Profile, Success } from "@/components/steps";
import { AnimatePresence } from "framer-motion";
import { initialValues } from "@/components/constant/initial";

const Main = () => {
  const [step, setStep] = useState(2);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValues);

  const handleClick = () => {
    setStep(step + 1);
  };

  const handlePrevios = () => {
    setStep(step - 1);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormValues((formValues) => ({ ...formValues, [name]: value }));
    setFormErrors((formErrors) => ({ ...formErrors, [name]: "" }));
  };

  const Container = [ContactInfo, PrivateInfo, Profile, Success][step];

  return (
    <div className="bg-gray-100  w-screen h-screen m-auto flex justify-center items-center">
      <AnimatePresence mode="wait">
        <Container
          handleChange={handleChange}
          handlePrevios={handlePrevios}
          handleClick={handleClick}
          Container={Container}
          step={step}
          formValues={formValues}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          setStep={setStep}
          setFormValues={setFormValues}
        />
      </AnimatePresence>
    </div>
  );
};

export default Main;
