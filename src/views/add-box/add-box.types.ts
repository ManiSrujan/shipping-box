export interface IAddBoxFormValues {
  receiverName: string;
  weight: string;
  boxColor: string;
  destinationCountry: string;
}

export interface IAddBoxFormErrors {
  receiverName?: string;
  weight?: string;
  boxColor?: string;
  destinationCountry?: string;
}
