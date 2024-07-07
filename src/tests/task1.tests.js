const { expect } = require('@wdio/globals');

const { page } = require("../pom/index");

describe("Test PasteBin page", () => {
    beforeEach(async () => {
        await page("base").open();
    });

    it("Create 'New Paste' with the following attributes.", async () => {
        // Act
        await page("new").postFormText.setValue("Hello from WebDriver");
        await page("optional").pasteExpiration.click();
        await page("optional").choosePasteExpiration.click();
        await page("optional").postFormName.setValue("helloweb");

        // Assert
        const postFormText = await page("new").postFormText.getValue();
        const dropDownList = await page("optional").pasteExpiration.getValue();
        const postFormName = await page("optional").postFormName.getValue();

        expect(postFormText).toHaveText("Hello from WebDriver");
        expect(dropDownList).toHaveText("10 Minutes");
        expect(postFormName).toHaveText("helloweb");

    });
});
