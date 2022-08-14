const Order = require('./order')

class Customer{
    constructor(name, location){
        this.name = name
        this.location = location
        this.orders = []
    }

    order(coffeeshop, product, location){
        const order = new Order(coffeeshop, this, product, location)
        
        this.orders.push(order)

        return order
    }
}

module.exports = Customer