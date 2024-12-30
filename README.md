# JavaScript Function: Incorrect Handling of Zero Input

This repository demonstrates a common error in JavaScript functions involving division: incorrectly handling zero inputs. The `myFunction` function attempts to prevent division by zero, but it fails to distinguish between the case where both inputs are zero and the case where only one is zero.  This can lead to unexpected behavior and incorrect results.

The `bug.js` file contains the buggy code. The `bugSolution.js` file shows a corrected version that handles zero inputs appropriately, distinguishing between cases and throwing an error for division by zero.

## How to Run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in a code editor or IDE.
3. Run the JavaScript code using Node.js or a browser's developer console.

## How to Use

The included code shows how to use this function and highlights the bug, and solution.

## Potential Solutions

To correct this error, the function should either throw an error when a division by zero is attempted or return an appropriate value such as `NaN` (Not a Number) or `null` indicating that the input was invalid. This improved error handling prevents unexpected results and makes the code more robust and reliable.