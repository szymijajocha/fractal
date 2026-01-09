import { state } from "./state.js"

let maxIter = 200
function renderPx(x, y) {
    let a = state.zr
    let b = state.zi
    for (let i = 0; i < maxIter; i++) {
        let aa = a ** 2 - b ** 2 + x
        let bb = 2 * a * b + y
        a = aa
        b = bb
        let totwo = a ** 2 + b ** 2
        if (totwo > 4) {
            let absZ = Math.sqrt(totwo)
            let smooth = i + 1 - Math.log2(Math.log2(absZ))
            return smooth
        }
    }
    return maxIter
}

function renderPxJulia(a, b) {
    let x = state.cr
    let y = state.ci
    for (let i = 0; i < maxIter; i++) {
        let aa = a ** 2 - b ** 2 + x
        let bb = 2 * a * b + y
        a = aa
        b = bb
        let totwo = a ** 2 + b ** 2
        if (totwo > 4) {
            let absZ = Math.sqrt(totwo)
            let smooth = i + 1 - Math.log2(Math.log2(absZ))
            return smooth
        }
    }
    return maxIter
}

export function renderMandlebrot(canv, ctx, yjump, xjump, middle) {
    const imgData = ctx.createImageData(canv.width, canv.height)
    for (let i = 0; i < canv.height; i++) {
        for (let j = 0; j < canv.width; j++) {
            let iupd = (i - middle.y) / yjump
            let jupd = (j - middle.x) / xjump
            let vall = state.fractal == "mandlebrot" ? renderPx(jupd, iupd) : renderPxJulia(jupd, iupd)
            let idx = (i * canv.width + j) * 4
            if (vall == maxIter) {
                imgData.data[idx + 0] = 0;
                imgData.data[idx + 1] = 0;
                imgData.data[idx + 2] = 0;
                imgData.data[idx + 3] = 255;
            } else {
                let hue = (vall / maxIter) * 6
                let sat = 1
                let vval = 1
                let r_, g_, b_
                let hi = Math.floor(hue) % 6
                let data = [vval * (1 - sat), vval * (1 - sat * (hue - hi)), vval * (1 - sat * (1 - (hue - hi)))];
                switch (hi) {
                    case 0:
                        r_ = vval
                        g_ = data[2]
                        b_ = data[0]
                        break;
                    case 1:
                        r_ = data[1]
                        g_ = vval
                        b_ = data[0]
                        break;
                    case 2:
                        r_ = data[0]
                        g_ = vval
                        b_ = data[2]
                        break;
                    case 3:
                        r_ = data[0]
                        g_ = data[1]
                        b_ = vval
                        break;
                    case 4:
                        r_ = data[2]
                        g_ = data[0]
                        b_ = vval
                        break;
                    default:
                        r_ = vval
                        g_ = data[0]
                        b_ = data[1]
                        break;
                }
                imgData.data[idx + 0] = b_*255;
                imgData.data[idx + 1] = g_*255;
                imgData.data[idx + 2] = r_*255;
                imgData.data[idx + 3] = 255;
            }
        }
    }
    ctx.putImageData(imgData, 0, 0)
}


