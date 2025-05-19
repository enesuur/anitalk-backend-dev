import mongoose from "../../lib/mongoose";

/**
 * Converts a string ID to a Mongoose ObjectId.
 *
 * Useful when working with string-based IDs from request params or query strings,
 * ensuring they are properly cast to ObjectId instances for MongoDB operations.
 *
 * @param {string} id - The string representation of the ObjectId.
 * @returns {mongoose.Types.ObjectId} A valid Mongoose ObjectId instance.
 *
 * @throws {mongoose.Error.CastError} Throws if the input string is not a valid ObjectId.
 */
export const castToObjectId = (id: string): mongoose.Types.ObjectId => {
  return new mongoose.Types.ObjectId(id);
};
