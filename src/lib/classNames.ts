/**
 * Joins class names together, ignoring falsey values.
 * @param classNames - Class names to join.
 * @returns Joined class names.
 * @example
 * classNames("foo", "bar", isActive && "active");
 */
export const classNames = (...classNames: (string | false)[]) =>
  classNames.filter(Boolean).join(" ");
