import vendingMachine from "../src/vendingMachine"

describe("Vending Machine", () => {
    it("has a display", () => {
        expect(vendingMachine.display).toBeDefined()
    })

    it("will accept coins", () => {
        expect(vendingMachine.InsertCoin("coin")).toBeDefined()
    })

    it("will accept valid coins", () => {
        expect(vendingMachine.InsertCoin("quarter")).toBeTruthy()
    })

    it("will reject invalid coins", () => {
        expect(vendingMachine.InsertCoin("penny")).toBeFalsy()
    })
})