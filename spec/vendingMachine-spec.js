import vendingMachine from "../src/vendingMachine"

describe("Vending Machine", () => {

    describe("Insert Coins", () => {
        it("has a display", () => {
            expect(vendingMachine.Display()).toBeDefined()
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
    
        it("will display value of valid coins inserted", () => {
            vendingMachine.InsertCoin("quarter", true)
            expect(vendingMachine.Display()).toBe("$0.25")
        })
    
        it("will display INSERT COINS if no valid coins have been inserted", () => {
            vendingMachine.InsertCoin("penny", true)
            expect(vendingMachine.Display()).toBe("INSERT COINS")
        })
    
        it("will calculate and display the total coins correctly", () => {
            vendingMachine.InsertCoin("quarter", true)
            vendingMachine.InsertCoin("quarter")
            vendingMachine.InsertCoin("penny")
            expect(vendingMachine.Display()).toBe("$0.50")
        })
    })

    describe("Select Product", () => {
        it("has products to vend", () => {
            expect(vendingMachine.Vend("chips").toBeDefined)
        })
    })

})