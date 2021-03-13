const com1 = '--discard-next';
const com2 = '--discard-prev';
const com3 = '--double-next';
const com4 = '--double-prev';

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('argument is not an array');
    }
    let prevWasSkipped = false;
    let doubleNext = false;
    let skipNext = false;
    return arr.reduce((result, value) => {
        if (value === com1) {
            skipNext = true;
        } else if (value === com2) {
            if (prevWasSkipped) {
                prevWasSkipped = false;
            } else if (arr.length && result.length) {
                result.pop();
            }
        } else if (value === com3) {
            doubleNext = true;
        } else if (value === com4) {
            if (prevWasSkipped) {
                prevWasSkipped = false;
            } else if (arr.length && result.length) {
                result.push(result[result.length - 1]);
            }
        } else if (skipNext) {
            skipNext = false;
            prevWasSkipped = true;
        } else if (doubleNext) {
            prevWasSkipped = false;
            doubleNext = false;
            result.push(value, value);
        } else {
            prevWasSkipped = false;
            result.push(value);
        }
        return result;
    }, []);
};
