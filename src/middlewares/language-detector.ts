import { Request, Response, NextFunction } from "express";
import { LANG_CODES } from "@/locales/lang-code";

/**
 * Middleware that detects the preferred language from the request headers
 * and assigns it to `req.lang`.
 *
 * It parses the `Accept-Language` header and selects the first supported language code.
 * If none of the languages in the header are supported, it defaults to English (`LANG_CODES.EN`).
 *
 * Supported languages are defined in the `LANG_CODES` enum.
 *
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {NextFunction} next - Callback to pass control to the next middleware.
 */
const languageMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const acceptLang = req.headers["accept-language"] as string | undefined;

  let selectedLang = LANG_CODES.EN;

  if (acceptLang) {
    const lang = acceptLang.split(",")[0].split("-")[0].toLowerCase();

    if (Object.values(LANG_CODES).includes(lang as LANG_CODES)) {
      selectedLang = lang as LANG_CODES;
    }
  }

  req.lang = selectedLang;

  next();
};

export default languageMiddleware;
