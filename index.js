const mainDiv = document.querySelector('.main')

let selectedColor = ''

// const gridRef = document.querySelector('.grid')

// gridRef.addEventListener('click', (obj) => {
//     console.log(obj)
// })

// for (let i = 0; i < 2; i++) {
    // const divTag = document.createElement('div')
    // divTag.className = "grid-vertical"
    // mainDiv.appendChild(divTag)

    for (let j = 0; j < 2040; j++) {
        const divTag = document.createElement('div')
        divTag.className = `grid-horizontal-${j}`
        divTag.style.width = '20px';
        divTag.style.height = '20px';
        divTag.style.border = '2px solid';
        divTag.style.float = 'left';
        mainDiv.appendChild(divTag)

        divTag.addEventListener('click', () => {
            console.log(`clicked ${divTag.className}`)
            divTag.style.backgroundColor = selectedColor

        })
    }

    const colorList = ['red', 'orange','yellow','green', 'blue','purple','brown','gray','black','white']

    const mainpallet = document.querySelector('.pallet')

    for (let i = 0; i < colorList.length; i++) {
        const pallet = document.createElement('div')

        pallet.className = `pallet-${i}`
        pallet.style.width = '40px';
        pallet.style.height = '40px'; 
        pallet.style.float = 'left';  
        pallet.style.borderRadius = '20px'     
        pallet.style.backgroundColor = colorList[i]

        mainpallet.appendChild(pallet)

        pallet.addEventListener('click', () => {
            selectedColor = colorList[i]
            console.log(selectedColor)
        })
    }

    

   




