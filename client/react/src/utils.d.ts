export const validate: (
  id: string,
  value: string,
  cb: ValidationCallback
) => void;

type ValidationCallback = (errors: ValidationError[]) => void;
type ValidationError = string;
