export interface ITableColumn<T = unknown> {
  key: keyof T & string;
  header: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

export interface ITableProps<T = unknown> {
  columns: ITableColumn<T>[];
  data: T[];
}
