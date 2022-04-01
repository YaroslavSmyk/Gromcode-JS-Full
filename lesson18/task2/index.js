const wallet = {
  transactions: [1, 2, 5, 100, 13],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  },
};
