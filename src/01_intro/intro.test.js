const {sum, nativeNull} = require('./intro.js');

describe('Sum function:', () => { // Объединили через discribe функции для одной функции
    test('should return sum of two values', () => {
        expect(sum(1, 3)).toBe(4); // для сравнения строк или чисел
        expect(sum(1, 3)).toEqual(4); // для сравнения строк или чисел
    });

    test('should return value correctly comparing to other values', () => {
        expect(sum(1, 3)).toBeGreaterThan(3) // для сравнения чисел
        expect(sum(1, 3)).toBeGreaterThanOrEqual(4) // для сравнения чисел
        expect(sum(1, 3)).toBeLessThan(5) // для сравнения чисел
        expect(sum(1, 3)).toBeLessThanOrEqual(4) // для сравнения чисел
    })

    test('sould sum 2 float values correctly', () => {
        // expect(sum(0.1, 0.2)).toBe(0.3) // свалиться так как сумма будет 0.30000000000000004 из-за погрешности
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3) // будет норм
    })
})

describe('Native null function:', () => {
    test ('Native null should return false value null', () => {
        expect(nativeNull()).toBe(null); //проверка на нал
        expect(nativeNull()).toBeNull(); //проверка на нал
        expect(nativeNull()).toBeFalsy(); // не проходит на иф
        expect(nativeNull()).toBeDefined(); // проверить определен ли налл
        expect(nativeNull()).not.toBeTruthy(); // проверить что он не true
    })
})