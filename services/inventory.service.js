const faker = require('faker');
class InvService {
    constructor(){
        this.inv = [];
        this.generate();
    }
    generate(){
        const limit = 5;
        for(let i = 0; i < limit; i++){
            this.inv.push({
                id: i,
                usuario: faker.company.companyName(),
                producto: faker.commerce.product(),
                cantidad: faker.random.number(),
                stock : faker.random.number(),
            });
        }
    }
    find(limit){
        return this.inv.slice(0,limit);
    }
    findOne(id){
        return this.inv.find((item) => item.id === id);
    }

    create(data){
        const newInv = {
            id: faker.random.uuid(),
            ...data,
        };
        this.inv.push(newInv);
        return newInv;
    }

    async update(id, changes) {
        const index = this.inv.findIndex((item) => item.id === id);
        var currentInv = this.inv[index];
        this.inv[index] = {
            ...currentInv,
            ...changes,
        };
        return this.inv[index];
    }

    async delete(id){
        const index = this.inv.findIndex((item) => item.id == id);
        this.inv.splice(index,1);
        return{
            message: 'Eliminado',
            id,
        };
    }
}

module.exports = InvService;