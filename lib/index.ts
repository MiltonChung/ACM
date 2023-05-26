export const classNames = (...classes: string[]): string =>
  classes.filter(Boolean).join(" ");

export const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
