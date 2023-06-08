import { create, createReportList } from 'https://aliva17.github.io/aliva.github.io/modules/canvas.js';
import { name, draw, reportArea, reportPerimeter } from 'https://aliva17.github.io/aliva.github.io/modules/square.js';
import randomSquare from 'https://aliva17.github.io/aliva.github.io/modules/square.js';

let myCanvas = create('myCanvas', document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = draw(myCanvas.ctx, 50, 50, 100, 'blue');
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);

// Use the default
let square2 = randomSquare(myCanvas.ctx);
