import PromptSync = require("prompt-sync");
import { showMenu } from "./showMenu";

const prompt = PromptSync();

export function IaddItem(itens: string[]) {

    const item = prompt('Type the name of the item you wish to add: ');

    itens.push(item);

    console.log('Item added to the basket!');
}
