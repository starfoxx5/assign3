/* Input name & number of units */ 
const fname = prompt('Enter your first name:');
const units = Number(prompt('Enter the current number of completed units:'));
  if (units >=0 && units <31) {
    console.log(`Hello ${fname}. Your grade standing is Freshman`);
  }
  if (units >=31 && units <61) {
    console.log(`Hello ${fname}. Your grade standing is Sophomore`);
  }
  if (units >=61 && units <91) {
    console.log(`Hello ${fname}. Your grade standing is Junior`);
  }
  if (units >=91) {
    console.log(`Hello ${fname}. Your grade standing is Senior`);
  }

