import InputField from "../../components/input-field";
import Dropdown from "../../components/dropdown";
import useAddBoxForm from "./useAddBoxForm";
import { COUNTRY_OPTIONS } from "./constants";
import { hexToRgb } from "./utils";
import Form, { FormField } from "../../components/form/Form";
import styles from "./add-box.module.css";

const Addbox = () => {
  const {
    boxColor,
    errors,
    receiverName,
    weight,
    destinationCountry,
    setReceiverName,
    setWeight,
    setBoxColor,
    setDestinationCountry,
    handleSave,
  } = useAddBoxForm();

  return (
    <div className={styles.addbox_container}>
      <Form onSubmit={handleSave}>
        <h2 className={styles.addbox_title}>Add Box</h2>
        <div className={styles.addbox_form_fields}>
          <FormField label="Receiver Name" errorMessage={errors.receiverName}>
            <InputField
              type="text"
              placeholder="Enter receiver name"
              onChange={setReceiverName}
              value={receiverName}
            />
          </FormField>
          <FormField label="Weight (kg)" errorMessage={errors.weight}>
            <InputField
              type="number"
              placeholder="Enter weight in kg"
              onChange={setWeight}
              value={weight}
            />
          </FormField>
          <FormField label="Box Colour" errorMessage={errors.boxColor}>
            <InputField type="color" onChange={setBoxColor} value={boxColor} />
            <span>{hexToRgb(boxColor)}</span>
          </FormField>
          <FormField
            label="Destination Country"
            errorMessage={errors.destinationCountry}
          >
            <Dropdown
              selectedValue={destinationCountry}
              options={COUNTRY_OPTIONS}
              onSelection={setDestinationCountry}
            />
          </FormField>
        </div>
      </Form>
    </div>
  );
};

export default Addbox;
