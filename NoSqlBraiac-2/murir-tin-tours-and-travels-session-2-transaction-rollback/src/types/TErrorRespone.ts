export type TErrorResponse = {
  message: string
  err: string
  statusCode: number
  status: 'error' | 'fail'
  issues: [
    {
      path: string
      message: string
    },
  ]
}
// step-1
