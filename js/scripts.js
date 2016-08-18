//
// The most basic rule is that you add the value of all the symbols: so II is 2, LXVI is 66, etc.
//
// The exception is that there may not be more than three of the same characters in a row. Instead, you switch to subtraction. So instead of writing IIII for 4, you write IV (for 5 minus 1); and instead of writing LXXXX for 90, you write XC.
//
// You also have to separate ones, tens, hundreds, and thousands. In other words, 99 is XCIX, not IC. You cannot count higher than 3,999 in Roman numerals.
//
// Draft some specifications and input-output examples to brainstorm the behaviors that you'll want to capture in your application. Tackle them one-by-one, worrying only about the future behaviors once the current example is implemented. All specifications should be listed in the project's README.md file.


//roman conversion function
// function toRoman(number) {
//
//
//   var romanResult = " "
//   decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
//   roman = ['M', 'CM', 'D', 'CD', 'C', 'XC' 'L', 'XL', 'X', 'IX' 'V', 'IV', 'I'];
//    for (var i = 0; i < decimals.length; i++) {
//      while (number >= decimals[i]) {
//        romanResult += roman[i];
//        number -= decimals[i];
//      }
//   }
//   return romanResult;
// }
//business logic

function romanConvert(num) {
  // alert(num);
  if (typeof num !== 'number')
  return false;
  var digits = String(+num).split(""),
    key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
    "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
    "","I","II","III","IV","V","VI","VII","VIII","IX"],
    roman_num = "",
    i = 3;
  while (i--)
  roman_num += (key[+digits.pop() + (i * 10)] || "");
  return Array(+digits.join("") + 1).join("M") + roman_num;
}

// console.log(romanConvert());

//user interface logic

$(document).ready(function() {
  $("#romanForm").submit(function(event) {
    var rInput = parseInt($("#romanInput").val());
    var rResult = romanConvert(rInput);
    $("#romanResult").text(rResult);
      event.preventDefault();
  });
});

// var isLeap = function(whatYear) {
//   if ((whatYear % 100 === 0) && (whatYear % 400 !== 0)) {
//     return false;
//   } else  if (whatYear % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// ......
//   $(document).ready(function() {
//   $("#leapForm").submit(function(event) {
//     var yearInput = parseInt($("#leapInput").val());
//     var lResult = isLeap(yearInput);
//     $("#leapResult").text(lResult);
//     event.preventDefault();
//   });
//
//
//   <div class="container">
//     <h2>Leap Year</h2>
//     <form id="leapForm">
//       <div class="form-group">
//         <label for="leapInput">Enter a year: </label>
//         <input type="number" id="leapInput" placeholder="Year here, y'hear?" class="form-control" required>
//       </div>
//       <button type="submit" name="button" class="btn btn-warning">Quantum Leap Year</button>
//     </form>
//     <h3 id="leapResult"></h3>
//   </div>
// });
//
// $("form#submitBtn").click(function(){
//   var num = $("#input").val();
//   $("#romanResult").text(integer_to_roman);
