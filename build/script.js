"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var enumMenu_1 = require("./enumMenu");
var add_1 = require("./add");
var remove_1 = require("./remove");
var showMenu_1 = require("./showMenu");
var prompt = PromptSync();
var itens = [];
var select;
do {
    select = (0, showMenu_1.showMenu)();
    switch (select) {
        case enumMenu_1.Menu.Add:
            console.clear();
            (0, add_1.IaddItem)(itens);
            break;
        case enumMenu_1.Menu.Remove:
            console.clear();
            (0, remove_1.IremoveItem)(itens);
            break;
        case enumMenu_1.Menu.Exit:
            console.clear();
            break;
    }
} while (select != enumMenu_1.Menu.Exit);
