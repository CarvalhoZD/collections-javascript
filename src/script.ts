import PromptSync = require("prompt-sync");
import { Menu } from "./enumMenu"
import { IaddItem } from "./add";
import { IremoveItem } from "./remove";
import { showMenu } from "./showMenu";

const prompt = PromptSync();

let itens: string [] = [];

let select: Menu;

do {
    select = showMenu()

    switch (select) {
        case Menu.Add:
            console.clear()
            IaddItem(itens);
            break;
            
        case Menu.Remove:
            console.clear()
            IremoveItem(itens)
            break;

        case Menu.Exit:
            console.clear()          
            break;        
    }
} while (select != Menu.Exit)