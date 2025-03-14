const { $ } = require('@wdio/globals')
const Page = require('./page');


class MainApp extends Page {



    // cartItem is the integer which identifies the items in the cart
    set itemsNumberInCart(cartItem){
        this.cartItem = cartItem
    }

    // interactable elements in the main page of the app when it is initially opened
    get mainPage() {return $('//android.widget.FrameLayout[@content-desc="Container for fragments"]/android.view.ViewGroup');}
    get menuIcon() {return $('~View menu')}
    get sortIcon() {return $('~Shows current sorting order and displays available sorting options')}
    get cartIcon() {return $('~Displays number of items in your cart')}
    get productsInCatalog() {return $(`(//android.widget.ImageView[@content-desc="Product Image"])[${this.productNumber}]`)}
    get sortByNameAscending() {return $('//android.widget.TextView[@text="Name - Ascending"]')}
    get sortByNameDescending() {return $('//android.widget.TextView[@text="Name - Descending"]')}
    get sortByPriceAscending() {return $('~Ascending order by price')}
    get sortByPriceDescending() {return $('~Descending order by price')}

    async clickMenu() {
        await this.menuIcon.click()
    }

    async clickSortIcon(){
        await this.sortIcon.click()
    }
    
    async clickCartIcon(){
        await this.cartIcon.click()
    }

    // provide the the product position value to click a specific product
    async clickProductsInCatalog(productNumber){
        this.productNumber = productNumber
        await this.productsInCatalog.click()
    }

    async clickSortByNameAscending(){
        await this.sortByNameAscending.click()
    }

    async clickSortByNameDescending(){
        await this.sortByNameDescending.click()
    }

    async clickSortByPriceAscending(){
        await this.sortByPriceAscending.click()
    }

    async clickSortByPriceDescending(){
        await this.sortByPriceDescending.click()
    }

    
    // add to cart
    get addToCart() {return $('~Tap to add product to cart')}

    async clickAddToCartBtn(){
        await this.addToCart.click()
    }

    // menu elements
    get catalogMenuItem() {return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemTV" and @text="Catalog"]')}
    get webViewMenuItem() {return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemTV" and @text="WebView"]')}
    get qrScannerMenuItem() {return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemTV" and @text="QR Code Scanner"]')}
    get geoLocationMenuItem() {return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemTV" and @text="Geo Location"]')}
    get drawingMenuItem() {return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemTV" and @text="Drawing"]')}
    get aboutMenuItem() {return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemTV" and @text="About"]')}
    get resetAppStateMenuItem() {return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemTV" and @text="Reset App State"]')}
    get fingerPrintMenuItem() {return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemTV" and @text="FingerPrint"]')}
    get loginMenuItem() {return $('~Login Menu Item')}
    get logoutMenuItem() {return $('~Logout Menu Item')}
    get logoutDialogBtn() {return $('//android.widget.Button[@resource-id="android:id/button1"]')}

    async clickLoginMenuItem(){
        await this.loginMenuItem.click()
    }

    async clickLogoutMenuItem(){
        await this.logoutMenuItem.click()
        await this.logoutDialogBtn.click()
    }

    async clickFingerPrintMenuItem(){
        await this.fingerPrintMenuItem.click()
    }

    async clickDrawingMenuItem(){
        await this.drawingMenuItem.click()
    }

   // cart elements
   get gotoShoppingBtn() {return $('//android.widget.Button[@resource-id="com.saucelabs.mydemoapp.android:id/shoppingBt"]')} // when cart is empty
   get increaseProductInCart() {return $(`(//android.widget.ImageView[@content-desc="Increase item quantity"])[${this.cartItem}]`)}
   get decreaseProductInCart() {return $(`(//android.widget.ImageView[@content-desc="Decrease item quantity"])[${this.cartItem}]`)}
   get proceedCheckoutBtn() {return $('~Confirms products for checkout')}
   get removeItemFromCart() {return $('~Removes product from cart')}

   async clickIncreaseProductInCart(cartItem){
    this.cartItem = cartItem
    await this.increaseProductInCart.click()
   }

   async clickDecreseProductInCart(cartItem){
    this.cartItem = cartItem    
    await this.decreaseProductInCart.click()
   }

   async clickGoToShoppingBtn(){
    await this.gotoShoppingBtn.click()
   }

   async clickProceedCheckoutBtn(){
    await this.proceedCheckoutBtn.click()
   }

   async clickRemoveItemCart(){
    await this.removeItemFromCart.click()
   }

   // checkout elements
   get fullNameCheckout() {return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/fullNameET"]')}
   get addressLine1Checkout() {return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/address1ET"]')}
   get addressLine2Checkout() {return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/address2ET"]')}
   get cityCheckout() {return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/cityET"]')}
   get stateRegionCheckout() {return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/stateET"]')}
   get zipCodeCheckout() {return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/zipET"]')}
   get countryChekcout() {return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/countryET"]')}
   get paymentBtnChekcout() {return $('~Saves user info for checkout')}
   
   async enterFullnameCheckout(fullname){
    this.fullname = fullname
    await this.fullNameCheckout.setValue(this.fullname)
   }

   async enterAddressLine1Checkout(address1){
    this.address1 = address1
    await this.addressLine1Checkout.setValue(this.address1)
   }

   async enterAddressLine2Checkout(address2){
    this.address2 = address2
    await this.addressLine2Checkout.setValue(this.address2)
   }

   async enterCityCheckout(city){
    this.city = city
    await this.cityCheckout.setValue(this.city)
   }

   async enterStateRegionCheckout(state){
    this.state = state
    await this.stateRegionCheckout.setValue(this.state)
   }

   async enterZipCodeCheckout(zip){
    this.zip = zip
    await this.zipCodeCheckout.setValue(this.zip)
   }

   async enterCountryCheckout(country){
    this.country = country
    await this.countryChekcout.setValue(this.country)
   }

   async clickPaymentBtn(){
    await this.paymentBtnChekcout.click()
   }

   get fullnamePaymentMethod() {return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/nameET"]')}
   get cardNumberPaymentMethod() {return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/cardNumberET"]')}
   get expirationDatePaymentMethod() {return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/expirationDateET"]')}
   get securityCodePaymentMethod() {return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/securityCodeET"]')}
   get differentBillingAddress() {return $('~Select if User billing address and shipping address are same')}
   get reviewOrderBtn() {return $('~Saves payment info and launches screen to review checkout data')}

   async enterFullnamePaymentMethod(paymentName){
    this.paymentName = paymentName
    await this.fullnamePaymentMethod.setValue(this.paymentName)
   }

    async enterCardNumberPaymentMethod(cardNumber){
    this.cardNumber = cardNumber
    await this.cardNumberPaymentMethod.setValue(this.cardNumber)
   }

   async enterExpirationDatePaymentMethod(expirationDate){
    this.expirationDate = expirationDate
    await this.expirationDatePaymentMethod.setValue(this.expirationDate)
   }

   async enterSecurityCodePaymentMethod(code){
    this.code = code
    await this.securityCodePaymentMethod.setValue(this.code)
   }

   async clickReviewOrderBtn(){
    await this.reviewOrderBtn.click()
   }

   async checkUncheckDifferentBillingAddress(){
    await this.differentBillingAddress.click()
   }

   get placeOrderBtn() {return $('~Completes the process of checkout')}
   get backToCatalogCheckout() {return $('~Tap to open catalog')}

   // fingerPrint element
    get fignerPrintToggle() {return $('~Enable or disable biometric login')}

    async enableDiasbleFingerPrint(){
        await this.fignerPrintToggle.click()
    }

    async clickPlaceOrderBtn(){
        await this.placeOrderBtn.click()
    }

    async clickBackToCatalogCheckoutBtn(){
        await this.backToCatalogCheckout.click()
    }



   // login elements
   get usernameLogin() {return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/nameET"]')}
   get passwordLogin() {return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/passwordET"]')}
   get loginBtn() {return $('~Tap to login with given credentials')}
   get biometricIcon() {return $('~Tap to login using biometric verification')}

   async enterUsernameAndPassword(username,password){
    this.username = username
    this.password = password
    await this.usernameLogin.setValue(this.username)
    await this.passwordLogin.setValue(this.password)
   }

   async clickLoginBtn(){
    await this.loginBtn.click()
   }

   async clickBiometricIcon(){
    await this.biometricIcon.click()
   }

    // scrolling the app - provide -ve or +ve values to change the direction of scrolling
    async scrolling(direction){
        let scroll = direction
        await browser.performActions([
            {
                type: "pointer",
                id: "finger1",
                parameters: { pointerType: "touch" },
                actions: [
                    { type: "pointerMove", duration: 0, x: 360, y: 500 }, 
                    { type: "pointerDown", button: 0 }, 
                    { type: "pause", duration: 500 }, 
                    { type: "pointerMove", duration: 3000, x: 360, y: scroll }, 
                    { type: "pointerUp", button: 0 } 
                ]
            }
        ])
    }
}

module.exports = new MainApp();