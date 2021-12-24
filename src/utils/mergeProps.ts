export default function mergeProps(
  props: { [index: string]: any }[],
  defaultProps: {},
  skipUndefinedAndNull = true
) {
  let returnProps = defaultProps;

  const propsCopy = [...props];

  for (let i = 0; i < propsCopy.length; i += 1) {
    const propsCopyItem = propsCopy[i];
    if (skipUndefinedAndNull) {
      Object.keys(propsCopyItem).forEach((key: string) => {
        if (propsCopyItem[key] === undefined || propsCopyItem[key] === null) {
          delete propsCopyItem[key];
        }
      });
    }
    returnProps = { ...returnProps, ...propsCopyItem };
  }
  return returnProps;
}
