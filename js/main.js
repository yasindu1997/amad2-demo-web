console.log("Hello Yasindu's JS lession....");

var email = "yasindu@gmail.com";
console.log(email)

var student_name = 90;

var mark = 45.56;

var grade  = 'A';

var isMarried = true;


var x = 12;
var y = 13;

var answer = x+y; //+,-,*,/
console.log(answer);

//single line comment

/*Hi this is a 
multiline comment
and you are a hero*/

//function 
function add(){
   var firstNumber = 10;
   var secondNumber = 8;

   alert("Answer is "+(firstNumber+secondNumber));
   console.log("Answer is "+(firstNumber+secondNumber));
}

//function calling statment
// add();

function loginUser(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    console.log(email + " "+ password);

    document.getElementById('answer').innerHTML=email + " "+ password;
}

