const quotes = require('../data/quotes');

describe('quotes json', () => {
  it('does not have any duplicates', () => {
    const unique = [];
    const duplicates = quotes.filter((o) => {
      if (unique.find((i) => i.sentence === o.sentence)) return true;
      unique.push(o);
      return false;
    });

    expect(duplicates).toEqual([]);
  });
});
