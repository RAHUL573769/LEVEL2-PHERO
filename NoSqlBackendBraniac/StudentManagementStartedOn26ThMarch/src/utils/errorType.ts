export type TErrorResponse = {
  statusCode: number;
  status: string;
  message: string;
  issues: [
    {
      path: string;
      message: string;
    }
  ];
};
