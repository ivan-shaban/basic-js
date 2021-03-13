const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LOG_OF_2 = Math.log(2);

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity !== 'string') {
        return false;
    }
    
    sampleActivity = parseFloat(sampleActivity);
    if (isNaN(sampleActivity) || sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) {
        return false;
    }
    
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (LOG_OF_2 / HALF_LIFE_PERIOD));
};
