const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        this.chain.push(value !== undefined ? `( ${value} )` : '( )');
        return this;
    },
    removeLink(position) {
        if (position < 0 || position >= this.chain.length) {
            this.chain = [];
            throw new Error('chain was finished');
        }
        this.chain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        const result = this.chain.join('~~');
        this.chain = [];
        return result;
    }
};

module.exports = chainMaker;
