export class AppError extends Error {
  public statusCode: number;
  constructor(message: string, code: number) {
    super(message);
    this.statusCode = code;
    Error.captureStackTrace(this, this.constructor);
  }
}
