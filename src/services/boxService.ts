// Service to save box data (mock, replace with real API call as needed)

export interface IBoxData {
  receiverName: string;
  weight: number;
  boxColor: string; // RGB format: (r, g, b)
  destinationCountry: string;
}

export async function saveBox(data: IBoxData): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Save to localStorage
      const existing = localStorage.getItem("boxes");
      let boxes: IBoxData[] = [];
      if (existing) {
        try {
          boxes = JSON.parse(existing);
        } catch {
          boxes = [];
        }
      }
      boxes.push(data);
      localStorage.setItem("boxes", JSON.stringify(boxes));
      resolve();
    }, 500);
  });
}

export async function fetchBoxes(): Promise<IBoxData[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = localStorage.getItem("boxes");
      if (!data) return resolve([]);
      try {
        resolve(JSON.parse(data));
      } catch {
        resolve([]);
      }
    }, 200);
  });
}
