import { useState } from "react";
import { saveBox } from "../../services/boxService";
import { DEFAULT_COLOR, DEFAULT_COUNTRY } from "./constants";
import { hexToRgb } from "./utils";
import { validateAddBoxForm } from "./formValidation";
import type { IAddBoxFormErrors } from "./add-box.types";

function useAddBoxForm() {
  const [receiverName, setReceiverName] = useState("");
  const [weight, setWeight] = useState("");
  const [boxColor, setBoxColor] = useState(DEFAULT_COLOR);
  const [destinationCountry, setDestinationCountry] = useState(DEFAULT_COUNTRY);
  const [errors, setErrors] = useState<IAddBoxFormErrors>({});

  const handleSave = async () => {
    const validationErrors = validateAddBoxForm({
      receiverName,
      weight,
      boxColor,
      destinationCountry,
    });
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      // If negative weight, default to 0
      if (validationErrors.weight && Number(weight) < 0) {
        setWeight("0");
      }
      return;
    }

    try {
      await saveBox({
        receiverName,
        weight: Number(weight),
        boxColor: hexToRgb(boxColor),
        destinationCountry,
      });
      setReceiverName("");
      setWeight("");
      setBoxColor(DEFAULT_COLOR);
      setDestinationCountry(DEFAULT_COUNTRY);
      setErrors({});
    } catch (error) {
      alert("Failed to save box. Please try again.");
    }
  };

  return {
    receiverName,
    weight,
    boxColor,
    destinationCountry,
    setReceiverName,
    setWeight,
    setBoxColor,
    setDestinationCountry,
    handleSave,
    errors,
  };
}

export default useAddBoxForm;
