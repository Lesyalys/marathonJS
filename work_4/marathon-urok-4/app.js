const board = document.querySelector('#board');
const SQR_COUNT = 5000;

const colors = ['pink','violet', 'blue']

for (let i = 0; i < SQR_COUNT; i++){
    const sqware = document.createElement('div')
    sqware.classList.add('sqw')

    sqware.addEventListener('mouseover', () => setColor(sqware))
    sqware.addEventListener('mouseleave', () => removeColor(sqware))

    board.append(sqware)
}

// const setColor = (sqr) => {
//     sqr.style.backgroundColor = 'red'
// } 

function setColor(element){
    const color = getRand()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#111'
    element.style.boxShadow = `0 0 2px`
}

function getRand() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
