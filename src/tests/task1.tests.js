const { expect, browser } = require('@wdio/globals');

describe("Test PasteBin page", () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await browser.url("/");
    });

    it("Create 'New Paste' with the following attributes.", async () => {
        // Variables
        const postFormTextValue = "Hello from WebDriver";
        const dropDownValue = "10 Minutes";
        const postFormNameValue = "helloweb";

        // ============= Execution ============= //
        // Code
        await $("#postform-text").setValue(postFormTextValue);
        // Paste Expiration
        await $("#select2-postform-expiration-container").click();
        await $(`//li[text()="${dropDownValue}"]`).click();
        // Paste Name / Title
        await $("#postform-name").setValue(postFormNameValue);

        // ============= Assertion ============= //;
        const postFormText = await $("#postform-text").getValue();
        const dropDownList = await $("#select2-postform-expiration-container").getValue();
        const postFormName = await $("#postform-name").getValue();

        expect(postFormText).toHaveText(postFormTextValue);
        expect(dropDownList).toHaveText(dropDownValue);
        expect(postFormName).toHaveText(postFormNameValue);

        await browser.pause(2000);
    });
});

