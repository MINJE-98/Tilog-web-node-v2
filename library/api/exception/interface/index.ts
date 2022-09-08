export default interface ExceptionInterface {
  readonly statusCode: number;
  readonly requestLocation: string;
  readonly message: string;
}
