const Customer = require('./model/customer')
const CoffeeShop = require('./model/coffeeshop')
const customerDatabase = require('./database/customer-database')
const coffeeshopDatabase = require('./database/coffeeshop-database')

const printOrderHistory = require('./lib/print-order-history')
const printRateHistory = require('./lib/print-rate-history')

const mert = Customer.create({name: 'Mert', location: 'Samsun'})
const tugsad = Customer.create({name: 'Tugsad', location: 'Leipzig'})
const orkun = Customer.create({name: 'Orkun', location: 'Ankara'})
const atlantis = CoffeeShop.create({name: 'Atlantis', product: 'Cold Brew'})

mert.order(atlantis, atlantis.product,mert.location)
tugsad.order(atlantis, atlantis.product,tugsad.location)
orkun.order(atlantis, atlantis.product, orkun.location)

customerDatabase.save([mert, tugsad, orkun])
coffeeshopDatabase.save([atlantis])

const tagi = Customer.create({name: 'Taragay', location: 'Berlin'})
customerDatabase.insert(tagi)

const customers = customerDatabase.load()

customers.forEach(printOrderHistory)

