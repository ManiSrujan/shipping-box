interface IOption {
  label: string;
  value: string;
}

interface IDropdown extends React.HTMLAttributes<HTMLSelectElement> {
  selectedValue: string;
  options: IOption[];
  onSelection?: (value: string) => void;
}

export type { IOption, IDropdown };
