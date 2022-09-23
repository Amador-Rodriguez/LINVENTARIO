const faker = require('faker');
class UserService {
    constructor(){
        this.users = [];
        this.generate();
    }
    generate(){
        const limit = 5;
        for(let i = 0; i < limit; i++){
            this.users.push({
                id: i,
                nombre : faker.name.findName(),
                email: faker.internet.email(),
                tienda: faker.company.companyName(),
                foto_perfil: faker.image.imageUrl(),
                tipo: 'Administrador/Colaborador',
            });
        }
    }
    find(limit){
        return this.users.slice(0,limit);
    }
    findOne(id){
        return this.users.find((item) => item.id == id);
    }
    findByName(name) {
        return this.users.find((item) => item.nombre == name);
      }

    create(data){
        const newUser = {
            id: faker.random.uuid(),
            ...data,
        };
        this.users.push(newUser);
        return newUser;
    }

    update(id, changes) {
        const index = this.users.findIndex((item) => item.id == id);
        var currentUser = this.users[index];
        this.users[index] = {
            ...currentUser,
            ...changes,
        };
        return this.users[index];
    }

    replace(id, changes) {
        const index = this.users.findIndex((item) => item.id == id);
        this.users[index] = changes;
        return this.users[index];
      }

    delete(id){
        const index = this.users.findIndex((item) => item.id == id);
        this.users.splice(index,1);
        return{
            message: 'Eliminado',
            id,
        };
    }
}

module.exports = UserService;