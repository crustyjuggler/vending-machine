import vendingMachine from "../src/vendingMachine"

describe("Vending Machine", () => {
    it("has a display", () => {
        expect(vendingMachine.display).toBeDefined()
    })

    it("will accept coins", () => {
        expect(vendingMachine.InsertCoin()).toBeDefined()
    })

    it("will accept valid coins", () => {
        expect(vendingMachine.InsertCoin()).toBeTruthy()
    })
})