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

<h2>Input Password and Submit [7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter]</h2
<form name="form1" action="#">
<ul>
<li><input type='text' name='text1'/></li>
<li class="rq">*Enter numbers only.</li>
<li>&nbsp;</li>
<li class="submit"><input type="submit" name="submit" value="Submit" onclick="CheckPassword(document.form1.text1)"/></li>
<li>&nbsp;</li>
</ul>

function CheckPassword(inputtxt) 
{ 
var passw=  /^[A-Za-z]\w{7,14}$/;
if(inputtxt.value.match(passw)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
}