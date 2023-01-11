interface CustomErrorResponse {
  errorType: string;
  errorMessage: string;
}

const isError = (error: unknown): error is Error => error instanceof Error;
const generateErrorResponse = (error: unknown): CustomErrorResponse => {
  if (isError(error)) {
    return {
      errorType: error.name,
      errorMessage: error.message,
    };
  }
  return {
    errorType: 'unknown error',
    errorMessage: 'something went wrong on a server side',
  };
};

export { generateErrorResponse };
