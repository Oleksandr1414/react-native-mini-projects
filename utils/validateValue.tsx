export default function validateValue(value: any) {
  if (!value.length) {
    return undefined;
  }

  return (typeof +value === "number" || +value === 0) && !isNaN(+value)
    ? +value
    : undefined;
}
