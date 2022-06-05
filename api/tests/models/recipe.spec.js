const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
    beforeEach(() => Recipe.sync({ force: false }));
  describe('Validators', () => {
    describe('Title', () => {
      it('Deberia arrojar un error si el title es null', async() => {
        try {
            await Recipe.create({summary: 'saludable, rica y liviana'});
        } catch (err) {
            expect(err.message)
        }
      });
    });

    describe('Summary', () => {
        it('Deberia arrojar un error si el summary es null', async() => {
          try {
              await Recipe.create({title: 'ensalada palta y tomate'});
          } catch (err) {
              expect(err.message)
          }
        });
    });

    describe('Aggregate Likes', () => {
        it('No deberia poder colocar un string en aggregateLikes', (done) => {
            Recipe.create({
                    title: 'ensalada palta y tomate',
                    summary: 'saludable, rica y liviana',
                    aggregateLikes: 'This is invalid data',
                })
                .then(() => done('No debería haberse creado'))
                .catch(() => done());
        });
    });

    describe('Health Score', () => {
        it('No deberia poder colocar un string en healthScore', (done) => {
            Recipe.create({
                    title: 'ensalada palta y tomate',
                    summary: 'saludable, rica y liviana',
                    healthScore: 'This is invalid data',
                })
                .then(() => done('No debería haberse creado'))
                .catch(() => done());
        });
    });
    
  });
});
// xdescribe('Recipe model', () => {
//   before(() => conn.authenticate()
//     .catch((err) => {
//       console.error('Unable to connect to the database:', err);
//     }));
// xdescribe('Validators', () => {
//     beforeEach(() => Recipe.sync({ force: true }));
//     describe('name', () => {
//       it('should throw an error if name is null', (done) => {
//         Recipe.create({})
//           .then(() => done(new Error('It requires a valid name')))
//           .catch(() => done());
//       });
//       it('should work when its a valid name', () => {
//         Recipe.create({ name: 'Milanesa a la napolitana' });
//       });
//     });
//   });
// });


