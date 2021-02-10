function promptPassword( )
{

var name = prompt ("Enter your Username: ");
var pwd = prompt ("Enter your Password: ");

while (pwd != 'P@ssw0rd'){
alert("Login is incorrect");
pwd = prompt ("Enter your Password: ");
}

alert("Password is correct, you are allowed to enter the site");

}