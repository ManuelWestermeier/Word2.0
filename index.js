var log = console.log

function addGrid(x, y) {

    var grid = document.createElement("section")
    grid.classList.add("grid")
    grid.style.gridTemplateColumns = `repeat(auto-fit, minmax(calc(100% / ${x} - 5px), 1fr))`

    for (let index = 0; index < x; index++) {
        for (let index = 0; index < y; index++) {
            var elem = document.createElement("div")
            elem.classList.add("elem")
            elem.contentEditable = true
            grid.appendChild(elem)
        }
    }

    document.getElementById("page").appendChild(grid)

}

async function downloadURL() {
    var filename = prompt("File Name is :")
    var html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${filename}</title><style>${(await (await fetch("finalStyle.css")).text())}</style></head><body><div id="page">${document.getElementById("page").innerHTML}</div><script>document.querySelectorAll("dir").forEach(div => {div.contentEditable = false;});</script></body></html>`
    var link = document.createElement("a")
    link.download = filename + ".html"
    link.href = URL.createObjectURL(new Blob([html], { type: "text/html" }))
    link.target = "_blank"
    link.click()
}