import type { ITableColumn } from "../../components/table/table.types";
import type { IBoxData } from "../../services/boxService";

export type IBoxTableRow = IBoxData & { shippingCost: number };

export const columns: ITableColumn<IBoxTableRow>[] = [
  { key: "receiverName", header: "Receiver Name" },
  { key: "weight", header: "Weight (kg)" },
  {
    key: "boxColor",
    header: "Box Colour",
    render: (value) => (
      <span
        style={{
          display: "inline-block",
          width: 24,
          height: 24,
          borderRadius: 4,
          background: `rgb${value}`,
        }}
        title={value as string}
      />
    ),
  },
  { key: "destinationCountry", header: "Destination Country" },
  {
    key: "shippingCost",
    header: "Shipping Cost (INR)",
    render: (value) => `₹${(value as number).toFixed(2)}`,
  },
];
