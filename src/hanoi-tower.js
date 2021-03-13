const SECONDS_IN_HOUR = 3600;

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const turns = 2 ** disksNumber - 1;
    const seconds = Math.floor(turns / turnsSpeed * SECONDS_IN_HOUR);
    return {
        turns,
        seconds,
    };
};
