const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
describe('Validators', () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Recipe.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Recipe.create({ name: 'Papas Fritas' });
      });
    });
  });
});

describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
    beforeEach(() => Recipe.sync({ force: false }));
  describe('Validators', () => {
    describe('Title', () => {
      it('It should throw an error if the title is null', async() => {
        try {
            await Recipe.create({summary: 'empanadas'});
        } catch (err) {
            expect(err.message)
        }
      });
    })
  });
});

describe('Summary', () => {
  it('It should throw an error if the summary is null', async() => {
    try {
        await Recipe.create({title: 'pizza'});
    } catch (err) {
        expect(err.message)
    }
  });
});

describe('Aggregate Likes', () => {
  it('You should not be able to put a string in aggregateLikes', (done) => {
      Recipe.create({
              title: 'pizza',
              summary: 'empanadas',
              aggregateLikes: 'This is invalid data',
          })
          .then(() => done('should not have been created'))
          .catch(() => done());
  });
});

describe('Health Score', () => {
  it('You should not be able to put a string in healthScore', (done) => {
      Recipe.create({
              title: 'pizza',
              summary: 'empanadas',
              healthScore: 'This is invalid data',
          })
          .then(() => done('should not have been created'))
          .catch(() => done());
  });
});