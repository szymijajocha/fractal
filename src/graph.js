function addValHorizontalPositive(xmid, ymid, gap, wmax, content) {
    let start = xmid
    let jump = (wmax - xmid) / Math.abs(gap)
    for (let i = 1; i <= Math.abs(gap); i++) {
        start += jump
        content.beginPath()
        content.moveTo(start, ymid - 5)
        content.lineTo(start, ymid + 5)
        content.stroke()
    }
}

function addValHorizontalNegative(xmid, ymid, gap, content) {
    let start = xmid
    let jump = xmid / Math.abs(gap)
    for (let i = 1; i <= Math.abs(gap); i++) {
        start -= jump
        content.beginPath()
        content.moveTo(start, ymid - 5)
        content.lineTo(start, ymid + 5)
        content.stroke()
    }
}

function addValVerticalPostitive(xmid, ymid, gap, content) {
    let start = ymid
    let jump = ymid / Math.abs(gap)
    for (let i = 1; i <= Math.abs(gap); i++) {
        start -= jump
        content.beginPath()
        content.moveTo(xmid - 5, start)
        content.lineTo(xmid + 5, start)
        content.stroke()
    }
}

function addValVerticalNegative(xmid, ymid, gap, hmax, content) {
    let start = ymid
    let jump = (hmax - ymid) / Math.abs(gap)
    for (let i = 1; i <= Math.abs(gap); i++) {
        start += jump
        content.beginPath()
        content.moveTo(xmid - 5, start)
        content.lineTo(xmid + 5, start)
        content.stroke()
    }
}

export function drawGraph(grap, middle, content, xmax, xmin, ymin, ymax) {
    content.clearRect(0, 0, grap.width, grap.height);

    content.beginPath()
    content.moveTo(0, middle.y)
    content.lineTo(grap.width, middle.y)
    content.stroke()

    content.beginPath()
    content.moveTo(middle.x, 0)
    content.lineTo(middle.x, grap.height)
    content.stroke()


    addValHorizontalPositive(middle.x, middle.y, xmax, grap.width, content)
    addValHorizontalNegative(middle.x, middle.y, xmin, content)
    addValVerticalPostitive(middle.x, middle.y, ymax, content)
    addValVerticalNegative(middle.x, middle.y, ymin, grap.height, content)
}