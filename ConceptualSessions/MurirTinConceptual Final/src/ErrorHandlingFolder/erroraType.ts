export type TErrorResponse = {
  statusCode: number;
  status: string;
  message: string;
  issues: IIssue[];
};
export type IIssue = { path: string; message: string };
