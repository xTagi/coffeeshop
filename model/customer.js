const Order = require('./order')
const Rate = require('../rate')
const uuid = require('uuid')

class Customer{
    constructor(id = uuid.v4(),name, location, orders = [], rates = []){
        this.id = id
        this.name = name
        this.location = location
        this.orders = orders
        this.rates = rates
    }

    order(coffeeshop, product, location) {
        const order = new Order(coffeeshop, this, product, location)
        
        this.orders.push(order)

        return order
    }

    rate(coffeeshop, product) {
        const rate = new Rate(coffeeshop, this, product)

        this.rates.push(rate)

        return rate
    }

    static create({id, name, location, orders, rates}) {
        return new Customer(id, name, location, orders, rates)
    }

}

module.exports = Customer