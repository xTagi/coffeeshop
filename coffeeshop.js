class CoffeeShop{
    constructor(name, product){
        this.name = name
        this.product = product
    }

    static create ({name, product}) {
        return new CoffeeShop(name, product)
    }
}

module.exports = CoffeeShop