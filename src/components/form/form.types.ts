interface IField {
  label: string;
  children: React.ReactNode;
  errorMessage?: string;
}

interface IForm {
  onSubmit: (e: React.FormEvent<Element>) => Promise<void>;
  children: React.ReactNode;
}

export type { IField, IForm };
