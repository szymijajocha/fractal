function renderPx(x, y) {
    let a = 0
    let b = 0
    for (let i = 0; i < 1000; i++) {
        let aa = a ** 2 - b ** 2 + x
        let bb = 2 * a * b + y
        a = aa
        b = bb
        if (a ** 2 + b ** 2 > 4) {
            return false
        }
    }
    return true
}

export function renderMandlebrot(canv, ctx, yjump, xjump, middle) {
    const imgData = ctx.createImageData(canv.width, canv.height)
    for (let i = 0; i < canv.height; i++) {
        for (let j = 0; j < canv.width; j++) {
            let iupd = (i - middle.y) / yjump
            let jupd = (j - middle.x) / xjump
            let vall = renderPx(jupd, iupd)
            let idx = (i * canv.width + j) * 4
            if (vall) {
                imgData.data[idx + 0] = 0;
                imgData.data[idx + 1] = 0;
                imgData.data[idx + 2] = 0;
                imgData.data[idx + 3] = 255;
            } else {
                imgData.data[idx + 0] = 255;
                imgData.data[idx + 1] = 255;
                imgData.data[idx + 2] = 255;
                imgData.data[idx + 3] = 255;
            }
        }
    }
    ctx.putImageData(imgData, 0, 0)
}