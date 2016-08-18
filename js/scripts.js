//
// The most basic rule is that you add the value of all the symbols: so II is 2, LXVI is 66, etc.
//
// The exception is that there may not be more than three of the same characters in a row. Instead, you switch to subtraction. So instead of writing IIII for 4, you write IV (for 5 minus 1); and instead of writing LXXXX for 90, you write XC.
//
// You also have to separate ones, tens, hundreds, and thousands. In other words, 99 is XCIX, not IC. You cannot count higher than 3,999 in Roman numerals.
//
// Draft some specifications and input-output examples to brainstorm the behaviors that you'll want to capture in your application. Tackle them one-by-one, worrying only about the future behaviors once the current example is implemented. All specifications should be listed in the project's README.md file.


//roman conversion function
function toRoman(number) {
  var romanResult = " "
  decimals = [1000, 500, 100, 50, 10, 5, 1],
  roman = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
   for (var i = 0; i < decimals.length; i++) {
     while (number >= decimals[i]) {
       romanResult += roman[i];
       number -= decimals[i];
     }
  }
  return romanResult;
}
