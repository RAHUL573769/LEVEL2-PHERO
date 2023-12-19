export type TError = {
  message: string
  err: string
  statusCose: number
  status: string
  issues: TErrorIssues[]
  stack: string
}

export type TErrorIssues = {
  path: string
  message: string
}
