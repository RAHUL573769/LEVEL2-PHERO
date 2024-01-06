export class AppError extends Error {
  public statusCode: number;
  constructor(message: string, statusCode1: number) {
    // new Error(message)

    super(message);
    this.statusCode = statusCode1;
    //
    Error.captureStackTrace(this, this.constructor);
    //this
  }
}
