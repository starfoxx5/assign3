
const pwd = 'secret';
let number;

function promptPassword( )
{
    prompt ("Enter your Password: ");
    
    for (let number = 1; number <= 3; number++){
        if(pwd != 'secret'){
            alert("Login is incorrect");
            number++;
            prompt ("Enter your Password: ");
        }
        if(pwd === 'secret'){
            alert(`You entered the correct password after ${number} attempt(s)`)
        }
        
        
    }
    
    alert(`Your account is locked! You failed to enter the correct password ${number} times`);
    
}
promptPassword(); 