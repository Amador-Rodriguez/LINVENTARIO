//const faker = require('faker');
const boom = require('@hapi/boom');
const { validateData, NOTFOUND, CONFLICT } = require('./../utils');
const Model = require('../models/personal.model');

class PersonalService {
    constructor(){}

    async createDB(data) {
        const model = new Model(data);
        model.save();
        return data;
      }
    
      async findDB(limit, filter) {
        let personalDB = await Model.find(filter);
        personalDB = limit
          ? personalDB.filter((item, index) => item && index < limit)
          : personalDB;
        if (personalDB == undefined || personalDB == null)
          throw boom.notFound('No se encontro catalogo');
        else if (personalDB.length <= 0)
          throw boom.notFound('No se encontro ningún registro');
        return personalDB;
      }
    
      async findOneDB(id) {
        const personal = await Model.findOne({
          _id: id,
        });
        if (personal == undefined || personal == null)
          throw boom.notFound('No se encontro personal');
        else if (personal.length <= 0)
          throw boom.notFound('No se encontro ningún registro');
        return personal;
      }
    
      async updateDB(id, changes) {
        let personal = await Model.findOne({
          _id: id,
        });
        let personalOriginal = {
          name: personal.name,
          id: personal.id,
        };
        const { name } = changes;
        personal.name = name;
        personal.save();
    
        return {
          original: personalOriginal,
          actualizado: personal,
        };
      }
    
      async deleteDB(id) {
        let personal = await Model.findOne({
          _id: id,
        });
        const { deletedCount } = await Model.deleteOne({
          _id: id,
        });
        if (deletedCount <= 0)
          throw boom.notFound('El registro seleccionado no existe');
        return personal;
      }
    /* 
    generate(){
        const limit = 10;
        for(let i = 0; i < limit; i++){
            this.per.push({
                id: i,
                nombre : faker.commerce.productName(),
                apellidos : faker.commerce.productName(),
                correo : faker.commerce.product(),
                telefono : faker.random.number(),
                extension : faker.random.number(),
                area : faker.commerce.department(),
            });
        }
    }
    find(limit){
        return new Promise((resolve, rejected) => {

            var per = this.per.slice(0, limit);
            if(per.length > 0){
              resolve(per);
            } else {
              rejected('');
            }
          }, 5000);

        //return this.per.slice(0,limit);
    }
    findOne(id){
        const per = this.per.find((item) => item.id == id);

        validateData(per, NOTFOUND, 'No se encontro', (data)=> !data);

        return per;
        //return this.per.find((item) => item.id === id);
    }
    findByName(name) {
        const per = this.per.find((item) => item.nombre == name);
        validateData(per, NOTFOUND, 'No se encontro', (data)=> !data);
        return per;
        //return this.per.find((item) => item.nombre == name);
      }

    create(data){
        const newPer = {
            id: faker.random.uuid(),
            ...data,
        };
        this.per.push(newPer);
        return newPer;
    }

    update(id, changes) {
        const index = this.per.findIndex((item) => item.id == id);

        if(index == -1) throw boom.notFound('No encontrado');

        var currentPer = this.per[index];
        this.per[index] = {
            ...currentPer,
            ...changes,
        };
        return this.per[index];
    }

    replace(id, changes) {
        const index = this.per.findIndex((item) => item.id == id);

        if(index == -1) throw boom.notFound('No encontrado');

        this.per[index] = changes;
        return this.per[index];
      }

    delete(id){
        const index = this.per.findIndex((item) => item.id == id);

        if (index == -1) {
            if (index == -1) throw boom.notFound('No encontrado');

          }

        this.per.splice(index,1);
        return{
            message: 'Eliminado',
            id,
        };
    }
    */
}

module.exports = PersonalService;
