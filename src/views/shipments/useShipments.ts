import { useEffect, useState } from "react";
import type { IBoxData } from "../../services/boxService";
import { fetchBoxes } from "../../services/boxService";
import { COUNTRY_TO_RATE } from "../add-box/constants";

export type IBoxTableRow = IBoxData & { shippingCost: number };

function useShipments() {
  const [data, setData] = useState<IBoxTableRow[]>([]);

  const load = async () => {
    try {
      const boxes = await fetchBoxes();
      const enriched = boxes.map((box) => {
        const rate = COUNTRY_TO_RATE[box.destinationCountry] || 0;
        return {
          ...box,
          shippingCost: box.weight * rate,
        };
      });
      setData(enriched);
    } catch (err) {
      console.error("Failed to fetch boxes", err);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return {
    data,
    refresh: load,
  };
}

export default useShipments;
