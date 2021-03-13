const cat = '^^';
module.exports = function countCats(backyards) {
    return backyards.reduce((result1, backyard) => {
        return result1 + backyard.reduce((result2, item) => {
            return result2 + (item === cat ? 1 : 0);
        }, 0);
    }, 0);
};
