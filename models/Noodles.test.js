const Noodle = require('./Noodles');

describe('Noodles', () => {
  describe('name', () => {
    it('requires name', () => {
      const noodle = new Noodle({});

      expect(noodle.validateSync().errors.name.message).toEqual('Path `name` is required.');
    });
  });

  describe('isAlDente', () => {
    it('requires isAlDente', () => {
      const noodle = new Noodle({
        name: 'Ramen'
      });

      expect(noodle.validateSync().errors.isAlDente.message).toEqual('Path `isAlDente` is required.');
    });
  });

  describe('howMany', () => {
    it('requires howMany', () => {
      const noodle = new Noodle({
        name: 'Ramen',
        isAlDente: true
      });

      expect(noodle.validateSync().errors.howMany.message).toEqual('Path `howMany` is required.');
    });

    it('howMany below 50', () => {
      const noodle = new Noodle({
        name: 'Ramen',
        isAlDente: true,
        howMany: 1
      });

      expect(noodle.validateSync().errors.howMany.message).toEqual('Path `howMany` (1) is less than minimum allowed value (50).');
    });
  });
});
