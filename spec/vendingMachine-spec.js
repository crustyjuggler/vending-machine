import vendingMachine from "../src/vendingMachine"

describe("Vending Machine", () => {
    it("has a display", () => {
        expect(vendingMachine.display).toBeDefined()
    })
})