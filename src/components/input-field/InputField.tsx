import type { IInputField } from "./input-field.types";
import styles from "./input-field.module.css";

const InputField = (props: IInputField) => {
  const { type, placeholder, onChange, value } = props;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    if (onChange) {
      onChange(newValue);
    }
  }

  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={styles.input}
    />
  );
};

export default InputField;
