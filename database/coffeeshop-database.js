const baseDatabase = require('./base-database')
const CoffeeShop = require('../coffeeshop')

class coffeeshopDatabase extends baseDatabase {
    findByCoffeeShopName(name) {
        return this.findBy('name', name)
    }

    findByLocation(location) {
        return this.findBy('location', location)
    }
}

module.exports = new coffeeshopDatabase(CoffeeShop)