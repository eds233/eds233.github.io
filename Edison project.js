window.addEventListener('load', () => {
	var theAge = parseFloat(prompt('Please enter your age: '));
	if (theAge<18){
     alert('WARNING: Your age is not enough!!!');
     document.write(404);
}
    else if(theAge==null || theAge== ''){
    	alert('Unrecognized');
    	document.write(404);
    }

  else{
    alert('Welcome,It is ' + new Date().getHours() + ' o clock');

}
});


function theGame(){
     var choices=['Scissors', 'Paper','Rock'];
     
     var random = Math.floor(Math.random()* 3);

     var computer = choices[random];
     
     var player = prompt('Your choice(please capitalize the first letter): ');


if (player == "Scissors" && computer == "Paper" || 
       	player == "Rock" && computer == "Scissors" ||
       	player == "Paper" && computer == "Rock" ) 
       {
alert("The computer chose: " + computer + "," + "You chose: " + player + ".");
alert("You win!!!");
} 

else if(player == computer) {
 alert("The computer chose: " + computer + "," + "You chose: " + player + ".");
alert("It is a tie!!!");
} 

else {
alert("The computer chose: " + computer + "," + "You chose: " + player + ".");
alert("You lost");  
}}


function time(){
	document.getElementById('times').innerHTML=new Date();
}


function Calculator(){
	var num1=parseFloat(prompt("number A:  "));
	var operator=prompt("+ - * /:  ");
	var num2=parseFloat(prompt("number B:  "));

switch (operator){
 case "+":alert(num1 + num2);
 break;
 case "-":alert(num1 - num2);
 break;
 case "*":alert(num1 * num2);
 break;
 default:
  alert(num1 / num2);
}}


function easterEgg(){
document.getElementById('egg').innerHTML='https://www.residentevil.com/village/assets/images/common/share.png';
}

