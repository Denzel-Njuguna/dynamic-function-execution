# Dynamic Operation Handler

This project implements a flexible calculator that performs various mathematical operations based on user input. It demonstrates the use of dynamic function execution in JavaScript, allowing different operations to be performed based on runtime input.

## Features

- **Operations Supported**: `divide`, `modulus`
- **Dynamic Function Execution**: Functions are selected and executed based on the operation name provided.

## Functions

### `divide(factor, ...numbers)`

Divides each number in the `numbers` array by the specified `factor`.

**Parameters:**
- `factor` (number): The divisor for the division operation.
- `...numbers` (number[]): A list of numbers to be divided.

**Returns:**
- `number[]`: An array of results after dividing each number by the factor.

### `modulus(factor, ...numbers)`

Calculates the remainder of each number in the `numbers` array when divided by the specified `factor`.

**Parameters:**
- `factor` (number): The divisor for the modulus operation.
- `...numbers` (number[]): A list of numbers to be processed.

**Returns:**
- `number[]`: An array of remainders after performing the modulus operation.

### `calculate(operationName, factor, ...numbers)`

Executes the specified operation using the provided `factor` and list of `numbers`.

**Parameters:**
- `operationName` (string): The name of the operation to perform (e.g., `'divide'`, `'modulus'`).
- `factor` (number): The factor used in the operation.
- `...numbers` (number[]): A list of numbers to be processed.

**Returns:**
- `number[]`: An array of results based on the specified operation.

**Throws:**
- `Error`: If the `operationName` is not supported.

## Usage

1. **Define Operation Functions:**

   ```javascript
   function divide(factor, ...numbers) {
     return numbers.map(num => num / factor);
   }

   function modulus(factor, ...numbers) {
     return numbers.map(num => num % factor);
   }
