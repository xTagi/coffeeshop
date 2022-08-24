const Customer = require('./model/customer')
const CoffeeShop = require('./model/coffeeshop')
const {customerDatabase, coffeeshopDatabase} = require('./database')
const baseDatabase = require('./database/base-database')
const printOrderHistory = require('./lib/print-order-history')
const printRateHistory = require('./lib/print-rate-history')

const mert = customerDatabase.findByName('Mert')
const tugsad = customerDatabase.findByName('Tugsad')
const atlantis = coffeeshopDatabase.findByCoffeeShopName('Atlantis')


mert.order(atlantis, 'White Mocha', 'Nene Hatun')
customerDatabase.update(mert)

printOrderHistory(mert)
