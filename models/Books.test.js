const Book = require('./Books');

describe('books', () => {
  describe('title', () => {
    it('requires a name', () => {
      const book = new Book({});

      expect(book.validateSync().errors.title.message).toEqual('Path `title` is required.');
    });
  });

  describe('isFiction', () => {
    it('requires isFiction', () => {
      const book = new Book({
        title: 'Node for Beginners'
      });

      expect(book.validateSync().errors.isFiction.message).toEqual('Path `isFiction` is required.');
    });
  });

  describe('pages', ()=> {
    it('requires pages', () => {
      const book = new Book({
        title: 'Node for Beginners',
        isFiction: false
      });

      expect(book.validateSync().errors.pages.message).toEqual('Path `pages` is required.');
    });

    it('pages less than 0', () => {
      const book = new Book({
        title: 'Node for Beginners',
        isFiction: false,
        pages: -1
      });

      expect(book.validateSync().errors.pages.message).toEqual('Path `pages` (-1) is less than minimum allowed value (0).');
    });
  });
});
