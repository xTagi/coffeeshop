const Customer = require('./customer')
const CoffeeShop = require('./coffeeshop')

const colors = require('colors')

const mert = new Customer('Mert', 'Nene Hatun')
const atlantis = new CoffeeShop('Atlantis')

const order1 = mert.order(atlantis,'Caramel Machiato','Nene Hatun')
const order2 = mert.order(atlantis,'Filter Coffee','InoPark')
const order3 = mert.order(atlantis,'Cold Brew','InoPark')
const order4 = mert.order(atlantis,'Cool Lime','Karadigin Deresi')

function printOrder(order) {
    console.log(`${order.customer.name.red} ordered a ${order.product.blue} on ${order.coffeeshop.name.yellow} app to ${order.location.bgRed.white}.`)
}

function printOrderHistory(customer) {
    customer.orders.forEach(printOrder)
}

printOrderHistory(mert)