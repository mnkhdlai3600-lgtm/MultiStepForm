import { isEmpty } from "./validationUtils";

export const validatorStepOne = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.firstName)) {
    errors.firstName = "Please confirm your first name";
  }
  if (isEmpty(formValues.lastName)) {
    errors.lastName = "Please confirm your last name";
  }
  if (isEmpty(formValues.userName)) {
    errors.userName = "Please confirm your user name";
  }

  const isValid = Object.keys(errors).length === 0;

  return { errors, isValid };
};
export const validatorStepTwo = (formValues) => {
  const secondError = {};

  if (isEmpty(formValues.email)) {
    secondError.email = "Please confirm your email";
  }
  if (isEmpty(formValues.phoneNumber)) {
    secondError.phoneNumber = "Please confirm your phoneNumber";
  }
  if (isEmpty(formValues.password)) {
    secondError.password = "Please confirm your password";
  }
  if (isEmpty(formValues.comfirmPassword)) {
    secondError.comfirmPassword = "Please confirm your comfirmPassword";
  }

  const secondIsValid = Object.keys(secondError).length === 0;

  return { secondError, secondIsValid };
};

export const validatorStepThree = (formValues) => {
  const thirdError = {};

  if (isEmpty(formValues.date)) {
    thirdError.date = "Please enter your birthday";
  }
  if (isEmpty(formValues.profileImage)) {
    thirdError.profileImage = "Please insert your profile picture";
  }

  const thirdIsValid = Object.keys(thirdError).length === 0;

  return { thirdError, thirdIsValid };
};
