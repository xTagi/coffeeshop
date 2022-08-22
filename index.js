const Customer = require('./model/customer')
const CoffeeShop = require('./model/coffeeshop')
const {customerDatabase, coffeeshopDatabase} = require('./database')
const baseDatabase = require('./database/base-database')
const printOrderHistory = require('./lib/print-order-history')
const printRateHistory = require('./lib/print-rate-history')

const Mert = customerDatabase.findByName('name', 'Mert')
const Tugsad = customerDatabase.findByName('name', 'Tugsad')
const Atlantis = coffeeshopDatabase.findByCoffeeShopName('name', 'Atlantis')

Mert.order(Atlantis,Atlantis.product,'Nene Hatun')
customerDatabase.update(Mert)

printOrderHistory(Mert)

console.log(customerDatabase.findBy('location', 'Nene Hatun'))
