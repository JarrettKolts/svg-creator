const inquirer = require('inquirer');
const fs = require('fs');
const Square = require('./lib/square');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');

const createLogo = function() {
    
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Please select a shape for your logo:',
                choices: ['Square', 'Circle', 'Triangle'],
                name: 'shape'
            },
            {
                type: 'input',
                message: 'Please give your logo a title:',
                name: 'title'
            },
            {
                type: 'input',
                message: 'Please provide a color for your logo:',
                name: 'color'
            },
            {
                type: 'input',
                message: 'Please provide a maximum of THREE letters for your logo:',
                name: 'text'
            }
        ])
        .then((answers) => {
            let shape;
            if (answers.shape === 'Square') {
                shape = new Square(answers.color, answers.text);
            } else if (answers.shape === 'Circle') {
                shape = new Circle(answers.color, answers.text);
            } else if (answers.shape === 'Triangle') {
                shape = new Triangle(answers.color, answers.text);
            }
            
            const fileName = `${answers.title}.svg`;
            fs.writeFile(fileName, shape.render(), (err) => {
                if (err) console.error(err);
                else console.log(`Successfully created ${answers.shape.toLowerCase()} logo at ${fileName}!`);
            });
        });

};

createLogo();