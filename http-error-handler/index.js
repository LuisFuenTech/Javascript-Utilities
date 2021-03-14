class HttpError extends Error {
    constructor(...params) {
      super(...params);
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, HttpError);
      }
  
      this.date = new Date();
      this.isHttpError = true;
    }
  
    badRequest(message, description) {
      this.message = message || "Bad request";
      this.statusCode = 400;
      this.description = description || message;
      this.name = "BadRequestError";
    
      return this;
    }
  
    unauthorized(message, description) {
      this.message = message || "Unauthorized";
      this.statusCode = 401;
      this.description = description || message;
      this.name = "UnauthorizedError";
    
      return this;
    }
  
    forbidden(message, description) {
      this.message = message || "Forbidden";
      this.statusCode = 403;
      this.description = description || message;
      this.name = "ForbiddenError";
    
      return this;
    }
  
    notFound(message, description) {
      this.message = message || "Not found";
      this.statusCode = 404;
      this.description = description || message;
      this.name = "NotFoundError";
    
      return this;
    }
  
    conflict(message, description) {
      this.message = message || "Conflict";
      this.statusCode = 409;
      this.description = description || message;
      this.name = "ConflictError";
    
      return this;
    }
  
    internalServerError(message, description) {
      this.message = message || "Internal server error";
      this.statusCode = 500;
      this.description = description || message;
      this.name = "InternalServerError";
    
      return this;
    }
  }

module.exports = HttpError