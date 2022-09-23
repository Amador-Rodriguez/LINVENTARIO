const faker = require('faker');
const boom = require('@hapi/boom');
const { validateData, NOTFOUND, CONFLICT } = require('./../utils');

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
        return new Promise((resolve, rejected) => {

            var sales = this.sales.slice(0, limit);
            if(sales.length > 0){
              resolve(sales);
            } else {
              rejected('');
            }
          }, 5000);
        //return this.sales.slice(0,limit);
    }
    findOne(id){
        const sales = this.sales.find((item) => item.id == id);

    validateData(sales, NOTFOUND, 'No se encontro', (data)=> !data);

    return sales;
        //return this.sales.find((item) => item.id == id);
    }
    findByName(name) {
        const sales = this.sales.find((item) => item.producto == name);
    validateData(sales, NOTFOUND, 'No se encontro', (data)=> !data);
    return sales;
        //return this.sales.find((item) => item.producto == name);
      }

    create(data){
        const newSale = {
            id: faker.random.uuid(),
            ...data,
        };
        this.sales.push(newSale);
        return newSale;
    }

    update(id, changes) {
        const index = this.sales.findIndex((item) => item.id == id);

        if(index == -1) throw boom.notFound('No encontrado');
        
        var currentSale = this.sales[index];
        this.sales[index] = {
            ...currentSale,
            ...changes,
        };
        return this.sales[index];
    }

    replace(id, changes) {
        const index = this.sales.findIndex((item) => item.id == id);

        if(index == -1) throw boom.notFound('No encontrado');

        this.sales[index] = changes;
        return this.sales[index];
      }

    async delete(id){
        const index = this.sales.findIndex((item) => item.id == id);

        if (index == -1) {
            if (index == -1) throw boom.notFound('No encontrado');
            
          }

        this.sales.splice(index,1);
        return{
            message: 'Eliminado',
            id,
        };
    }
}

module.exports = SaleService;