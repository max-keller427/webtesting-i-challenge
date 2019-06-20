const { repair, succeed, fail, get } = require("./enhancer.js");
// test away!

describe("the repair function", () => {
  it("should increase duribility to 100", () => {
    const sword = { durability: 23, name: "sword", enhancement: 14 };

    const expected = { durability: 100, name: "sword", enhancement: 14 };

    expect(repair(sword)).toEqual(expected);
  });
});

describe("the succeed function", () => {
  it("should increase the enhancement by 1", () => {
    const bow = {
      name: "bow",
      enhancement: 10,
      durability: 40
    };

    const arrow = {
      name: "arrow",
      enhancement: 20,
      durability: 40
    };

    const expected1 = {
      name: "bow",
      enhancement: 11,
      durability: 40
    };

    const expected2 = {
      name: "arrow",
      enhancement: 20,
      durability: 40
    };

    expect(succeed(bow)).toEqual(expected1);
    expect(succeed(arrow)).toEqual(expected2);
  });
});

describe("the fail function", () => {
  it("should reduce dur. by 5 if enh < 15, reduce the dur. by 10 if enh is 15 or 16, reduce dur by 1 if enh is 17 or more", () => {
    const staff = {
      name: "staff",
      durability: 2,
      enhancement: 5
    };

    const scimitar = {
      name: "scimitar",
      durability: 6,
      enhancement: 14
    };

    const shortSword = {
      name: "short sword",
      durability: 9,
      enhancement: 15
    };

    const mace = {
      name: "mace",
      durability: 19,
      enhancement: 16
    };

    //failed
    const failedStaff = {
      name: "staff",
      durability: 0,
      enhancement: 5
    };

    const failedScimitar = {
      name: "scimitar",
      durability: 1,
      enhancement: 14
    };

    const failedShortSword = {
      name: "short sword",
      durability: 0,
      enhancement: 15
    };

    const failedMace = {
      name: "mace",
      durability: 9,
      enhancement: 16
    };

    expect(fail(staff)).toEqual(failedStaff);
    expect(fail(scimitar)).toEqual(failedScimitar);
    expect(fail(shortSword)).toEqual(failedShortSword);
    expect(fail(mace)).toEqual(failedMace);
  });
});
