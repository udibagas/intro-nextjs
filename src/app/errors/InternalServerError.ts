export class InternalServerError {
  message: string;
  status: number = 500;

  constructor(message = "Internal Server Error") {
    this.message = message;
  }

  toJSON() {
    return {
      message: this.message,
    };
  }
}
