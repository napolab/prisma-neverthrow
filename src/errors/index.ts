import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientRustPanicError,
  PrismaClientUnknownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime";

export {
  BaseErrorImpl as BaseError,
  UnknownErrorImpl as UnknownError,
} from "./impl";

type PrismaError =
  | PrismaClientInitializationError
  | PrismaClientKnownRequestError
  | PrismaClientRustPanicError
  | PrismaClientUnknownRequestError
  | PrismaClientValidationError;
const isPrismaError = (value: unknown): value is PrismaError => {
  return (
    value instanceof PrismaClientInitializationError ||
    value instanceof PrismaClientRustPanicError ||
    value instanceof PrismaClientKnownRequestError ||
    value instanceof PrismaClientRustPanicError ||
    value instanceof PrismaClientUnknownRequestError ||
    value instanceof PrismaClientValidationError
  );
};

export type { PrismaError };
export {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientRustPanicError,
  PrismaClientUnknownRequestError,
  PrismaClientValidationError,
  isPrismaError,
};
