import { isPrismaError, UnknownError, BaseError } from ".";

import type { PrismaError } from ".";

export type ErrorPattarn =
  | {
      type: "prisma";
      error: PrismaError;
    }
  | {
      type: "unknown";
      error: UnknownError;
    }
  | {
      type: "base";
      error: BaseError;
    };

export const fromUnknownError = (value: unknown): ErrorPattarn => {
  if (isPrismaError(value)) return { type: "prisma", error: value };
  if (value instanceof UnknownError) return { type: "unknown", error: value };

  return { type: "base", error: new BaseError(JSON.stringify(value)) };
};
