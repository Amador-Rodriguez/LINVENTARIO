//const faker = require('faker');
const boom = require('@hapi/boom');
const Model = require('../models/provider.model');
const { validateData, NOTFOUND, CONFLICT } = require('./../utils');

class ProviderService {
    constructor(){}
    async createDB(data) {
        const model = new Model(data);
        model.save();
        return data;
      }
    
      async findDB(limit, filter) {
        let providerDB = await Model.find(filter);
        providerDB = limit
          ? providerDB.filter((item, index) => item && index < limit)
          : providerDB;
        if (providerDB == undefined || providerDB == null)
          throw boom.notFound('No se encontro catalogo');
        else if (providerDB.length <= 0)
          throw boom.notFound('No se encontro proveedor');
        return providerDB;
      }
    
      async findOneDB(id) {
        const provider = await Model.findOne({
          _id: id,
        });
        if (provider == undefined || provider == null)
          throw boom.notFound('No se encontro catalogo');
        else if (provider.length <= 0)
          throw boom.notFound('No se encontro proveedor');
        return provider;
      }
    
      async updateDB(id, changes) {
        let provider = await Model.findOne({
          _id: id,
        });
        let providerOriginal = {
          name: provider.name,
          id: provider.id,
        };
        const { name } = changes;
        provider.name = name;
        provider.save();
    
        return {
          original: providerOriginal,
          actualizado: provider,
        };
      }
    
      async deleteDB(id) {
        let provider = await Model.findOne({
          _id: id,
        });
        const { deletedCount } = await Model.deleteOne({
          _id: id,
        });
        if (deletedCount <= 0)
          throw boom.notFound('El proveedor seleccionado no existe');
        return provider;
      }
    /* 
    generate(){
        const limit = 10;
        for(let i = 0; i < limit; i++){
            this.pro.push({
                id: i,
                contacto : faker.commerce.productName(),
                empresa : faker.commerce.productName(),
                correo : faker.commerce.product(),
                direccion : faker.commerce.productName(),
                telefono : faker.random.number(),
            });
        }
    }
    find(limit){
        return new Promise((resolve, rejected) => {

            var pro = this.pro.slice(0, limit);
            if(pro.length > 0){
              resolve(pro);
            } else {
              rejected('');
            }
          }, 5000);
        //return this.pro.slice(0,limit);
    }
    findOne(id){
        const pro = this.pro.find((item) => item.id == id);

    validateData(pro, NOTFOUND, 'No se encontro', (data)=> !data);

    return pro;
        //return this.pro.find((item) => item.id === id);
    }
    findByName(name) {
        const pro = this.pro.find((item) => item.nombre == name);
    validateData(pro, NOTFOUND, 'No se encontro', (data)=> !data);
    return pro;
        //return this.pro.find((item) => item.nombre == name);
      }

    create(data){
        const newPro = {
            id: faker.random.uuid(),
            ...data,
        };
        this.pro.push(newPro);
        return newPro;
    }

     update(id, changes) {
        const index = this.pro.findIndex((item) => item.id == id);

        if(index == -1) throw boom.notFound('No encontrado');

        var currentPro = this.pro[index];
        this.pro[index] = {
            ...currentPro,
            ...changes,
        };
        return this.pro[index];
    }

    replace(id, changes) {
        const index = this.pro.findIndex((item) => item.id == id);

        if(index == -1) throw boom.notFound('No encontrado');

        this.pro[index] = changes;
        return this.pro[index];
      }

    delete(id){
        const index = this.pro.findIndex((item) => item.id == id);

        if (index == -1) {
            if (index == -1) throw boom.notFound('No encontrado');

          }

        this.pro.splice(index,1);
        return{
            message: 'Eliminado',
            id,
        };
    }*/
}

module.exports = ProviderService;
