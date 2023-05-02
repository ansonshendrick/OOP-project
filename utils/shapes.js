const SVG_START = '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">';
const SVG_END = '</svg>';

function createSvg(text, textColor, shape, shapeColor) {
  let svg;
  if (shape === 'square') {
    svg = `${SVG_START}<rect x="0" y="0" width="300" height="200" fill="${shapeColor}" /></svg>`;
  } else if (shape === 'circle') {
    svg = `${SVG_START}<circle cx="150" cy="100" r="75" fill="${shapeColor}" /></svg>`;
  } else if (shape === 'triangle') {
    svg = `${SVG_START}<polygon points="0,0 300,0 150,200" fill="${shapeColor}" /></svg>`;
  } else {
    console.log('Invalid shape!');
    return;
  }

  const textSvg = `<text x="150" y="100" text-anchor="middle" alignment-baseline="central" font-size="60" fill="${textColor}">${text}</text>`;
  svg = svg.slice(0, -SVG_END.length) + textSvg + SVG_END;

  return svg;
}

module.exports = { createSvg };
