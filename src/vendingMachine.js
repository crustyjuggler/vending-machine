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

let vendMessageIndicator = false
let insertedCoins = []
let total = 0.0
let displayText = "INSERT COINS"

const resetTotals = () => {
    total = 0.0
    insertedCoins = []
    displayText = "INSERT COINS"
    vendMessageIndicator = false
}

const isValidCoin = (coin) => {
    return VALIDCOINS.find((validCoin) => {
        return validCoin.type === coin
    }) || false
}

const getProduct = (selectedProduct) => {
    return PRODUCTS.find((listProduct) => {
        return listProduct.type === selectedProduct
    }) || false
}

const formatCurrency = (number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number)
}

const insertCoin = (coin, reset) => {
    if (reset) resetTotals()
    let value = isValidCoin(coin).value || false
    if (value) {
        total += value
        insertedCoins.push(coin)
    }
    return insertedCoins
}

const vend = (selectedProduct) => {
    let product = getProduct(selectedProduct)
    if (product) {
        vendMessageIndicator = true
        if (total >= product.price) {
            total = 0.0
            vendMessageIndicator = true
            displayText = "THANK YOU"
        } else {
            displayText = "PRICE " + formatCurrency(product.price)
        }
    }
    return product || false
}

const display = () => {
    let message = ""
    if (total > 0) {
        if (vendMessageIndicator) {
            message = displayText
            vendMessageIndicator = false
        } else {
            message = formatCurrency(total)
        }      
    } else {
        if (vendMessageIndicator) {
            message = displayText
            resetTotals()
        } else {
            message = "INSERT COINS"
        }
    }
    return message
}

const vendingMachine = {
    InsertCoin : insertCoin,
    Vend : vend,
    Display : display
}

export default vendingMachine