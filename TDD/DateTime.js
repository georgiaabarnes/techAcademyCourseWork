"use script";
// var RomanNumeralObj = ["M", "D", "C", "L", "X", "V", "I"];
// var ValueObj = [1000, 500, 100, 50, 10, 5, 1];

var RomanNumeral = (function () {
  function getRomanNumeral(arabicNumber) {
    for (var i = 0; i < RomanNumeralObj.length; i++){
      divideByNextValue(RomanNumeralObj[i], ValueObj[i], arabicNumber, RomanNumeral);
      return RomanNumeral;
    }
    return getRomanNumeral(new ArabicNumber());
  }
})();

function divideByNextValue(RomanInput, ValueObj, arabicNumber, RomanNumeral) {
  var RomanNumberRecurrence = arabicNumber / ValueObj;
  for(var i = 0; i < RomanNumberRecurrence; i++){
    RomanNumeral += RomanInput;
  }
  arabicNumber = arabicNumber % ValueObj;
  return RomanNumeral, arabicNumber;
}
