const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const btnFilterAll = document.querySelector('.filter-all')

function formatCurrency(value) {
    const newValue = value.toLocaleString('it-IT', {
            style: 'currency', 
            currency: 'EUR', 
        })

        return newValue
}


function showAll(productsArray) {
    let myLi = ''
    let i = 0

    productsArray.forEach((product) => {
        list.innerHTML = ''
        i++
        setTimeout(() => {
            list.innerHTML += 
            `   
                <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="item-price">${formatCurrency(product.price)} </p>
                </li>
        `
        }, i * 350);

    })

    
}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))
    showAll(newPrices)
}

function SumAll() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `   
                <li>
                    <p> Il valore totale degli oggetti è ${formatCurrency(totalValue)} </p>
                </li>
        `
}


function filterAllItems() {
    const filterAll = menuOptions.filter((product) => product.vegan)

    showAll(filterAll)
}



buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
buttonSumAll.addEventListener('click', SumAll)
btnFilterAll.addEventListener('click', filterAllItems)