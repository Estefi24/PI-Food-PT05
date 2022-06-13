const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);


// const recipe = {
//   name: 'Milanea a la napolitana',
// };

// describe('Recipe routes', () => {
//   before(() => conn.authenticate()
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   }));
//   beforeEach(() => Recipe.sync({ force: true })
//     .then(() => Recipe.create(recipe)));
//   describe('GET /recipes', () => {
//     it('should get 200', () =>
//       agent.get('/recipes').expect(200)
//     );
//   });
// });


describe('Recipe routes', () => {
  
  describe('GET /recipes', () => {
    it('If you receive a name that does not exist', async() => {
      try {
        await agent.get('/recipes?name=empanadas')
        .expect(404)
        .expect('There is no recipe with that name') 
      } catch (err) {
        console.log(err)
      }    
    }).timeout(47000);



    it('If you receive a name that exists', async() => {
      try {
        await agent.get('/recipes?name=asado')
        .expect(200)
        .expect('Content-Type', /json/)  
      }catch (err) {
        console.log(err)
      }    
    }).timeout(47000);

    it('If you dont get name', async() => {
      try {
        await agent.get('/recipes')
        .expect(200)
        .expect('Content-Type', /json/)  
      }catch (err) {
        console.log(err)
      }    
    }).timeout(47000);
  }) 

  describe('GET /recipes/:id', () => {
    it('should get 404', async() => {
      try {
        await agent.get('/recipes/a4b32')
        .expect(404)
        .expect('No hay resultado') 
      } catch (err) {
        console.log(err)
      }    
    }).timeout(47000);

    it('should get 200', async() => {
      try {
        await agent.get('/recipes/715594')
        .expect(200)
        .expect('Content-Type', /json/)  
      }catch (err) {
        console.log(err)
      }    
    }).timeout(47000);
  }) 
});

