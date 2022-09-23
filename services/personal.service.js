const faker = require('faker');
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
        return this.per.slice(0,limit);
    }
    findOne(id){
        return this.per.find((item) => item.id === id);
    }

    create(data){
        const newPer = {
            id: faker.random.uuid(),
            ...data,
        };
        this.per.push(newPer);
        return newPer;
    }

    async update(id, changes) {
        const index = this.per.findIndex((item) => item.id === id);
        var currentPer = this.per[index];
        this.per[index] = {
            ...currentPer,
            ...changes,
        };
        return this.per[index];
    }

    async delete(id){
        const index = this.per.findIndex((item) => item.id == id);
        this.per.splice(index,1);
        return{
            message: 'Eliminado',
            id,
        };
    }
}

module.exports = PersonalService;
