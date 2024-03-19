const container = document.querySelector('#container');
const btn = document.querySelector('#popup');

function createGrid(noOfRows, noOfColumns) {
    for (let i = 0; i < noOfRows; i++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'row';

        for (let j = 0; j < noOfColumns; j++) {
            let cell = document.createElement('div');
            row.appendChild(cell).className = 'cell';
            cell.classList.add('hoverCell');
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
    
    let horizontal = Number(prompt('enter rows:'));
    let vertical = Number(prompt('enter columns:'));

    if (horizontal >= 100 || vertical >= 100) {
        horizontal = 99;
        vertical = 99;
    }

    createGrid(horizontal, vertical);
}

btn.addEventListener('click', clickGrid)
