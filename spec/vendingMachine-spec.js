import vendingMachine from "../src/vendingMachine"

describe("Vending Machine", () => {

    it("has a display", () => {
        expect(vendingMachine.InsertCoin("quarter").display).toBeDefined()
    })

    it("will accept coins", () => {
        expect(vendingMachine.InsertCoin("coin")).toBeDefined()
    })

    it("will accept valid coins", () => {
        expect(vendingMachine.InsertCoin("quarter", true)).toBeTruthy()
    })

    it("will reject invalid coins", () => {
        expect(vendingMachine.InsertCoin("penny")).toBeFalsy()
    })

    it("will display value of valid coins entered", () => {
        expect(vendingMachine.InsertCoin("quarter", true).display).toBe("$0.25")
    })
})