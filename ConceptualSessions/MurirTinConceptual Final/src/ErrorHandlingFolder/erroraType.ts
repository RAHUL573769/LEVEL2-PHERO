export type TErrorResponse = {
  statusCode: number;
  status: string;
  message: string;
  issues1: IIssue[];
};
export type IIssue = { path: string; message: string };
