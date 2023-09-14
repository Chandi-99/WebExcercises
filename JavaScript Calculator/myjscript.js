
function myfunction(){
var number1=parseFloat(document.getElementById("number1").value);
var number2=parseFloat(document.getElementById("number2").value);

document.getElementById("addition").innerHTML=number1+number2;
document.getElementById("substraction").innerHTML=number1-number2;
document.getElementById("multipication").innerHTML=number1*number2;
document.getElementById("division").innerHTML=number1/number2;

document.getElementById("summation1").innerHTML=number1*(number1+1)/2;
document.getElementById("summation2").innerHTML=number2*(number2+1)/2;
}

/*function summation1(){
     var x = document.getElementById("number1").value;
     var summation1 = 0;
     for (i = 0; i <= x; i++) {
         sum += i;
     }
     document.getElementById("summation1").innerHTML="Sum of all integer is : "+ sum;

function summation2(){
     var x = document.getElementById("number2").value;
     var summation2 = 0;
     for (i = 0; i <= x; i++) {
         sum += i;
     }
     document.getElementById("summation2").innerHTML="Sum of all integer is : "+ sum;

*/

