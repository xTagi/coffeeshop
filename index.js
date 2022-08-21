const Customer = require('./customer')
const CoffeeShop = require('./coffeeshop')
const {customerDatabase, coffeeshopDatabase} = require('./database')

const colors = require('colors')
const BaseDatabase = require('./database/base-database')

/* const mert = Customer.create({name: 'Mert', location: 'Nene Hatun'})
const tugsad = Customer.create({name:'tugsad', location: 'Leipzig'}) */
const atlantis = CoffeeShop.create({name: 'Atlantis', product: 'Filter Coffee'})
/* coffeeshopDatabase.save([atlantis]) */


/* const order1 = mert.order(atlantis,'Caramel Machiato','Nene Hatun')
const rate1 = mert.rate(atlantis,'Caramel Machiato')
const order2 = tugsad.order(atlantis,'Espresso','Leipzig')
const order3 = mert.order(atlantis,'Cold Brew','InoPark')
const order4 = mert.order(atlantis,'Cool Lime','Karadigin Deresi') */

function printOrder(order) {
    console.log(`${order.customer.name.red} ordered a ${order.product.blue} on ${order.coffeeshop.name} app to ${order.location.bgRed.white}.`)
}

function printOrderHistory(customer) {
   /*  if(customer.orders.length ==0)
        return console.log(`${colors.blue(customer.name)} has no orders yet.`) */
    customer.orders.forEach(printOrder)
}

/* customerDatabase.save([mert, tugsad]) */



/* printOrderHistory(mert) */
//customers.forEach(printOrderHistory)

/* const mert = customerDatabase.findByName('Mert') */

/* const orderx= mert.order(atlantis, 'Beypazarı Maden Suyu','İstanbul')
printOrderHistory(mert)
customerDatabase.update(mert)
printOrderHistory(mert) */

console.log(customerDatabase.findBy('name', 'tugsad'))
/*

customerDatabase.update(mert)
const customers = customerDatabase.load()
customers.forEach(printOrderHistory) */

/* 


const customers = db.load('customers') */
//customers.forEach(p => console.log(p.name))

//console.log(customers)


//console.log(`${rate1.customer.name} rated ${rate1.product}. The rate is 8.5/10`)