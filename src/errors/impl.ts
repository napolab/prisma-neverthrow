export class BaseErrorImpl extends Error {
  type = "base-error";
}
export class UnknownErrorImpl extends BaseErrorImpl {
  type = "unknown-error";

  constructor(message?: string, options?: ErrorOptions) {
    super(`[unknown-error]: ${message}`, options);
  }
}
