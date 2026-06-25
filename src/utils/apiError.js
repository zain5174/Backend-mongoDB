class apiError extends Error {
  constructor(
    statusCode,
    message = "somthing went wrong",
    errors = [],
    stack = "",
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.data = null;
    this.stack = stack;
    this.success = false;
    this.errors = errors;
  }
}
export { apiError };
