const quotes = require('../data/quotes');

describe('quotes json', () => {
  it('does not have any duplicates', () => {
    const unique = [];
    const duplicates = quotes.filter((o) => {
      if (
        unique.find(
          (i) => i.sentence.toLowerCase() === o.sentence.toLowerCase(),
        )
      )
        return true;
      unique.push(o);
      return false;
    });

    expect(duplicates).toEqual([]);
  });
  it('is sorted alphabetically', () => {
    const quotesSorted = [...quotes].sort((a, b) => {
      const authorA = a.author.toLowerCase();
      const authorB = b.author.toLowerCase();
      if (authorA < authorB) {
        return -1;
      }
      if (authorA > authorB) {
        return 1;
      }
      return 0;
    });
    const isSortedAlphabetically =
      JSON.stringify(quotesSorted) === JSON.stringify(quotes);

    expect(isSortedAlphabetically).toBeTruthy();
  });
});
