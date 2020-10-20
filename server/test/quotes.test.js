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
  it('is ordered aphalbetically according to author name', () => {
    let auth_name = 'a';
    const order = quotes.filter((o) => {
      if (auth_name.toLowerCase().localeCompare(o.author.toLowerCase()) > 0)
        return true;
      auth_name = o.author;
      return false;
    })
    expect(order).toEqual([]);
  });
});
