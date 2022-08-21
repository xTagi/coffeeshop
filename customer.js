const Order = require('./order')
const Rate = require('./rate')
const uuid = require('uuid')

class Customer{
    constructor(id = uuid.v4(),name, location, orders = []){
        this.id = id
        this.name = name
        this.location = location
        this.orders = orders
        this.rates = []
    }

    order(coffeeshop, product, location){
        const order = new Order(coffeeshop, this, product, location)
        
        this.orders.push(order)

        return order
    }

    rate(coffeeshop, product) {
        const rate = new Rate(coffeeshop, this, product)

        this.rates.push(rate)

        return rate
    }

    static create({id, name, location, orders}) {
        return new Customer(id, name, location, orders)
    }

}

module.exports = Customer