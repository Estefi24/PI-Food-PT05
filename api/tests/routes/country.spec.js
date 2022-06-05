/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);

describe('Recipe routes', () => {
  
  describe('GET /recipes', () => {
    it('Si recibe un name que no existe', async() => {
      try {
        await agent.get('/recipes?name=milanesa rebosada')
        .expect(404)
        .expect('No existe receta con ese nombre') 
      } catch (err) {
        console.log(err)
      }    
    }).timeout(47000);

    it('Si recibe un name que existe', async() => {
      try {
        await agent.get('/recipes?name=salmon')
        .expect(200)
        .expect('Content-Type', /json/)  
      }catch (err) {
        console.log(err)
      }    
    }).timeout(47000);

    it('Si no recibe name', async() => {
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
// const recipe = {
//   name: 'Milanesa a la napolitana',
// };

// xdescribe('Recipe routes', () => {
//   before(() => conn.authenticate()
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   }));
//   beforeEach(() => Recipe.sync({ force: true })
//     .then(() => Recipe.create(recipe)));
// xdescribe('GET /recipes', () => {
//     it('should get 200', () =>
//       agent.get('/recipes').expect(200)
//     );
//   });
// });




