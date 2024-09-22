export class ValidationError {
  message: string = "Validation Error";
  errors: string[];
  status: number = 400;

  constructor(errors: string[]) {
    this.errors = errors;
  }

  toJSON() {
    return {
      message: this.message,
      errors: this.errors,
    };
  }
}
