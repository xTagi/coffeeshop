const colors = require('colors')

function printOrder(order) {
    console.log(`${order.customer.name.red} ordered a ${order.product.blue} on ${order.coffeeshop.name} app to ${order.location.bgRed.white}.`)
}

function printOrderHistory(customer) {
    if(customer.orders.length ==0)
        return console.log(`${colors.blue(customer.name)} has no orders yet.`)
    customer.orders.forEach(printOrder)
}

module.exports = printOrderHistory