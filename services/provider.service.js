const faker = require('faker');
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
                nombre : faker.commerce.productName(),
                apellidos : faker.commerce.productName(),
                correo : faker.commerce.product(),
                telefono : faker.datatype.number(),
                extension : faker.random.number(),
                area : faker.commerce.department(),
            });
        }
    }
    find(limit){
        return this.pro.slice(0,limit);
    }
    findOne(id){
        return this.pro.find((item) => item.id === id);
    }
    findByName(name) {
        return this.pro.find((item) => item.nombre == name);
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
        const index = this.pro.findIndex((item) => item.id === id);
        var currentPro = this.pro[index];
        this.pro[index] = {
            ...currentPro,
            ...changes,
        };
        return this.pro[index];
    }

    replace(id, changes) {
        const index = this.pro.findIndex((item) => item.id == id);
        this.pro[index] = changes;
        return this.pro[index];
      }

    delete(id){
        const index = this.pro.findIndex((item) => item.id == id);
        this.pro.splice(index,1);
        return{
            message: 'Eliminado',
            id,
        };
    }
}

module.exports = ProviderService;
