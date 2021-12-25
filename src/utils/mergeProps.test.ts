import mergeProps from './mergeProps';

test('Simgle merge', () => {
  expect(
    mergeProps([{ progress: 0 }, { progress: 1 }], { progress: 0.5 })
  ).toEqual({ progress: 1 });
});

test('Undefined property merge', () => {
  expect(
    mergeProps([{ progress: undefined }, { progress: 1 }], { progress: 0.5 })
  ).toEqual({ progress: 1 });
});

test('Undefined overwriting property merge', () => {
  expect(
    mergeProps([{ progress: 1 }, { progress: undefined }], { progress: 0.5 })
  ).toEqual({ progress: 1 });
});

test('Default props test', () => {
  expect(
    mergeProps([{ progress: 0 }, { progress: 1 }], {
      progress: 0.5,
      strokeWidth: 1,
    })
  ).toEqual({ progress: 1, strokeWidth: 1 });
});
