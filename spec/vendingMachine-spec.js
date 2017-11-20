import vendingMachine from "../src/vendingMachine"

describe("Vending Machine", () => {
    it("knows what valid coins are", () => {
        expect(vendingMachine.validCoins).toBeDefined()
    })
})