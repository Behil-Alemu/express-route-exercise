const {
    findMode,
     mean,
     median,
    changeToNum,
  } = require("./operations");

  describe("Operations", function () {
    let arrNum;
    beforeEach(function () {

      arrNum = [1,2,3,3];
    })

    let arrStr;
    beforeEach(function () {
      arrStr = ["1","2","3","3"];
    })

    test("get mean from array", function () {
        const result = mean(arrNum);
        expect(result).toEqual(2.25);
      });

    test("get median from array", function () {
        const result = median(arrNum);
        expect(result).toEqual(2.5);
      });

    test("get mode from array", function () {
        const result = findMode(arrNum);
        expect(result).toBe("3");
      });

    test("change array of string to number", function () {
        const result = changeToNum(arrStr);
        expect(result).toEqual(arrNum);
      });


});