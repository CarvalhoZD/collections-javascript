"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IaddItem = void 0;
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function IaddItem(itens) {
    var item = prompt('Type the name of the item you wish to add: ');
    itens.push(item);
    console.log('Item added to the basket!');
}
exports.IaddItem = IaddItem;
