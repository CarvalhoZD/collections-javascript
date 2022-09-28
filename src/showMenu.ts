import PromptSync = require("prompt-sync");
import { Menu } from "./enumMenu";

export function showMenu() {

const prompt = PromptSync();

let choose: number;

do {
    console.clear();
    console.log('1 - Add item to the basket!');
    console.log('2 - Remove item from basket!');
    console.log('3 - Exit.');
    
    let choose = Number(prompt('Choose your option: '));

        switch (choose) {
                case 1:
           return Menu.Add

                case 2:
           return Menu.Remove

                case 3:
           return Menu.Exit

            default:

           console.log('Invalid input!');
    } 
    } while (choose < 1 || choose > 3);
}