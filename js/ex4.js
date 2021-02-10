var password = "wordpass";
var entryCount = 0;
var entryLimit = 3;

button.addEventListener("click", function(){
  if (entryCount < entryLimit) {
    if (textbox.value != password){
      answer.innerHTML = "Wrong Password";
      entryCount++;
      textbox.value = "";
    } else {
      // success!
      entryCount = 0;
      answer.innerHTML = "Correct Password";
    }
  } else {
      answer.innerHTML = "Out of entries";
  }
});


/*
const pwd = 'secret'
let number = 0

function promptPassword( )
{
    prompt ("Enter your Password: ");
    
    while (pwd != 'secret'){
        alert("Login is incorrect");
        prompt ("Enter your Password: ");
    }
    
    alert("Password is correct, you are allowed to enter the site");
    
}
promptPassword(); */