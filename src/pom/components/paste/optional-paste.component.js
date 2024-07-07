const BaseComponent = require("../common/base.component");

class OptionalPasteComponent extends BaseComponent {
    constructor() {
        super(".post-form__left");
    }

    get postFormName() {
        return this.rootElement.$("input#postform-name");
    }

    get pasteExpiration() {
        return this.rootElement.$("span#select2-postform-expiration-container");
    }

    get choosePasteExpiration() {
        return $('//li[text()="10 Minutes"]');
    }
}

module.exports = new OptionalPasteComponent;
