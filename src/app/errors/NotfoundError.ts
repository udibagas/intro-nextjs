export class NotfoundError {
  status: number = 404;
  message: string;

  constructor(message = "Data not found") {
    this.message = message;
  }

  toJSON() {
    return {
      message: this.message,
    };
  }
}
