export class UnauthenticatedError {
  message: string;
  status: number = 401;

  constructor(message = "Unauthenticated") {
    this.message = message;
  }

  toJSON() {
    return {
      message: this.message,
    };
  }
}
