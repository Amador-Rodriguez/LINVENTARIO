const faker = require('faker');
class SaleService {
    constructor(){
        this.sales = [];
        this.generate();
    }
    generate(){
        const limit = 5;
        for(let i = 0; i < limit; i++){
            this.sales.push({
                id: i,
                codigo : faker.random.number(),
                producto: faker.commerce.product(),
                cantidad: faker.random.number(),
                precio: faker.commerce.price(),
                cliente: faker.company.companyName(),
                fecha: faker.date.recent()
            });
        }
    }
    find(limit){
        return this.sales.slice(0,limit);
    }
    findOne(id){
        return this.sales.find((item) => item.id === id);
    }

    create(data){
        const newSale = {
            id: faker.random.uuid(),
            ...data,
        };
        this.sales.push(newSale);
        return newSale;
    }

    async update(id, changes) {
        const index = this.sales.findIndex((item) => item.id === id);
        var currentSale = this.sales[index];
        this.sales[index] = {
            ...currentSale,
            ...changes,
        };
        return this.sales[index];
    }

    async delete(id){
        const index = this.sales.findIndex((item) => item.id == id);
        this.sales.splice(index,1);
        return{
            message: 'Eliminado',
            id,
        };
    }
}

module.exports = SaleService;