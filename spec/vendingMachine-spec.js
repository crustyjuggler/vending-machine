import vendingMachine from "../src/vendingMachine"

describe("Vending Machine", () => {

    describe("Insert Coins", () => {
        it("has a display", () => {
            expect(vendingMachine.Display()).toBeDefined()
        })
    
        it("accepts coins", () => {
            expect(vendingMachine.InsertCoin("coin")).toBeDefined()
        })
    
        it("accepts valid coins", () => {
            expect(vendingMachine.InsertCoin("quarter", true).length).toBe(1)
        })
    
        it("rejects invalid coins", () => {
            expect(vendingMachine.InsertCoin("penny", true).length).toBe(0)
        })
    
        it("displays value of valid coins inserted", () => {
            vendingMachine.InsertCoin("quarter", true)
            expect(vendingMachine.Display()).toBe("$0.25")
        })
    
        it("displays INSERT COINS if no valid coins have been inserted", () => {
            vendingMachine.InsertCoin("penny", true)
            expect(vendingMachine.Display()).toBe("INSERT COINS")
        })
    
        it("calculates and displays total coins correctly", () => {
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

        it("displays THANK YOU if a product is selected and enough money has been inserted", () => {
            vendingMachine.InsertCoin("quarter", true)
            vendingMachine.InsertCoin("quarter")
            vendingMachine.Vend("chips")
            expect(vendingMachine.Display()).toBe("THANK YOU")
        })

        it("displays INSERT COINS after a successful vend", () => {
            vendingMachine.InsertCoin("quarter", true)
            vendingMachine.InsertCoin("quarter")
            vendingMachine.Vend("chips")
            vendingMachine.Display()
            expect(vendingMachine.Display()).toBe("INSERT COINS")
        })

        it("displays PRICE and price of item if the vend is unsuccessful", () => {
            vendingMachine.InsertCoin("quarter", true)
            vendingMachine.Vend("candy")
            expect(vendingMachine.Display()).toBe("PRICE $0.65")
        })

        it("displays displays value of valid coins inserted after unsuccessful vend", () => {
            vendingMachine.InsertCoin("quarter", true)
            vendingMachine.InsertCoin("quarter")
            vendingMachine.Vend("candy")
            vendingMachine.Display()
            expect(vendingMachine.Display()).toBe("$0.50")
        })
    })

})