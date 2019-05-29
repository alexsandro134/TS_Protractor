import { browser, element, by, ElementFinder } from 'protractor';

describe('TestSuite_01 - Web Element', () => {

    beforeEach(() => {
        browser.get('/#/');
    });

    it('TC_01 - Web Element', () => {
        // Define an element
        const addContactBtn = element(by.xpath('//button[@id="add-contact"]'));

        // let createContactBtn;
        // createContactBtn = element(by.xpath('//button[@id="add-contact"]'));

        // Click (Btn / Radio Btn / Checkbox / Link / Custom Dropdown)
        // React / Angular / VueJS/ JQuery / Bootstrap
        // HTML dropdown default: select > option
        addContactBtn.click();

        // Sendkey - CLear (Textbox / Textarea)
        const nameTextbox = element(by.xpath('//input[@id="contact-name"]'));
        nameTextbox.sendKeys('Tai Le Sendkey');
        browser.sleep(2000);
        nameTextbox.clear();
        browser.sleep(2000);
        nameTextbox.sendKeys('Tai Le Sendkey New');

        // Get attribute value
        nameTextbox.getAttribute('value').then(function (value) {
            console.log('Name input = ' + value);
        });

        // Submit (work only with form: //form)
        const createBtn = element(by.css('.create-button'));
        createBtn.click();

        // Get Text (label / header / span / div)
        const deleteAllContactBtn = element(by.css('.mat-raised-button.mat-primary>span')) ;
        deleteAllContactBtn.getText().then(function(text) {
            console.log('Text = ' + text);
            expect(text.trim()).toEqual('Delete All Contacts');
        });

        browser.sleep(2000);
        // Get tag name
        const deleteAllContactBtns = element(by.css('.mat-raised-button.mat-primary')) ;
        deleteAllContactBtns.getTagName().then(function(tagname) {
            console.log('Tag name = ' + tagname);
            expect(tagname).toEqual('button');
        });

        // Get size
        deleteAllContactBtns.getSize().then(function(size) {
            console.log('Size height = ' + size.height);
            console.log('Size width = ' + size.width);
        });

        // Get css value
        deleteAllContactBtns.getCssValue('background-color').then(function(color) {
            console.log('Background color = ' + color);
        });

        deleteAllContactBtns.getCssValue('font-size').then(function(font) {
                console.log('Font = ' + font);
        });

        // Get location
        deleteAllContactBtns.getLocation().then(function(location) {
            console.log('Location x = ' + location.x);
            console.log('Location y = ' + location.y);
        });

        // Is Displayed (all elements) - visible
        expect(deleteAllContactBtns.isDisplayed()).toBe(true);
        console.log('Pass 1');

        // Is Enabled (textbox / textarea / checkbox)
        expect(deleteAllContactBtns.isEnabled()).toBe(true);
        console.log('Pass 2');

        // Is Selected (radio / checkbox)
        expect(deleteAllContactBtns.isEnabled()).toBe(false);
        console.log('Pass 3');

        // Is Present (all elements) - invisible / visible (in DOM)
        const messageContainer = element(by.id('cdk-describedby-message-container'));
        expect(messageContainer.isPresent()).toBe(true);
        console.log('Pass 4');

        const nameTxtbox = element(by.xpath('//input[@id="contact-name"]'));
        expect(nameTxtbox.isPresent()).toBe(false);
        console.log('Pass 5');
    });
});
