import $ from "../core";

$.prototype.attr = function(attrName, attrValue) {
    if (!attrName || !attrValue) return this;

    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(attrName, attrValue);
    }

    return this;
}

$.prototype.removeAttr = function(attrName) {
    if (!attrName) return this;

    for (let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute(attrName)) return this;
        this[i].removeAttribute(attrName);
    }

    return this;
}

$.prototype.toggleAttr = function(attrName, attrValue) {
    if (!attrName || !attrValue) return this;

    for (let i = 0; i < this.length; i++) {
        if (this[i].getAttribute(attrName)) {
            this[i].removeAttribute(attrName);
        } else {
            this[i].setAttribute(attrName, attrValue);
        }
    }

    return this;
}