export type TErrorResponse = {
  message: string;

  statusCode: number;
  status: string;
  issues: TErrorIssues[];
};

export type TErrorIssues = {
  path: string;
  message: string;
};
