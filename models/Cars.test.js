const Car = require('./Cars');

describe('Car Model', () => {
  describe('make', () => {
    it('requires a make', () => {
      const car = new Car({});
      expect(car.validateSync().errors.make.message).toEqual('Path `make` is required.');
    });
  });

  describe('model', () => {
    it('requires a model', () => {
      const car = new Car({
        make: 'Toyota'
      });

      expect(car.validateSync().errors.model.message).toEqual('Path `model` is required.');
    });
  });

  describe('year', () => {
    it('requires a year', () => {
      const car = new Car({
        make: 'Toyota',
        model: 'Camry'
      });

      expect(car.validateSync().errors.year.message).toEqual('Path `year` is required.');
    });

    it('is under 1900', () => {
      const car = new Car({
        make: 'Toyota',
        model: 'Camry',
        year: '1899'
      });

      expect(car.validateSync().errors.year.message).toEqual('Path `year` (1899) is less than minimum allowed value (1900).');
    });

    it('is over 2019', () => {
      const car = new Car({
        make: 'Toyota',
        model: 'Camry',
        year: '2020'
      });

      expect(car.validateSync().errors.year.message).toEqual('Path `year` (2020) is more than maximum allowed value (2019).');
    });
  });
});
