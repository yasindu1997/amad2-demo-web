console.log("Hello Yasindu's JS lession....");

var email = "yasindu@gmail.com";
console.log(email)

var student_name = 90;

var mark = 45.56;

var grade = 'A';

var isMarried = true;


var x = 12;
var y = 13;

var answer = x + y; //+,-,*,/,%
console.log(answer);

//single line comment

/*Hi this is a 
multiline comment
and you are a hero*/

//function 
function add() {
    var firstNumber = 10;
    var secondNumber = 8;

    alert("Answer is " + (firstNumber + secondNumber));
    console.log("Answer is " + (firstNumber + secondNumber));
}

//function calling statment
// add();

function loginUser() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    console.log(email + " " + password);

    document.getElementById('answer').innerHTML = email + " " + password;
}

var age = 90;

var address = "Panadura"


//flow contollers ----> if/else / elseif / switch


//true,false, a statement that genarates true or false

var age = 16;

if (age == 18) {
    console.log("Enter")
} else if (age == 16) {
    console.log("Call Parents");
} else if (age == 14) {
    console.log("call police");
}
else {
    console.log("Helloooooooooooooo....")
}

//18> -----> home
//username, password ----> home page
//user ---> married ---> display x

function getSum() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    alert(num1 + num2);
}

//A family has three children
//get each child's weight from user's input
//find average
//if avg.weight is greater than 55 alert no worries

var val1 = 12;
var val2 = 5;

console.log(val1 % val2);

//>, <, >=, <=, == ,!=  ------> Relational operators

console.log(val1 > 17 ? "Hiii" : "Hello"); //---->ternary

//&&, || ----> logical operators

if (val2 > 4 || val1 == 10) {

}

var dbUserName = "admin@gmail.com";
var password = "admin@123"

var seen = 7;

//control variable
switch (seen) {
    case 5:
        console.log("5 selected...");
        break;
    case 4:
        console.log("4 selected....");
        break;
    case 7:
        console.log("7 selected....");
        break;
    default:
        console.log("Not Matched");
}

//user input month name ----> January, February, March,....

//alert ----> Duruthu, Nawam, Madin....

////////////////////////

var val3 = 89;

val3 += 5; //*=,/=,-=

//val3 = val3 + 5;

console.log(val3);

/////////////////////////

var val4 = 9;

//val4 = val4+1;

//val4+=1;

val4++; //increamnt ----> val4-- -------->decrement

console.log(val4);

//loops ----> for loop, while loop, do-while loop, for-each loops

console.log("Hello For-Loop");
console.log("Hello For-Loop");
console.log("Hello For-Loop");
console.log("Hello For-Loop");
console.log("Hello For-Loop");
console.log("Hello For-Loop");
console.log("Hello For-Loop");
console.log("Hello For-Loop");


for (var i = 0; i < 5; i++) {
    console.log("Hello For-Loop");
}

///////////////////////////////

var myVal = 4;

//6 rounds
for (var i = 0; i < 3; i++) {
    if (myVal % 2 == 0) {
        myVal += 3;
    } else {
        myVal += 2;
    }
}

console.log(myVal);

//////////////////////////////

var dbUserName = "admin@gmail.com";
var dbPassword = "admin@123";

function clearInputs() {
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
}

//a user can enter his username and password for three times.
//if user entered username and password correctly alert 'login success'.
//if not alert 'login failed' clear text inputs and give another chance to enter username and password.
//when finshed 3 chances alert 'your account is locked'

var rounds = 0;

function onLogin() {
    var userName = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (userName == dbUserName && password == dbPassword) {
        alert("Login Success !");
    } else {
        alert("Login Failed !");
        clearInputs();
        rounds++;
        if (rounds == 3) {
            alert("Your account locked !");
        }
    }
}