function generateSVG(shapes) {
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">`;

  shapes.forEach(shape => {
    if (shape.type === 'rectangle') {
      svg += `<rect x="${shape.x}" y="${shape.y}" width="${shape.width}" height="${shape.height}" fill="${shape.color}" />`;
    } else if (shape.type === 'polygon') {
      const points = shape.points.map(point => `${point[0]},${point[1]}`).join(' ');
      svg += `<polygon points="${points}" fill="${shape.color}" />`;
    }
  });

  svg += `</svg>`;
  return svg;
}

var shapes = [
  { "type": "rectangle", "color": "blue", "x": 50, "y": 50, "width": 100, "height": 100 },
  { "type": "polygon", "color": "green", "points": [[10, 10], [100, 10], [100, 100], [10, 100]] },
  { "type": "rectangle", "color": "red", "x": 200, "y": 200, "width": 150, "height": 75 },
  { "type": "polygon", "color": "yellow", "points": [[300, 300], [400, 300], [400, 400], [300, 400]] }
];

var svgString = generateSVG(shapes);
console.log(svgString);