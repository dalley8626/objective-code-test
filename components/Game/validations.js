export const GameFormValidations = (values) => {
  const errors = {};
  if (!values.userInput) {
    errors.userInput = "Required";
  } else if (values.userInput.length > 100) {
    errors.userInput = "Maximum is 100 characters";
  } else if (values.userInput.split(",").length > 6) {
    errors.userInput = "Maximum of 5 comma separation";
  }
  return errors;
};
