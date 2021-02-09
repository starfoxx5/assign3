/* inputing hr, m, s */

let hours = Number(prompt("Enter the hours:"));
let minutes = Number(prompt("Enter the minutes:"));
let seconds = Number(prompt("Enter the seconds:"));

const time1 = hours
const time2 = minutes
const time3 = seconds

// test for errors 
if (
  hours >= 0 &&
  hours <= 23 &&
  minutes >= 0 &&
  minutes <= 59 &&
  seconds >= 0 &&
  seconds <= 59
) {
  seconds++; // Incrementing the seconds
  if (seconds === 60) {
    // Next minute: seconds are reset to 0
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      // Next hour: minutes are reset to 0
      minutes = 0;
      hours++;
      if (hours === 24) {
        // Next second is midnight
        hours = 0;
      }
    }
  }
  console.log(
    `Time input: ${time1}h ${time2}m ${time3}s`
  );
  console.log(
    `One second later: ${hours}h ${minutes}m ${seconds}s`
  );
} else {
  console.log("Incorrect hour!");
}