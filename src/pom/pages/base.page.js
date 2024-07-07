class BasePage {
    async open() {
        await browser.maximizeWindow();
        await browser.url("/")
    }
}

module.exports = BasePage;
