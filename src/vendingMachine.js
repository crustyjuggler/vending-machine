const isValidCoin = (coin) => {
    const validCoins = [
        "quarter",
        "dime",
        "nickel"
    ]
    return validCoins.includes(coin)
}

const vendingMachine = {
    display : "INSERT COINS",
    InsertCoin : (coin) => {
        return isValidCoin(coin)
    }
}

export default vendingMachine