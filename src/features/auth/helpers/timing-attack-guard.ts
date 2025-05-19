import crypto from "crypto";

/**
 * İki string değerini sabit zamanlı (timing-safe) şekilde karşılaştırır.
 * Bu yöntem zamanlama saldırılarına (timing attacks) karşı koruma sağlar.
 *
 * @param {string} a - Karşılaştırılacak ilk string.
 * @param {string} b - Karşılaştırılacak ikinci string.
 * @returns {boolean} - Stringler eşitse true, değilse false döner.
 *
 * @example
 * ```ts
 * const isEqual = safeCompare("password123", "password123");
 * console.log(isEqual); // true
 * ```
 */
const safeCompare = (a: string, b: string): boolean => {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);

  if (bufA.length !== bufB.length) {
    return false;
  }

  return crypto.timingSafeEqual(bufA, bufB);
};

export default safeCompare;
