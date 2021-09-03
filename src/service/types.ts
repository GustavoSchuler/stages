export type Step = {
  key: string,
  value: string,
};

export type Steps = Step[];

export type Durations = Record<string, number>;

export interface IStepsData {
  steps: Steps,
  durations: Durations,
};
