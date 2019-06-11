import { browser, element, by, ElementFinder } from 'protractor';

/**
 * Open app and create new contact
 * Verify this contact
 */

describe('TestSuite_01 - Element Array Finder', () => {

    beforeEach(() => {
        browser.get('/#/');
        browser.driver.manage().window().maximize();
    });

    it('TC_01 - Demo for element array functions', () => {
        // all
        const tableBody = element(by.css('table>tbody'));
        const trs = tableBody.all(by.css('tr'));
        const names = trs.all(by.css('strong'));

        // count
        // case 01 - Rows number = 4
        trs.count().then(function(num) {
            console.log('Total number of tr: ' + num);
            expect(num).toEqual(4);
        });

        // case 02 - Name = 4
        names.count().then(function(value) {
            console.log('Total number of name: ' + value);
        });

        // first = name in first row
        const firstName = names.first();
        firstName.getText().then(function(text) {
            console.log('Name in first row: ' + text);
            expect(text).toEqual('Automation Testing');
        });

        // last = name in last row
        const lastName = names.last();
        lastName.getText().then(function(text) {
            console.log('Name in last row: ' + text);
            expect(text).toEqual('Perfomance Testing');
        });

        // get (index)
        // Name in second row
        names.get(1).getText().then(function(text) {
            console.log('Name in second row: ' + text);
            expect(text).toEqual('Manual Testing');
        });

        // each
        names.each(function(ele, index) {
            ele.getText().then(function(text) {
                console.log('Element at = ' + index, ' with text = ' + text);
            });
            ele.getCssValue('font-size').then(function(size) {
                console.log('Element at = ' + index, ' with text size = ' + size);
            });
        });

        // filter
        const automationTest = trs.filter(function(ele, index) {
            return ele.all(by.css('strong')).get(0).getText().then(function(text) {
                return text === 'Automation Testing';
            });
        });

        automationTest.count().then(function(number) {
            console.log('Number item automation test = ' + number);
        });

        expect(automationTest).toBeDefined();
        expect(automationTest.count()).toEqual(1);

        // map
        const items = names.map(function(ele, index) {
            return {
                index: index,
                text: ele.getText(),
                font: ele.getCssValue('font-size')
            };
        }).then(function(list) {
            expect(list).toBeDefined();
            console.log(list);
        });

        // expect(items).toBeDefined();

        // reduce
        const value = names.reduce(function(acc, elm) {
            console.log(acc);
            return elm.getText().then(function(text: string) {
                return acc === '' ? text : acc + ', ' + text;
            });
        }, '');
    });

});
