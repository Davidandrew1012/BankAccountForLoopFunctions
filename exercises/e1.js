
// EXERCISE 1
// Return an array of numbers in 1..10
// getFirstTenNumbers() => [1, 2, 3, ... , 10]

export function getFirstTenNumbers() {
  const numbers = [];
  let index = 1;

  for (let i = 0; i < 10; i++)
  {
      numbers[i] = index;
      index++;
  }
  return numbers;
}

getFirstTenNumbers()

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-1"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
