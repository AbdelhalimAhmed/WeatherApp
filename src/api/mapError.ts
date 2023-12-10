type RequestResponse = {
  code: number;
  message: string;
};

export class ResponseError extends Error {
  constructor(message: string, public response: RequestResponse) {
    super(message);
  }
}

function mapError(error: unknown | undefined): undefined | string {
  if (!error) {
    return undefined;
  }
  if (error instanceof ResponseError) {
    return `${error.message}: ${error.response.message}`;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return "Unknown error";
}

export default mapError;
