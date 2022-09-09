const COUNTRY = {
  ko: "ko",
  en: "en",
} as const;
type ExceptionMessageInterface = Partial<
  Record<typeof COUNTRY[keyof typeof COUNTRY], string>
>;

export interface ExceptionInterface {
  readonly statusCode: number;
  readonly requestLocation: string;
  readonly message: ExceptionMessageInterface;
}
