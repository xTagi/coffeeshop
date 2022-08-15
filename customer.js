const Order = require('./order')
const Rate = require('./rate')

class Customer{
    constructor(name, location){
        this.name = name
        this.location = location
        this.orders = []
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

}

module.exports = Customer