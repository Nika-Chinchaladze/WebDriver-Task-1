const BaseComponent = require("../common/base.component");

class NewPasteComponent extends BaseComponent {
    constructor() {
        super("#postform-text")
    }

    get postFormText() {
        return this.rootElement;
    }
}

module.exports = new NewPasteComponent;
