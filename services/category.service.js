const faker = require('faker');
const boom = require('@hapi/boom');
const { validateData, NOTFOUND, CONFLICT } = require('./../utils');

class CategoryService {
    constructor(){
        this.cat = [];
        this.generate();
    }
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
}

module.exports = CategoryService;
