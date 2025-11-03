interface IInputField {
  type: "text" | "number" | "color";
  placeholder?: string;
  value: string;
  onChange?: (value: string) => void;
}

export type { IInputField };
