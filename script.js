const container = document.querySelector('#container');
const btn = document.querySelector('#popup');

function createGrid(rows, columns) {
    for (let i = 0; i < rows; i++) {
        let subDiv = document.createElement('div');
        subDiv.classList.add('subDiv');
        container.appendChild(subDiv);
        for (let j = 0; j < columns; j++) {
            let cell = document.createElement('div');
            cell.classList.add('hoverCell');
            subDiv.appendChild(cell);
        }
    }    
}

function removeAllChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function clickGrid() {
    removeAllChildNodes(container);

    let rows = prompt('enter rows:');
    let columns = prompt('enter columns:');

    if (rows >= 100 || columns >= 100) {
        rows = 99;
        columns = 99;
    } else {
        rows = Number(rows);
        columns = Number(columns);
    }

    createGrid(rows, columns);
}

btn.addEventListener('click', clickGrid);
