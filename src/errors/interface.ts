export interface BaseErrorContructor {
  new (...args: ConstructorParameters<ErrorConstructor>): Error;
}
