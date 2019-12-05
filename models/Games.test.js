const Game = require('./Games');

describe('games model', () => {
  describe('title', () => {
    it('requires a title', () => {
      const game = new Game({});

      expect(game.validateSync().errors.title.message).toEqual('Path `title` is required.');
    });
  });

  describe('platform', () => {
    it('requires a platform', () => {
      const game = new Game({
        title: 'Outer Worlds'
      });

      expect(game.validateSync().errors.platform.message).toEqual('Path `platform` is required.');
    });
  });

  describe('publishedOn', () => {
    it('requires a publishedOn', () => {
      const game = new Game({
        title: 'Outer Worlds',
        platform: 'PC/Xbox/PS4'
      });
      
      expect(game.validateSync().errors.publishedOn.message).toEqual('Path `publishedOn` is required.');
    });

    it('publishedOn is less than 1970', () => {
      const game = new Game({
        title: 'Outer Worlds',
        platform: 'PC/Xbox/PS4',
        publishedOn: 1969
      });

      expect(game.validateSync().errors.publishedOn.message).toEqual('Path `publishedOn` (1969) is less than minimum allowed value (1970).');
    });

    it('publishedOn is more than 2019', () => {
      const game = new Game({
        title: 'Outer Worlds',
        platform: 'PC/Xbox/PS4',
        publishedOn: 2020
      });

      expect(game.validateSync().errors.publishedOn.message).toEqual('Path `publishedOn` (2020) is more than maximum allowed value (2019).');
    });
  });

  describe('playes', () => {
    it('requires players', () => {
      const game = new Game({
        title: 'Outer Worlds',
        platform: 'PC/Xbox/PS4',
        publishedOn: 2019
      });
      
      expect(game.validateSync().errors.players.message).toEqual('Path `players` is required.');
    });

    it('players is more than 16', () => {
      const game = new Game({
        title: 'Outer Worlds',
        platform: 'PC/Xbox/PS4',
        publishedOn: 2019,
        players: 17
      });
      
      expect(game.validateSync().errors.players.message).toEqual('Path `players` (17) is more than maximum allowed value (16).');
    });
  });
});
