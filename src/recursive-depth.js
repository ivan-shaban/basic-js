module.exports = class DepthCalculator {
    calculateDepth(arr) {
        return arr.reduce((result, item) => {
            return Math.max(result, Array.isArray(item) ? 1 + this.calculateDepth(item) : 0);
        }, 1);
    }
};
