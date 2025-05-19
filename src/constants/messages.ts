enum RATE_LIMIT_MESSAGES {
  COMMON_RATE_LIMIT = "Too many requests from this IP, please try again in one hour.",
  TOO_FAST = "You're sending requests too fast. Please slow down.",
  TEMP_BLOCK = "You’ve reached the request limit. Try again in 60 minutes.",
  SOFT_WARNING = "Oops! You’re a little too fast. Please take a short break.",
  SPAM_WARNING = "We detected unusual activity from your IP. Please try again later.",
  TOO_MANY_ATTEMPTS = "Too many attempts detected. Access temporarily restricted.",
}

enum AUTH_MESSAGES {
  UNAUTHORIZED = "You are not authorized to access this resource.",
  INVALID_TOKEN = "Invalid or expired token.",
  LOGIN_REQUIRED = "You must be logged in to access this resource.",
  INVALID_CREDENTIALS = "Incorrect email or password.",
  ACCOUNT_LOCKED = "Your account has been temporarily locked due to multiple failed login attempts.",
  TOKEN_EXPIRED = "Your session has expired. Please log in again.",
  FORBIDDEN = "You do not have permission to access this resource.",
  USER_EXISTS = "User with this email already exists.",
  SERVER_ERROR = "Something went wrong on the server.",
  MISSING_FIELDS = "Missing required fields.",
  USER_REGISTERED = "User signup successfully.",
  SIGNIN_SUCCESS = "Signin successful.",
  SIGNUP_SUCCESS = "Signup successful.",
  INVALID_EMAIL = "Invalid email address.",
  INVALID_PASSWORD = "Password must be at least 6 characters.",
}

enum GENERAL_MESSAGES {
  SERVER_ERROR = "An unexpected server error occurred.",
  NOT_FOUND = "The requested resource was not found.",
  BAD_REQUEST = "The request was invalid or cannot be processed.",
  SERVICE_UNAVAILABLE = "The service is temporarily unavailable. Please try again later.",
  TIMEOUT = "The request timed out. Please try again.",
}

export { RATE_LIMIT_MESSAGES, AUTH_MESSAGES, GENERAL_MESSAGES };
