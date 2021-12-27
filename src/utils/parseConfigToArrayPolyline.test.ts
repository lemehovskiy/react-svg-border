import parseConfigToArrayPolyline from './parseConfigToArrayPolyline';

test('parseMorphIndexConfigToArrayPolyline', () => {
  expect(
    parseConfigToArrayPolyline(
      ['1, 1', { from: '0.5, 0.5', to: '2, 2' }, '100%, 50%'],
      [100, 100]
    )
  ).toEqual([[1, 1], { from: [0.5, 0.5], to: [2, 2] }, [100, 50]]);
});
