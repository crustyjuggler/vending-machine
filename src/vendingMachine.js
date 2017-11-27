const VALIDCOINS = [
    { type: "quarter", value: 0.25 },
    { type: "dime", value: 0.10 },
    { type: "nickel", value: 0.05 }
]

const PRODUCTS = [
    { type: "cola", price: 1.0 },
    { type: "chips", price: 0.5 },
    { type: "candy", price: 0.65 }
]

let total
const resetTotal = (reset) => {
    if (reset) total = 0
}

const isValidCoin = (coin) => {
    return VALIDCOINS.find((validCoin) => {
        return validCoin.type === coin
    }) || false
}

const formatCurrency = (number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number)
}

const insertCoin = (coin, reset) => {
    resetTotal(reset)
    let value = isValidCoin(coin).value || false
    if (value) {
        total += value
    }
    return value
}

const vend = (product) => {
    return PRODUCTS.find((listProduct) => {
        return listProduct.type === product
    }) || false
}

const display = () => {
    return total > 0 ? formatCurrency(total) :  'INSERT COINS'
}

const vendingMachine = {
    InsertCoin : insertCoin,
    Vend : vend,
    Display : display
}

export default vendingMachine