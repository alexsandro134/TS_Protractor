import { browser, element, by, ElementFinder } from 'protractor';

/**
 * Open app and create new contact
 * Verify this contact
 */

describe('TestSuite_01 - Create new Contact', () => {

    beforeEach(() => {
        browser.get('/#/');
        browser.driver.manage().window().maximize();
    });

    it('TC_01 - Create new Contact with name', function createNewContact() {
        // 2 - Click Create Button
        const createNewBtn: ElementFinder = element(by.id('add-contact'));
        createNewBtn.click();

        // 3 - Verify Add Contact Form displayed
        const addContactForm = element(by.xpath(`//h4[text()='Add New Contact']`));
        expect(addContactForm.isDisplayed()).toBe(true);
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/add');

        // 4 - Input valid data to Name textbox
        const nameTextbox = element(by.id('contact-name'));
        nameTextbox.sendKeys('Protractor Test 01');

        // 5 - Verify input success
        nameTextbox.getAttribute('value').then(function(nameValue: string) {
            console.log('Name value = ' + nameValue);
        });
        expect(nameTextbox.getAttribute('value')).toEqual('Protractor Test 01');

        // 6 - Click Create button
        element(by.css('.create-button')).click();

        // 7 - Verify come back to Homepage
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);
    });

    it('TC_02 - Create new Contact with name, email and phone', function createNewContactWithEmailPhone() {
        // 2 - Click Create Button
        const createNewBtn: ElementFinder = element(by.id('add-contact'));
        createNewBtn.click();

        // 3 - Verify Add Contact Form displayed
        const addContactForm = element(by.xpath(`//h4[text()='Add New Contact']`));
        expect(addContactForm.isDisplayed()).toBe(true);
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/add');

        // 4 - Input valid data to Name textbox - Email - Phone
        const nameTextbox = element(by.id('contact-name'));
        nameTextbox.sendKeys('Protractor Test 02');

        const emailTextbox = element(by.id('contact-email'));
        expect(emailTextbox.isDisplayed()).toBe(true);
        emailTextbox.sendKeys('TestEmail@Email.com');

        const phoneTextbox = element(by.id('contact-tel'));
        expect(phoneTextbox.isDisplayed()).toBe(true);
        phoneTextbox.sendKeys('1234567890');

        // 5 - Verify input success
        nameTextbox.getAttribute('value').then(function(nameValue: string) {
            console.log('Name value = ' + nameValue);
        });
        expect(nameTextbox.getAttribute('value')).toEqual('Protractor Test 02');

        emailTextbox.getAttribute('value').then(function(emailValue: string){
            console.log('Email value = ' + emailValue);
        });
        expect(emailTextbox.getAttribute('value')).toEqual('TestEmail@Email.com');

        phoneTextbox.getAttribute('value').then(function(phoneValue: string){
            console.log('Phone value = ' + phoneValue);
        });
        expect(phoneTextbox.getAttribute('value')).toEqual('1234567890');

        // 6 - Click Create button
        element(by.css('.create-button')).click();

        // 7 - Verify come back to Homepage
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);
    });
});
