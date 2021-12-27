import getMorphPolylinesArrayByProgress from './getFiguresMorphPolylinesArrayByProgress';

test('getMorphPolylinesArrayByProgress', () => {
  expect(
    getMorphPolylinesArrayByProgress(
      [[[10, 10], { from: [50, 50], to: [80, 80] }]],
      [0.5]
    )
  ).toEqual([
    [
      [10, 10],
      [65, 65],
    ],
  ]);
});
