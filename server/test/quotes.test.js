const quotes = require(`./../data/quotes`);

describe('quotes json', () => {
  it('does not have any duplicates', () => {
    let unique = []
    let duplicates = quotes.filter(o => {
      if (unique.find(i => i.sentence === o.sentence)) return true;
      unique.push(o);
      return false;
    })

    expect(duplicates).toEqual([]);
  });
});
