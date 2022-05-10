const { Lodash } = require("./sync");

describe("lodash: compact", () => {
  let _ = new Lodash();
  let array;

  beforeEach(() => {
    // перед каждым тестом обновляет стартовые данные так как какие-то тесты могут изменять входные данные
    array = [false, 0, 43, "hello", null, true];
  });

  afterAll(() => {
    _ = new Lodash();
  });

  test("should be defined", () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });

  test("should working array be editable", () => {
    array.push(...["one", "two"]);
    expect(array).toContain("one", "two");
  });

  test("should remove falsy values from array", () => {
    const result = [43, "hello", true];
    // expect(_.compact(array)).toBe(result); // свалиться тэст т.к. он для прмитивов
    expect(_.compact(array)).toEqual(result); // для объектов
  });

  test("should NOT contains falsy values from array", () => {
    expect(_.compact(array)).not.toContain(false); // для объектов на содержание
    expect(_.compact(array)).not.toContain(0); // для объектов на содержание
    expect(_.compact(array)).not.toContain(null); // для объектов на содержание
    expect(_.compact(array)).not.toContain(""); // для объектов на содержание
  });
});

describe("Lodash groupBy", () => {
  let _ = new Lodash();

  test("should be defined", () => {
    expect(_.groupBy).toBeDefined();
    expect(_.groupBy).not.toBeUndefined();
  });

  test("should group array items by Math.floor", () => {
    const array = [2.2, 2.4, 4.2, 3.1];
    const result = {
      2: [2.2, 2.4],
      4: [4.2],
      3: [3.1],
    };
    expect(_.groupBy(array, Math.floor)).toEqual(result);
  });

  test("should group array items by length", () => {
    const array = ["one", "two", "three"];
    const result = {
      5: ["three"],
      3: ["one", "two"],
    };
    expect(_.groupBy(array, "length")).toEqual(result);
  });

  test("should NOT return array", () => {
    expect(_.groupBy([], Math.trunc())).not.toBeInstanceOf(Array);
  });
});
