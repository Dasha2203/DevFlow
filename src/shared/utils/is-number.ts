export const isNumber = (value: string | undefined): value is string => {
  return typeof value === 'string' && !isNaN(Number(value));
};
