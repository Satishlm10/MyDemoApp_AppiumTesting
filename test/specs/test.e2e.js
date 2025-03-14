const { expect, browser } = require('@wdio/globals')
const MyDemoApp = require('../pageobjects/MyDemoApp')

async function loginUser(){
    await MyDemoApp.clickMenu()
    await MyDemoApp.clickLoginMenuItem()
    await MyDemoApp.enterUsernameAndPassword("bod@example.com","10203040")
    await MyDemoApp.clickLoginBtn()
}

async function checkoutWithAllDetails(fullname,addressline1,addressLine2,city,state,zipCode,country) {
    await MyDemoApp.enterFullnameCheckout(fullname)
        await MyDemoApp.enterAddressLine1Checkout(addressline1)
        await MyDemoApp.enterAddressLine2Checkout(addressLine2)
        await MyDemoApp.enterCityCheckout(city)
        await MyDemoApp.enterStateRegionCheckout(state)
        await MyDemoApp.enterZipCodeCheckout(zipCode)
        await MyDemoApp.enterCountryCheckout(country)
        await MyDemoApp.clickPaymentBtn()
    
}

async function checkout(fullname,addressLine1,city,zipCode,country){
    await MyDemoApp.enterFullnameCheckout(fullname)
    await MyDemoApp.enterAddressLine2Checkout(addressLine1)
    await MyDemoApp.enterCityCheckout(city)
    await MyDemoApp.enterZipCodeCheckout(zipCode)
    await MyDemoApp.enterCountryCheckout(country)
    await MyDemoApp.clickPaymentBtn()
}

async function paymentDetails(fullname,cardNumber,expirationDate,securityCode) {
    await MyDemoApp.enterFullnamePaymentMethod(fullname)
        await MyDemoApp.enterCardNumberPaymentMethod(cardNumber)
        await MyDemoApp.enterExpirationDatePaymentMethod(expirationDate)
        await MyDemoApp.enterSecurityCodePaymentMethod(securityCode)
    
}


describe('MYDEMOAPP exploratory testing', () => {
    
    it('Scroll up and down', async () => {
        await browser.performActions([
            {
                type: "pointer",
                id: "finger1",
                parameters: { pointerType: "touch" },
                actions: [
                    { type: "pointerMove", duration: 0, x: 360, y: 500 }, 
                    { type: "pointerDown", button: 0 }, 
                    { type: "pause", duration: 500 }, 
                    { type: "pointerMove", duration: 3000, x: 360, y: -6000 }, 
                    {type:"pointerMove", duration: 3000,x:360,y:6000},
                    { type: "pointerUp", button: 0 } 
                ]
            }
        ])
    })

    it('Sorting Products Test', async ()=>{

        await MyDemoApp.clickSortIcon()
        
        await MyDemoApp.clickSortByPriceDescending()

        await MyDemoApp.scrolling(-6000)

        await MyDemoApp.clickSortIcon()

        await MyDemoApp.clickSortByPriceAscending()

        await MyDemoApp.scrolling(6000)

        await MyDemoApp.clickSortIcon()

        await MyDemoApp.clickSortByNameDescending()

        await MyDemoApp.scrolling(-6000)

        await MyDemoApp.clickSortIcon()

        await MyDemoApp.clickSortByNameAscending()

        await MyDemoApp.scrolling(6000)

        await browser.pause(2000)


    })

    it('Add product items to cart',async ()=>{
        await MyDemoApp.clickProductsInCatalog(1)
        await MyDemoApp.clickAddToCartBtn()
        await MyDemoApp.clickCartIcon()
        await browser.pause(3000)
    })

    it('Increase and Decrease Item number in the cart',async ()=>{
        await MyDemoApp.clickProductsInCatalog(1)
        await MyDemoApp.clickAddToCartBtn()
        await MyDemoApp.clickCartIcon()
        
        let i = 0
        while(i<10){
            await MyDemoApp.clickIncreaseProductInCart(1)
            i++
        }

        let j = 0
        while(j<5){
            await MyDemoApp.clickDecreseProductInCart(1)
            j++
        }
        await browser.pause(3000)
    })

    it('Remove Item from the cart',async ()=>{
        await MyDemoApp.clickProductsInCatalog(1)
        await MyDemoApp.clickAddToCartBtn()
        await MyDemoApp.clickCartIcon()
        await browser.pause(2000)
        await MyDemoApp.clickRemoveItemCart()
        await browser.pause(2000)
    })
    

    it('Login User and Log Out',async ()=>{
        await loginUser()
        await browser.pause(3000)
        await MyDemoApp.clickMenu()
        await MyDemoApp.clickLogoutMenuItem()
        await browser.pause(3000)
    })

    it('Enable fingerPrint and login',async ()=>{
        await MyDemoApp.clickMenu()
        await MyDemoApp.clickFingerPrintMenuItem()
        await browser.pause(1000)
        await MyDemoApp.enableDiasbleFingerPrint()
        await MyDemoApp.clickMenu()
        await MyDemoApp.clickLoginMenuItem()
        await MyDemoApp.clickBiometricIcon()
        await browser.pause(5000)


    })

    it('Drawing square',async ()=>{
        await MyDemoApp.clickMenu()
        await MyDemoApp.clickDrawingMenuItem()
        await browser.performActions([
            {
                type: "pointer",
                id: "finger1",
                parameters: { pointerType: "touch" },
                actions: [
                    { type: "pointerMove", duration: 0, x: 238, y: 550 }, 
                    { type: "pointerDown", button: 0 }, 
                    { type: "pointerMove", duration: 1000, x: 483, y:550  }, 
                    { type: "pointerMove", duration: 1000, x: 483, y:795  }, 
                    { type: "pointerMove", duration: 1000, x: 238, y:795  }, 
                    { type: "pointerMove", duration: 1000, x: 238, y:550  }, 
                    { type: "pointerUp", button: 0 } 
                ]
            }
        ])

        await browser.pause(3000)
    })

    // checkout when shipping and billing address is same
    it('Login, add item to cart and checkout',async ()=>{
        await loginUser()

        await MyDemoApp.clickProductsInCatalog(1)
        await MyDemoApp.clickAddToCartBtn()
        await MyDemoApp.clickCartIcon()
        await MyDemoApp.clickProceedCheckoutBtn()

        await checkoutWithAllDetails("John Doe", "Mercury", "Venus", "Earth", "Mars", "12345", "Jupiter")

        await paymentDetails("Messi", "1234123412341234", "1111", "123")
        await MyDemoApp.clickReviewOrderBtn()

        await MyDemoApp.clickPlaceOrderBtn()

        await MyDemoApp.clickBackToCatalogCheckoutBtn()

        await browser.pause(3000)

    })

    // checkout when shipping and billing address are different
    it('Login, add item to cart, checkout with different billing address than shipping address', async ()=>{
        await loginUser()

        await MyDemoApp.clickProductsInCatalog(1)
        await MyDemoApp.clickAddToCartBtn()
        await MyDemoApp.clickCartIcon()
        await MyDemoApp.clickProceedCheckoutBtn()

        await checkoutWithAllDetails("John Doe", "Mercury", "Venus", "Earth", "Mars", "12345", "Jupiter")

        await paymentDetails("Messi", "1234123412341234", "1111", "123")

        await MyDemoApp.checkUncheckDifferentBillingAddress()
        
        await checkoutWithAllDetails("Magne Budo", "abc", "def", "ghi", "jkl", "12345", "mno")


        await MyDemoApp.clickReviewOrderBtn()

        await MyDemoApp.clickPlaceOrderBtn()

        await MyDemoApp.clickBackToCatalogCheckoutBtn()

        await browser.pause(3000)
    })

    it('Drawing circle', async ()=>{
        await MyDemoApp.clickMenu();
        await MyDemoApp.clickDrawingMenuItem();

        const centerX = 360;  
        const centerY = 640;  
        const radius = 100;   
        const points = 100;    
        const actions = [];

    
        actions.push({ type: "pointerMove", duration: 0, x: centerX + radius , y: centerY  });

    
        actions.push({ type: "pointerDown", button: 0 });

    
        for (let i = 1; i <= points; i++) {
            let angle = (i / points) * 2 * Math.PI;
            let x = Math.round(centerX + radius * Math.cos(angle));
            let y = Math.round(centerY + radius * Math.sin(angle));
            actions.push({ type: "pointerMove", duration: 100, x: x, y: y });
    }

        actions.push({ type: "pointerUp", button: 0 });

        await browser.performActions([{ type: "pointer", id: "finger1", parameters: { pointerType: "touch" }, actions }]);

         await browser.pause(3000);

    })

    
})

