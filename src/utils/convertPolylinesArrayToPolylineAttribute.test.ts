import convertPolylinesArrayToPolylineAttribute from './convertPolylinesArrayToPolylineAttribute';

test('convertPolylinesArrayToPolylineAttribute', () => {
  expect(
    convertPolylinesArrayToPolylineAttribute([
      [
        [10, 10],
        [75, 75],
      ],
      [
        [20, 20],
        [75, 75],
      ],
    ])
  ).toEqual(['10, 10, 75, 75', '20, 20, 75, 75']);
});
