

var numerals= ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

var output ="";

var userInput = prompt("Input a number");


 for (i = 0; i < numbers.length; i += 1) {

   if (userInput >= numbers[i]) {
     output += numerals[i];
     userInput -= numbers[i];
     i -= 1;
   }


}
alert(output);
