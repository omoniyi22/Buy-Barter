import { Response } from "express";

class Responses {
  constructor() {
    this.SuccessResponse = this.SuccessResponse.bind(this);
    this.ErrorResponse = this.ErrorResponse.bind(this);
  }

  async SuccessResponse(res, code, message, data) {
    const _data = {
      message,
      data,
    };

    return res.status(code).json(_data);
  }

  async ErrorResponse(res: Response, code: number, message: string, error?: string) {
    const _error = {
      message,
      error: message ? message : error,
    };

    return res.status(code).json(_error);
  }
}


export default Responses;