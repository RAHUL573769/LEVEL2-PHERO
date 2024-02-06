export type ErrorResponse = {
  message: string;
  statusCode: number;
  status: string;
  issues: [
    {
      path: string;
      message: string;
    }
  ];
};
