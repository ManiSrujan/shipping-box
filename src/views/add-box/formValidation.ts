import type { IAddBoxFormValues, IAddBoxFormErrors } from "./add-box.types";

export function validateAddBoxForm(
  values: IAddBoxFormValues,
): IAddBoxFormErrors {
  const errors: IAddBoxFormErrors = {};
  if (!values.receiverName.trim()) {
    errors.receiverName = "Receiver name is required.";
  }
  if (values.weight === "" || isNaN(Number(values.weight))) {
    errors.weight = "Weight is required.";
  } else if (Number(values.weight) < 0) {
    errors.weight = "Negative values are not permitted. Defaulted to 0.";
  }
  if (!values.boxColor) {
    errors.boxColor = "Box color is required.";
  }
  if (!values.destinationCountry) {
    errors.destinationCountry = "Destination country is required.";
  }
  return errors;
}
