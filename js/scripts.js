
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
var convertedArray = [];
function removeSpaces(textConvert) {
  var converted = textConvert.replace(/[,'.\!\s]/gi, '').toLowerCase();
  var noColumns = Math.floor(Math.sqrt(converted.length));
  var noRows = Math.ceil(converted.length/noColumns);
  for (i = 0; i < noRows; i++) {
    convertedArray.push(converted.substring(noColumns * i, noColumns * (i+1)));
  }
  return convertedArray;
}
var cryptoArray = [];
function cryptoKeeper(textInput) {
  for (i = 0; i < noColumns; i++) {
    for (j = 0; j < noRows; j++) {
      console.log(textInput[j][i]);

    }
  }
}

//user interface logic

$(document).ready(function() {
  $("#romanForm").submit(function(event) {
    var rInput = parseInt($("#romanInput").val());
    var rResult = romanConvert(rInput);
    $("#romanResult").text(rResult);
      event.preventDefault();
  });
  $("#cryptoForm").submit(function(event) {
    var cInput = $("#cryptoInput").val();
    var cResult = removeSpaces(cInput);
    var cResult2 = cryptoKeeper(cResult);
    $("#cryptoResult").text(cResult);
      event.preventDefault();
  });
});
