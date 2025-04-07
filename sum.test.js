console.log('Running sum.test.js'); // Debug
const sum = require('./sum'); // Assuming sum.js is in the same folder

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
