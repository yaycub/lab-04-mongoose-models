const Cat = require('./Cats');

describe('Cats', () => {
  describe('breed', () => {
    it('requires a breed', () => {
      const cat = new Cat({});
      expect(cat.validateSync().errors.breed.message).toEqual('Path `breed` is required.');
    });
  });

  describe('lives', () => {
    it('requires lives', () => {
      const cat = new Cat({
        breed: 'Calico'
      });

      expect(cat.validateSync().errors.lives.message).toEqual('Path `lives` is required.');
    });

    it('lives below 1', () => {
      const cat = new Cat({
        breed: 'Calico',
        lives: 0
      });

      expect(cat.validateSync().errors.lives.message).toEqual('Path `lives` (0) is less than minimum allowed value (1).');
    });

    it('lives above 9', () => {
      const cat = new Cat({
        breed: 'Calico',
        lives: 10
      });

      expect(cat.validateSync().errors.lives.message).toEqual('Path `lives` (10) is more than maximum allowed value (9).');
    });
  });

  describe('name', () => {
    it('requires name', () => {
      const cat = new Cat({
        breed: 'Calico',
        lives: 10
      });

      expect(cat.validateSync().errors.name.message).toEqual('Path `name` is required.');
    });
  });
});
