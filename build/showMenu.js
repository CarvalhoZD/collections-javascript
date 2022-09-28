"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showMenu = void 0;
var PromptSync = require("prompt-sync");
var enumMenu_1 = require("./enumMenu");
function showMenu() {
    var prompt = PromptSync();
    var choose;
    do {
        console.clear();
        console.log('1 - Add item to the basket!');
        console.log('2 - Remove item from basket!');
        console.log('3 - Exit.');
        var choose_1 = Number(prompt('Choose your option: '));
        switch (choose_1) {
            case 1:
                return enumMenu_1.Menu.Add;
            case 2:
                return enumMenu_1.Menu.Remove;
            case 3:
                return enumMenu_1.Menu.Exit;
            default:
                console.log('Invalid input!');
        }
    } while (choose < 1 || choose > 3);
}
exports.showMenu = showMenu;
