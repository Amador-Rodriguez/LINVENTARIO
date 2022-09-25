const faker = require('faker');
const boom = require('@hapi/boom');
const { validateData, NOTFOUND, CONFLICT } = require('./../utils');

class ProviderService {
    constructor(){
        this.pro = [];
        this.generate();
    }
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
    }
}

module.exports = ProviderService;
