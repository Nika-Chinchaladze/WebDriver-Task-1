const { expect, browser } = require('@wdio/globals');

const BasePage = require("../pom/pages/base.page");
const NewPasteComponent = require("../pom/components/paste/new-paste.component");
const OptionalPasteComponent = require("../pom/components/paste/optional-paste.component");

describe("Test PasteBin page", () => {
    beforeEach(async () => {
        await BasePage.open();
    });

    it("Create 'New Paste' with the following attributes.", async () => {
        // Act
        await NewPasteComponent.postFormText.setValue("Hello from WebDriver");
        await OptionalPasteComponent.pasteExpiration.click();
        await OptionalPasteComponent.choosePasteExpiration.click();
        await OptionalPasteComponent.postFormName.setValue("helloweb");

        // Assert
        const postFormText = await NewPasteComponent.postFormText.getValue();
        const dropDownList = await OptionalPasteComponent.pasteExpiration.getValue();
        const postFormName = await OptionalPasteComponent.postFormName.getValue();

        expect(postFormText).toHaveText("Hello from WebDriver");
        expect(dropDownList).toHaveText("10 Minutes");
        expect(postFormName).toHaveText("helloweb");

    });
});

