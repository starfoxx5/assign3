
const pwd = 'secret'
let number = 0

function promptPassword( )
{
    prompt ("Enter your Password: ");
    
    while (pwd === 'secret'){
        alert("Login is incorrect");
        prompt ("Enter your Password: ");
    }
    
    alert("Password is correct, you are allowed to enter the site");
    
}
promptPassword(); 