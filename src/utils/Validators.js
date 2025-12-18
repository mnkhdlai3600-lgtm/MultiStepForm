import { isEmpty } from "./validationUtils";
import { isMail } from "./validationUtils";
import { isPhoneNum } from "./validationUtils";

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
  const checkSpecial = "!@#$%^&*()_+-=[]{}|;:',.<>/?";

  if (!isEmpty(formValues.email)) {
    if (!isMail(formValues.email)) {
      secondError.email = "jinehen mail";
    }
  } else {
    if (isEmpty(formValues.email)) {
      secondError.email = "Hooson bj bolohgui";
    }
  }

  if (!isEmpty(formValues.phoneNumber)) {
    if (!isPhoneNum(formValues.phoneNumber)) {
      secondError.phoneNumber = "8 orontoi too bh esto";
    }
  } else {
    secondError.phoneNumber = "hooson bj bolohgui";
  }

  if (isEmpty(formValues.password) || isEmpty(formValues.comfirmPassword)) {
    secondError.password = "Please  your password";
    console.log(secondError);
  } else if (formValues.password.length < 8) {
    secondError.password = "Password 8aaas ih orontoi baina baina";
  } else if (
    !checkSpecial.split("").some((char) => formValues.password.includes(char))
  ) {
    secondError.password = "Tusgai Tesmdegt";
  } else if (formValues.password !== formValues.comfirmPassword) {
    secondError.password = "Password taarahgui baina";
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
