
const fs = require('fs');
const inquirer = require('inquirer');
const {createSvg} = require('./utils/shapes');

const shapes = ['circle', 'triangle', 'square'];

inquirer.prompt([
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: (value) => {
      if (value.length <= 3) {
        return true;
      }
      return 'Please enter up to three characters.';
    },
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (keyword or hexadecimal):',
    default: '#000000',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: shapes,
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (keyword or hexadecimal):',
    default: '#000000',
  },
]).then((answers) => {
  const { text, textColor, shape, shapeColor } = answers;

  const svg = createSvg(text, textColor, shape, shapeColor);

  fs.writeFile('logo.svg', svg, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
});

