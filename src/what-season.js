const seasons = ['spring', 'summer', 'autumn', 'winter'];
module.exports = function getSeason(date) {
    if (!date) {
        return 'Unable to determine the time of year!';
    }
    if (!(date instanceof Date)) {
        throw new Error('argument is not a Date');
    }
    
    return seasons[((12 + date.getUTCMonth() - 2) % 12) / 3 >> 0];
};
