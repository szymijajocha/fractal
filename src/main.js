import { renderMandlebrot } from "./render.js";
import { drawGraph } from "./graph.js";
import { setMiddle } from "./adjust.js";
import { resizeCanvas } from "./adjust.js";

let canv = document.getElementById("fractal")
let grap = document.getElementById("graph")
const ctx = canv.getContext("2d");
const content = grap.getContext("2d")

function redraw() {
    resizeCanvas(canv, ctx);
    resizeCanvas(grap, content);

    middle = setMiddle(xmax, xmin, ymax, ymin, canv.width, canv.height);

    xjump = middle.x / Math.abs(xmin);
    yjump = middle.y / Math.abs(ymax);

    renderMandlebrot(canv, ctx, yjump, xjump, middle);
    drawGraph(grap, middle, content, xmax, xmin, ymin, ymax);
}

let middle = {}
let xjump = 0
let yjump = 0

window.addEventListener("resize", redraw)
window.onload = redraw

let xmax = 3
let xmin = -3
let ymax = 2
let ymin = -2

grap.addEventListener("click", function (e) {
    let rawx = e.clientX - middle.x
    let rawy = 0 - (e.clientY - middle.y)
    alert(`${rawx / xjump}, ${rawy / yjump}`)
})