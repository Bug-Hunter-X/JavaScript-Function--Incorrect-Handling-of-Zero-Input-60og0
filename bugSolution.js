function myFunction(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed'); //Improved error handling
  } else if (a === 0) {
    return 0; //Handle the case where 'a' is 0
  }
  return a / b; 
} 