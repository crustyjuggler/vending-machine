const vendingMachine = require("../src/vendingMachine")

describe("Vending Machine", () => {
    it("knows what coins are", () => {
        expect(vendingMachine.coins).toBeDefined()
    })
})