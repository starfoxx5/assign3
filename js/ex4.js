const password = "secret";
let response;
let entryCount = 0;
let entryLimit = 3;
let error = false;

while (response != password && !error) {
  if (entryCount < entryLimit) {
    response = window.prompt("Enter Password");
    entryCount++;
  } else {
    error = true;
  }
}

if (error) {
  alert(
    `Your account is locked! You failed to enter the correct password ${entryLimit} times`
  );
} else {
  alert("Success");
}
