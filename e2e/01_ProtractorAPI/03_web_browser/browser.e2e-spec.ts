import { browser, element, by, ElementFinder } from 'protractor';

/**
 * Open app and create new contact
 * Verify this contact
 */

describe('TestSuite_01 - Create new Contact', () => {

    beforeEach(() => {
        browser.get('/#/');
    });

    it('TC_01 - Web Browser', () => {
        // Open Url
        browser.get('http://localhost:4200');

        // Set Browser size
        browser.manage().window().setSize(1366, 768);

        // Get Browser size
        browser.manage().window().getSize().then(function (size) {
            console.log('Browser width: ' + size.width);
            console.log('Browser height: ' + size.height);
        });

        // Set browser position
        browser.manage().window().setPosition(100, 100);

        // Get browser position
        browser.manage().window().getPosition().then(function(position) {
            console.log('Browser position x: ' + position.x);
            console.log('Browser position y: ' + position.y);
        });

        // Maximize browser
        browser.manage().window().maximize();

        // Get title
        browser.getTitle().then((title) => {
            console.log('Title: ' + title);
        });

        // Get Url
        browser.getCurrentUrl().then((url) => {
            console.log('Url: ' + url);
        });

        // Get Page source
        // browser.getPageSource().then((source) => {
        //     console.log('Source code: ' + source);
        // });

        browser.navigate().refresh();
        browser.refresh();

        element(by.id('add-contact')).click();
        browser.navigate().back();
        browser.navigate().forward();
        browser.navigate().to('http://localhost:4200/add');

        // Sleep
        browser.sleep(5000);

        // Switch to alert
        // browser.switchTo().alert().accept();
        // browser.switchTo().alert().dismiss();
        // browser.switchTo().alert().sendKeys('Send key to Alert');
        // browser.switchTo().alert().getText().then((alertText) => {
        //     console.log('Alert text: ' + alertText);
        // });

        // Switch to frame
        // browser.switchTo().frame(0);
        // browser.switchTo().frame(element(by.xpath(`//iframe[@class='facebook-frame']`)));
        // browser.switchTo().defaultContent();

        // Switch to window
        // browser.switchTo().window('WindowId');

        browser.getWindowHandle().then((windowId) => {
            console.log('Window ID: ' + windowId);
        });

        browser.getAllWindowHandles();

        browser.close();
    });

    xit('TC_02 - ', () => {

    });
});
