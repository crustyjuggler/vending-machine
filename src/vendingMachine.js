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

const vendingMachine = {
    InsertCoin : (coin, reset) => {
        if (reset) resetTotal()
        let value = isValidCoin(coin).value || false
        if (value) {
            total += value
            return { value: value, total: total, display: '$' + total }
        }
        return value
    }
}

export default vendingMachine