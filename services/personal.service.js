const faker = require('faker');
const boom = require('@hapi/boom');
const { validateData, NOTFOUND, CONFLICT } = require('./../utils');

class PersonalService {
    constructor(){
        this.per = [];
        this.generate();
    }
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
        const index = this.per.findIndex((item) => item.id === id);

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
}

module.exports = PersonalService;
