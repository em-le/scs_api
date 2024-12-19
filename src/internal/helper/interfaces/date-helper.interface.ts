export interface IHelperDateOptionsCreate {
  date?: string | number | Date;
  time?: string;
}

export interface IHelperDateOptionsForward {
  fromDate?: Date;
}

export type IHelperDateOptionsBackward = IHelperDateOptionsForward;
