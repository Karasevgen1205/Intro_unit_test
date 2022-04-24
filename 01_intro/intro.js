function expect(value) {
    return {
        toBe: exp => {
            if (value === exp) {
                console.log('Success');
            } else {
                console.error(`Value is ${value}, but expectation is ${exp}`)
            }
        }
    }
}

const nativeNull = () => null;
const sum = (a, b) => a + b;

// expect(sum(1, 2)).toBe(3);

module.exports = {sum, nativeNull};
