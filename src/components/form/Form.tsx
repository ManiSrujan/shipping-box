import { useState } from "react";
import type { IField, IForm } from "./form.types";
import styles from "./form.module.css";

const FormField = (props: IField) => {
  const { label, children, errorMessage } = props;
  return (
    <div className={styles.form_field}>
      <label className={styles.form_label}>{label}</label>
      {children}
      {errorMessage ? (
        <span className={styles.form_error}>{errorMessage}</span>
      ) : null}
    </div>
  );
};

const Form = (props: IForm) => {
  const { onSubmit, children } = props;
  const [isSaving, setIsSaving] = useState(false);

  async function handleSubmit(e: React.FormEvent<Element>) {
    e.preventDefault();
    setIsSaving(true);
    await onSubmit(e);
    setIsSaving(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      {children}
      <input
        type="submit"
        className={styles.form_submit}
        disabled={isSaving}
        value={isSaving ? "Saving..." : "Save"}
      />
    </form>
  );
};

export default Form;
export { FormField };
