const colorList = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown', 'gray', 'black', 'white']
const mainDiv = document.querySelector('.main')
const mainpallet = document.querySelector('.pallet')

let selectedColor = ''

for (let j = 0; j < 1600; j++) {
    const divTag = document.createElement('div')
    divTag.className = `grid-horizontal-${j}`
    divTag.style.width = '23px';
    divTag.style.height = '23px';
    divTag.style.border = '1px solid';
    divTag.style.borderColor = 'gray';
    divTag.style.float = 'left';
    mainDiv.appendChild(divTag)

    divTag.addEventListener('click', () => {
        divTag.style.backgroundColor = selectedColor

    })
}

for (let i = 0; i < colorList.length; i++) {
    const pallet = document.createElement('div')

    pallet.className = `pallet-${i}`
    pallet.style.width = '40px';
    pallet.style.height = '40px';
    pallet.style.float = 'left';
    pallet.style.margin = '10px';
    pallet.style.borderRadius = '20px'
    pallet.style.border = '1px solid'
    pallet.style.backgroundColor = colorList[i]

    mainpallet.appendChild(pallet)

    pallet.addEventListener('click', () => {
        selectedColor = colorList[i]
    })
}