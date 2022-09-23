const faker = require('faker');
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
        return this.cat.slice(0,limit);
    }
    findOne(id){
        return this.cat.find((item) => item.id === id);
    }

    findByName(name) {
        return this.cat.find((item) => item.nombre == name);
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
        var currentCat = this.cat[index];
        this.cat[index] = {
            ...currentCat,
            ...changes,
        };
        return this.cat[index];
    }

    replace(id, changes) {
        const index = this.cat.findIndex((item) => item.id == id);
        this.cat[index] = changes;
        return this.cat[index];
      }

     delete(id){
        const index = this.cat.findIndex((item) => item.id == id);
        this.cat.splice(index,1);
        return{
            message: 'Eliminado',
            id,
        };
    }
}

module.exports = CategoryService;
