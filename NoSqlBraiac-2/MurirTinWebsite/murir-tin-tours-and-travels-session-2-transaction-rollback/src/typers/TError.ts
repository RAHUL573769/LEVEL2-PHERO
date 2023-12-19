export type TError = {
  message: string
  err: string
  statusCose: number
  issues: [
    {
      path: string
      message: string
    },
  ]
}
