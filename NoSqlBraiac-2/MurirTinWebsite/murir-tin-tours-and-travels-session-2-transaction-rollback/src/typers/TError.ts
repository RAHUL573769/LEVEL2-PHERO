export type TError = {
  message: string
  err: string
  statusCose: number
  status: string
  issues: [
    {
      path: string
      message: string
    },
  ]
}
