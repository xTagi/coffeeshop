const baseDatabase = require('./base-database')
const Customer = require('../model/customer')

class CustomerDatabase extends baseDatabase {
    findByName(name) {
        const objects = this.load()
    
        return objects.find(o => o.name == name)
    }
}

module.exports = new CustomerDatabase(Customer)