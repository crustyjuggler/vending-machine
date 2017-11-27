const validCoins = [
    { type: "quarter", value: 0.25 },
    { type: "dime", value: 0.10 },
    { type: "nickel", value: 0.05 }
]

const isValidCoin = (coin) => {
    return validCoins.find((validCoin) => {
        return validCoin.type === coin
    }) || false
}

let total
const resetTotal = () => {
    total = 0
}

const formatCurrency = (number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number)
}

const display = () => {
    return total > 0 ? formatCurrency(total) :  'INSERT COINS'
}

const vend = (product) => {
    return true
}

const vendingMachine = {
    InsertCoin : (coin, reset) => {
        if (reset) resetTotal()
        let value = isValidCoin(coin).value || false
        if (value) {
            total += value
        }
        return value
    },

    Vend : vend,

    Display : display
}

export default vendingMachine