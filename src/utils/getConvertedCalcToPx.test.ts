import getConvertedCalcToPx from './getConvertedCalcToPx';

test('Simgle calc rule', () => {
  expect(getConvertedCalcToPx('calc(100% - 5px)', 200)).toEqual('195');
});

test('Simgle calc rule with extra spacing', () => {
  expect(getConvertedCalcToPx('calc(  100   % - 5   px   )', 200)).toEqual(
    '195'
  );
});

test('Simgle calc rule with nested calculation', () => {
  expect(getConvertedCalcToPx('calc(100% - (6px / 2 + 3))', 200)).toEqual(
    '194'
  );
});
