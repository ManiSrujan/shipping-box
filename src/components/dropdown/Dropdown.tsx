import type { IDropdown } from "./dropdown.types";
import styles from "./dropdown.module.css";

const Dropdown = (props: IDropdown) => {
  const { options, selectedValue, onSelection } = props;

  function handleSelection(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    onSelection?.(value);
  }

  return (
    <select
      onChange={handleSelection}
      value={selectedValue}
      className={styles.select}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
