const Customer = require('./customer')
const CoffeeShop = require('./coffeeshop')
const db = require('./database')

const colors = require('colors')

const mert = new Customer('Mert', 'Nene Hatun')
const atlantis = new CoffeeShop('Atlantis')

const order1 = mert.order(atlantis,'Caramel Machiato','Nene Hatun')
const rate1 = mert.rate(atlantis,'Caramel Machiato')
const order2 = mert.order(atlantis,'Filter Coffee','InoPark')
const order3 = mert.order(atlantis,'Cold Brew','InoPark')
const order4 = mert.order(atlantis,'Cool Lime','Karadigin Deresi')

function printOrder(order) {
    console.log(`${order.customer.name.red} ordered a ${order.product.blue} on ${order.coffeeshop.name.yellow} app to ${order.location.bgRed.white}.`)
}

function printOrderHistory(customer) {
    customer.orders.forEach(printOrder)
}

db.save('Customers' , [mert])

const customers = db.load('customers')

//console.log(customers)
//customers.forEach(printOrderHistory)

printOrderHistory(mert)

//console.log(`${rate1.customer.name} rated ${rate1.product}. The rate is 8.5/10`)