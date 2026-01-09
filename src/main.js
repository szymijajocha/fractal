import { renderMandlebrot } from "./render.js";
import { drawGraph } from "./graph.js";
import { setMiddle, resizeCanvas } from "./adjust.js";
import { toggleOptions, displayVal } from "./optbar.js";
import { state } from "./state.js";

let canv = document.getElementById("fractal")
let grap = document.getElementById("graph")
const ctx = canv.getContext("2d");
const content = grap.getContext("2d")

let paramz = document.getElementById("paramz")
let paramc = document.getElementById("paramc")
let crrange = document.getElementById("crrange")
let cirange = document.getElementById("cirange")
let zrrange = document.getElementById("zrrange")
let zirange = document.getElementById("zirange")

function redraw() {
    resizeCanvas(canv, ctx);
    resizeCanvas(grap, content);

    middle = setMiddle(xmax, xmin, ymax, ymin, canv.width, canv.height);

    xjump = middle.x / Math.abs(xmin);
    yjump = middle.y / Math.abs(ymax);

    renderMandlebrot(canv, ctx, yjump, xjump, middle);
    drawGraph(grap, middle, content, xmax, xmin, ymin, ymax);
}

paramc.checked = true
paramc.addEventListener("change", function() {
    toggleOptions()
    redraw()
})
paramz.addEventListener("change", function(){
    toggleOptions()
    redraw()
})
toggleOptions()
displayVal()

crrange.addEventListener("input", displayVal)
cirange.addEventListener("input", displayVal)
zrrange.addEventListener("input", displayVal)
zirange.addEventListener("input", displayVal)

crrange.addEventListener("change", redraw)
cirange.addEventListener("change", redraw)
zrrange.addEventListener("change", redraw)
zirange.addEventListener("change", redraw)

let middle = {}
let xjump = 0
let yjump = 0

window.addEventListener("resize", redraw)
window.onload = redraw

let xmax = 3
let xmin = -3
let ymax = 2
let ymin = -2
let zoom = 1

grap.addEventListener("click", function (e) {
    let rawx = e.clientX - middle.x
    let rawy = 0 - (e.clientY - middle.y)
    alert(`${rawx / xjump}, ${rawy / yjump}`)
})

window.addEventListener("wheel", function(e){
    e.preventDefault()
    let x = (e.clientX - middle.x) / xjump
    let y = (0 - (e.clientY - middle.y)) / yjump
    zoom = e.deltaY > 0 ? 1.1 : 0.9
    let xrange = xmax - xmin
    let yrange = ymax - ymin
    xmax = x + xrange * zoom /2
    xmin = x - xrange * zoom /2
    ymax = y + yrange * zoom /2
    ymin = y - yrange * zoom /2
    redraw()
}, {passive: false})