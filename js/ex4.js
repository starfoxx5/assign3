/* Here's how to use the isNumeric() function. */
function isNumericUsage() {
  "use strict";

  // Declare Constants
  const INITIAL_VALUE = 0;
  const LOOP_LIMIT = 3;

  // Declare Variables
  let entry;
  let counter;

  // Ask a user to enter five things
  for (counter = INITIAL_VALUE; counter < LOOP_LIMIT; counter++) {
      // Get a number or a string
      entry = prompt("Enter Password");

      if ((entry)) {
          // In here what was entered IS a number.
          document.write("You entered a number: " + entry + ".<br />");
      } else {
          // In here what was entered is a not numeric.
          document.write("You entered a string: " + entry + ".<br />");
      }
  }
}