describe("RomanNumeral", function () {
  // it("returns the current time when called with no arguements", function () {
  //   var lowerLimit = new Date().getTime(),
  //   offset = DateTime().offset,
  //   upperLimit = new Date().getTime();
  //   expect(offset).not.toBeLessThan(lowerLimit);
  //   expect(offset).not.toBeGreaterThan(upperLimit);
  // });

  it("returns one 'M' for every 1000 in ArabicNumber", function() {
    var checkArabicNumbers = [new ArabicNumber(1), new ArabicNumber(5), new ArabicNumber(15), new ArabicNumber(52)];
    for (var i = 0; i < checkArabicNumbers.length; i++){
      expect(RomanNumeral(checkArabicNumbers[0])).toEqual('I');
      expect(RomanNumeral(checkArabicNumbers[1]).toEqual('V');
      expect(RomanNumeral(checkArabicNumbers[2]).toEqual('XV');
      expect(RomanNumeral(checkArabicNumbers[3]).toEqual('LII');
    }
  });

  // it("throws an error when called with a single non-Date arguement", function () {
  //   var nonDates = [0, NaN, Infinity, "", "not a date", null, /regex/, {}, []];
  //   for (var i = 0; i < nonDates.length; i++){
  //     expect(DateTime.bind(null, nonDates[i])).toThrow();
  //   }
  // });
  //
  // it("returns a NaN offset when an invalid date is passed in", function () {
  //   var invalidDates = [new Date(864e13+1), new Date(-1e99), new Date("xyz")];
  //   for (var i = 0; i < invalidDates.length; i++) {
  //     expect(isNaN(DateTime(invalidDates[i]).offset)).toBe(true);
  //   }
  // });
});
