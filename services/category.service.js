//const faker = require('faker');
const boom = require('@hapi/boom');
const Model = require('../models/category.model');
//const { validateData, NOTFOUND, CONFLICT } = require('./../utils');

class CategoryService {
    constructor(){}

    async createDB(data) {
        const model = new Model(data);
        model.save();
        return data;
      }
    
      async findDB(limit, filter) {
        let categoriesDB = await Model.find(filter);
        categoriesDB = limit
          ? categoriesDB.filter((item, index) => item && index < limit)
          : categoriesDB;
        if (categoriesDB == undefined || categoriesDB == null)
          throw boom.notFound('No se encontro catalogo');
        else if (categoriesDB.length <= 0)
          throw boom.notFound('No se encontro ningún registro');
        return categoriesDB;
      }
    
      async findOneDB(id) {
        const category = await Model.findOne({
          _id: id,
        });
        if (category == undefined || category == null)
          throw boom.notFound('No se encontro catalogo');
        else if (category.length <= 0)
          throw boom.notFound('No se encontro ningún registro');
        return category;
      }
    
      async updateDB(id, changes) {
        let category = await Model.findOne({
          _id: id,
        });
        let categoryOriginal = {
          name: category.name,
          id: category.id,
        };
        const { name } = changes;
        category.name = name;
        category.save();
    
        return {
          original: categoryOriginal,
          actualizado: category,
        };
      }
    
      async deleteDB(id) {
        let category = await Model.findOne({
          _id: id,
        });
        const { deletedCount } = await Model.deleteOne({
          _id: id,
        });
        if (deletedCount <= 0)
          throw boom.notFound('El registro seleccionado no existe');
        return category;
      }
    /* 
    generate(){
        const limit = 5;
        for(let i = 0; i < limit; i++){
            this.cat.push({
                id: i,
                nombre : faker.commerce.product(),
            });
        }
    }

    find(limit){
        return new Promise((resolve, rejected) => {

            var cat = this.cat.slice(0, limit);
            if(cat.length > 0){
              resolve(cat);
            } else {
              rejected('');
            }
          }, 5000);
        //return this.cat.slice(0,limit);
    }
    findOne(id){
        const cat = this.cat.find((item) => item.id == id);

        validateData(cat, NOTFOUND, 'No se encontro', (data)=> !data);

        return cat;
        //return this.cat.find((item) => item.id === id);
    }

    findByName(name) {
        const cat = this.cat.find((item) => item.nombre == name);
        validateData(cat, NOTFOUND, 'No se encontro', (data)=> !data);
        return cat;
        //return this.cat.find((item) => item.nombre == name);
      }

    create(data){
        const newCat = {
            id: faker.random.uuid(),
            ...data,
        };
        this.cat.push(newCat);
        return newCat;
    }

    update(id, changes) {
        const index = this.cat.findIndex((item) => item.id == id);

        if(index == -1) throw boom.notFound('No encontrado');

        var currentCat = this.cat[index];
        this.cat[index] = {
            ...currentCat,
            ...changes,
        };
        return this.cat[index];
    }

    replace(id, changes) {
        const index = this.cat.findIndex((item) => item.id == id);

        if(index == -1) throw boom.notFound('No encontrado');

        this.cat[index] = changes;
        return this.cat[index];
      }

     delete(id){
        const index = this.cat.findIndex((item) => item.id == id);

        if (index == -1) throw boom.notFound('No encontrado');

        this.cat.splice(index,1);
        return{
            message: 'Eliminado',
            id,
        };
    }
    */
}

module.exports = CategoryService;
