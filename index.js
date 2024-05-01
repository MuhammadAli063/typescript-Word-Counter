#! /usr/bin/env node
import inquirer from "inquirer";
// Counter function removed whitespaces
function counter(paragraph) {
    let freeWhiteSpaces = paragraph.replace(/\s/g, "");
    return freeWhiteSpaces.length;
}
// get user paragraph input
let answer = await inquirer.prompt([
    {
        name: 'paragraph',
        type: 'input',
        message: "Please Enter your Paragraph to Count your Words : "
    }
]);
console.log(`The total Number of words in your Paragraph is : ${counter(answer.paragraph)}`);
