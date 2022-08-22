const colors = require('colors')

function printRate(rate) {
    console.log(`${rate.customer.name.red} rated the order on ${rate.coffeeshop.name.bgRed} app. The rate is 8.5/10 `)
}

function printRateHistory(customer) {
    customer.rates.forEach(printRate)
}

module.exports = printRateHistory