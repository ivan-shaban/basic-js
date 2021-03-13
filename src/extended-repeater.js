module.exports = function repeater(str, {
    repeatTimes = 1,
    separator = '+',
    addition,
    additionRepeatTimes = 1,
    additionSeparator = '|',
}) {
    const res = [];
    for (let i = 0; i < repeatTimes; i++) {
        res.push(String(str) + (addition !== undefined ? repeater(addition, {
            repeatTimes: additionRepeatTimes,
            separator: additionSeparator,
        }) : ''));
    }
    return res.join(separator);
};
