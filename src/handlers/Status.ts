const Status = {
  NOT_FOUND: 404,
  BAD_REQUEST: {
    code: 400,
    message: "Bad Request",
  },
  CREATED: {
    code: 201,
    message: "Created Successfully",
  },
  OK: {
    code: 200,
    message: "Successfully",
  },
  NO_CONTENT: 204,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  CONFLICT: 409,
  SERVER_ERROR: {
    code: 500,
    message: "Error",
  },
  SERVICE_UNAVAILABLE: 503,
};

export default Status;