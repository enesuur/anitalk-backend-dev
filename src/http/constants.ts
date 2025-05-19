/**
 * Enum representing standard HTTP status codes.
 * Organized into groups:
 * - 2xx: Success
 * - 3xx: Redirection
 * - 4xx: Client Error
 * - 5xx: Server Error
 */
enum HTTP_CODE {
  // 2xx: Success
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,
  RESET_CONTENT = 205,
  PARTIAL_CONTENT = 206,

  // 3xx: Redirection
  MULTIPLE_CHOICES = 300,
  MOVED_PERMANENTLY = 301,
  FOUND = 302,
  SEE_OTHER = 303,
  NOT_MODIFIED = 304,
  TEMPORARY_REDIRECT = 307,
  PERMANENT_REDIRECT = 308,

  // 4xx: Client Error
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  NOT_ACCEPTABLE = 406,
  REQUEST_TIMEOUT = 408,
  CONFLICT = 409,
  GONE = 410,
  PAYLOAD_TOO_LARGE = 413,
  UNSUPPORTED_MEDIA_TYPE = 415,
  UNPROCESSABLE_ENTITY = 422,
  TOO_MANY_REQUESTS = 429,

  // 5xx: Server Error
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
  HTTP_VERSION_NOT_SUPPORTED = 505,
}

/**
 * A readonly map of HTTP status codes to their standard message descriptions.
 * Useful for creating consistent API responses and logging.
 */
const HTTP_MESSAGE: Readonly<Record<HTTP_CODE, string>> = {
  [HTTP_CODE.OK]: "OK",
  [HTTP_CODE.CREATED]: "Created",
  [HTTP_CODE.ACCEPTED]: "Accepted",
  [HTTP_CODE.NO_CONTENT]: "No Content",
  [HTTP_CODE.RESET_CONTENT]: "Reset Content",
  [HTTP_CODE.PARTIAL_CONTENT]: "Partial Content",

  [HTTP_CODE.MULTIPLE_CHOICES]: "Multiple Choices",
  [HTTP_CODE.MOVED_PERMANENTLY]: "Moved Permanently",
  [HTTP_CODE.FOUND]: "Found",
  [HTTP_CODE.SEE_OTHER]: "See Other",
  [HTTP_CODE.NOT_MODIFIED]: "Not Modified",
  [HTTP_CODE.TEMPORARY_REDIRECT]: "Temporary Redirect",
  [HTTP_CODE.PERMANENT_REDIRECT]: "Permanent Redirect",

  [HTTP_CODE.BAD_REQUEST]: "Bad Request",
  [HTTP_CODE.UNAUTHORIZED]: "Unauthorized",
  [HTTP_CODE.PAYMENT_REQUIRED]: "Payment Required",
  [HTTP_CODE.FORBIDDEN]: "Forbidden",
  [HTTP_CODE.NOT_FOUND]: "Not Found",
  [HTTP_CODE.METHOD_NOT_ALLOWED]: "Method Not Allowed",
  [HTTP_CODE.NOT_ACCEPTABLE]: "Not Acceptable",
  [HTTP_CODE.REQUEST_TIMEOUT]: "Request Timeout",
  [HTTP_CODE.CONFLICT]: "Conflict",
  [HTTP_CODE.GONE]: "Gone",
  [HTTP_CODE.PAYLOAD_TOO_LARGE]: "Payload Too Large",
  [HTTP_CODE.UNSUPPORTED_MEDIA_TYPE]: "Unsupported Media Type",
  [HTTP_CODE.UNPROCESSABLE_ENTITY]: "Unprocessable Entity",
  [HTTP_CODE.TOO_MANY_REQUESTS]: "Too Many Requests",

  [HTTP_CODE.INTERNAL_SERVER_ERROR]: "Internal Server Error",
  [HTTP_CODE.NOT_IMPLEMENTED]: "Not Implemented",
  [HTTP_CODE.BAD_GATEWAY]: "Bad Gateway",
  [HTTP_CODE.SERVICE_UNAVAILABLE]: "Service Unavailable",
  [HTTP_CODE.GATEWAY_TIMEOUT]: "Gateway Timeout",
  [HTTP_CODE.HTTP_VERSION_NOT_SUPPORTED]: "HTTP Version Not Supported",
} as const;

Object.freeze(HTTP_MESSAGE);

export { HTTP_MESSAGE, HTTP_CODE };
