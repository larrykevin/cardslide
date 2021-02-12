/* const brands = document.getElementById('brands');
const templateCard = document.getElementById('template__card').content;
const fragment = document.createDocumentFragment();
let i = 0;  //Brand index

const fetchData = async () => {
    try {
        const res = await fetch('../api/api.json')
        const data = await res.json()
        printCards(data[i])
        const brandObject = [data[0], data[1], data[2]]
    } catch(error) {
        console.error(error)
    }
}

const printCards = data => {
    templateCard.querySelector('.card__container--logo img').setAttribute('src', data.logoImage)
    templateCard.querySelector('.card__container--description p').textContent = data.description
    templateCard.querySelector('.card__container--image img').setAttribute('src', data.brandImage)

    const clone = templateCard.cloneNode(true)
    fragment.appendChild(clone)
    brands.appendChild(fragment)
}

fetchData()

function prev() {
    if(i <= 0 ) i = brandObject.length;
    i--;
    return setBrand();
}

function next() {
    if(i >= brandObject.length - 1) i = -1;
    i++;
    return setBrand();
}

function setBrand() {
    return printCards(data[i])
} */


