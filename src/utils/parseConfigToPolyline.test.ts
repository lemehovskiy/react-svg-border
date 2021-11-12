import parseConfigToPolyline from './parseConfigToPolyline';

test('test polyline config', () => {
  expect(
    parseConfigToPolyline(['1, 1', '0.5, 0.5', '100%, 50%'], [100, 100])
  ).toEqual('1, 1, 0.5, 0.5, 100, 50');
});

test('test polyline config', () => {
  expect(
    parseConfigToPolyline(['1, 1', '0.5, 0.5', '100%, 50%'], [100, 100])
  ).toEqual('1, 1, 0.5, 0.5, 100, 50');
});

test('test polyline config with calc', () => {
  expect(
    parseConfigToPolyline(['1, 1   ', 'calc(100% - 5px), 5'], [100, 100])
  ).toEqual('1, 1, 95, 5');
});

test('test polyline config with positions', () => {
  expect(
    parseConfigToPolyline(
      ['left, top', 'right, top', 'right, bottom', 'left, bottom', 'left, top'],
      [100, 100],
      5
    )
  ).toEqual('2.5, 2.5, 97.5, 2.5, 97.5, 97.5, 2.5, 97.5, 2.5, 2.5');
});
