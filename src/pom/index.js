const BasePage = require("./pages/base.page");
const NewPasteComponent = require("../pom/components/paste/new-paste.component");
const OptionalPasteComponent = require("../pom/components/paste/optional-paste.component");

/**
 * 
 * @param name {'base' | 'new' | 'optional'} 
 * @returns 
 */

function page(name) {
    const items = {
        base: new BasePage(),
        new: new NewPasteComponent(),
        optional: new OptionalPasteComponent(),
    };
    return items[name.toLowerCase()];
}

module.exports = { page };
