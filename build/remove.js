"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IremoveItem = void 0;
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function IremoveItem(itens) {
    console.log(itens);
    var itemRemove = prompt('Which item do you wish to remove: ');
    console.clear();
    console.log('Item removed!');
    var chose = 0;
    itens.forEach(function (item) {
        if (item == itemRemove) {
            itens.splice(chose, 1);
        }
        else {
            console.log('Invalid option!');
        }
        chose++;
    });
}
exports.IremoveItem = IremoveItem;
