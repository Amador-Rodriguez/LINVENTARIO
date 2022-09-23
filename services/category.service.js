const faker = require('faker');
class CategoryService {
    constructor(){
        this.cat = [];
        this.generate();
    }
    generate(){
        const limit = 10;
        for(let i = 0; i < limit; i++){
            this.cat.push({
                id: i,
                nombre : faker.commerce.product(),
            });
        }
    }
    find(limit){
        return this.cat.slice(0,limit);
    }
    findOne(id){
        return this.cat.find((item) => item.id === id);
    }

    create(data){
        const newCat = {
            id: faker.random.uuid(),
            ...data,
        };
        this.cat.push(newCat);
        return newCat;
    }

    async update(id, changes) {
        const index = this.cat.findIndex((item) => item.id === id);
        var currentCat = this.cat[index];
        this.cat[index] = {
            ...currentCat,
            ...changes,
        };
        return this.cat[index];
    }

    async delete(id){
        const index = this.cat.findIndex((item) => item.id == id);
        this.cat.splice(index,1);
        return{
            message: 'Eliminado',
            id,
        };
    }
}

module.exports = CategoryService;
