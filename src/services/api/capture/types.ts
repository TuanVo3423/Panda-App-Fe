export interface CaptureRequest {
  query: string;
}

export interface SolvingProblemRequest {
  input: string;
  steps: Array<string>;
}
