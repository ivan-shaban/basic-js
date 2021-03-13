module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    }
    return members
    .filter((m) => m && typeof m === 'string')
    .map((m) => m.replace(/\W/g, '')[0].toUpperCase())
    .sort()
    .join('');
};
