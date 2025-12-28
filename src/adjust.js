export function setMiddle(xM, xm, yM, ym, Mw, Mh) {
    let startx = 0
    let starty = 0
    let gapx = Math.abs(xm) + Math.abs(xM)
    let gapy = Math.abs(ym) + Math.abs(yM)
    let jumpx = (Mw / gapx) * Math.abs(xm)
    let jumpy = (Mh / gapy) * Math.abs(yM)
    let mid = { x: jumpx, y: jumpy }
    return mid
}

export function resizeCanvas(x, context) {
    const dpr = window.devicePixelRatio || 1;

    x.width = window.innerWidth * dpr;
    x.height = window.innerHeight * dpr;

    x.style.width = window.innerWidth + "px";
    x.style.height = window.innerHeight + "px";

    context.setTransform(dpr, 0, 0, dpr, 0, 0);
}