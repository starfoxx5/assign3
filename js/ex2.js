/* Input day of the week */ 
const day = prompt('Enter the day of the week (ex. sun, mon, tue):');
switch (day){
  case "sun":
    console.log(`You entered: ${day}`);
    console.log("The following day is: mon");
    break;
  case "mon":
    console.log(`You entered: ${day}`);
    console.log("The following day is: tue");
    break;
  case "tue":
    console.log(`You entered: ${day}`);
    console.log("The following day is: wed");
    break;
  case "wed":
    console.log(`You entered: ${day}`);
    console.log("The following day is: thu");
    break;
  case "thu":
    console.log(`You entered: ${day}`);
    console.log("The following day is: fri");
    break;
  case "fri":
    cconsole.log(`You entered: ${day}`);
    console.log("The following day is: sat");
    break;
  case "sat":
    console.log(`You entered: ${day}`);
    console.log("The following day is: sun");
    break;
}
