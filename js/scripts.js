
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

function removeSpaces(textConvert) {
  var desired = textConvert.replace(/[,.\!\s]/gi, '')
  alert(desired);
}

//user interface logic

$(document).ready(function() {
  $("#romanForm").submit(function(event) {
    var rInput = parseInt($("#romanInput").val());
    var rResult = romanConvert(rInput);
    $("#romanResult").text(rResult);
      event.preventDefault();
  });
});
