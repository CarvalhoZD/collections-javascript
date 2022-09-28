import PromptSync = require("prompt-sync");
const prompt = PromptSync();

export function IremoveItem(itens: string []) {
    console.log(itens);
    const itemRemove = prompt('Which item do you wish to remove: ');
    console.clear();
    console.log('Item removed!');
    

    let chose: number = 0;

    itens.forEach(item => {
        if(item == itemRemove){
        itens.splice (chose, 1);
        }
        else {
            console.log('Invalid option!');
        }
        chose++
    })
}