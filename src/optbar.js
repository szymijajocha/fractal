import { state } from "./state.js"

export function toggleOptions() {
    if (paramc.checked) {
        crrange.disabled = true
        cirange.disabled = true
        zrrange.disabled = false
        zirange.disabled = false
        crrange.value = 0
        cirange.value = 0
        state.fractal = "mandlebrot"
        state.cr = 0
        state.ci = 0
        document.getElementById("crval").innerText = crrange.value / 100
        document.getElementById("cival").innerText = cirange.value / 100
    } else {
        zrrange.disabled = true
        zirange.disabled = true
        crrange.disabled = false
        cirange.disabled = false
        zrrange.value = 0
        zirange.value = 0
        state.fractal = "julia"
        state.zr = 0
        state.zi = 0
        document.getElementById("zrval").innerText = zrrange.value / 100
        document.getElementById("zival").innerText = zirange.value / 100
    }
}

export function displayVal() {
    document.getElementById("crval").innerText = crrange.value / 100
    document.getElementById("cival").innerText = cirange.value / 100
    document.getElementById("zrval").innerText = zrrange.value / 100
    document.getElementById("zival").innerText = zirange.value / 100
    state.cr = crrange.value / 100
    state.ci = cirange.value / 100
    state.zr = zrrange.value / 100
    state.zi = zirange.value / 100
}