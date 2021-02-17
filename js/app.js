const rectCard = document.getElementById('rect-card');
const logoCard = document.getElementById('logo-card');
const descriptionCard = document.getElementById('description-card');
const imageCard = document.getElementById('image-card');
const buttonLeft = document.getElementById('button-left');
const buttonRight = document.getElementById('button-right');

let i = 0;

let renderCard = data => {
    rectCard.style.backgroundColor = data[i].bgColor
    logoCard.setAttribute('src', data[i].logoImage)
    descriptionCard.textContent = data[i].description
    imageCard.setAttribute('src', data[i].brandImage)
}

fetch('./api/api.json')
  .then( response => response.json() )
  .then( data => {
    renderCard(data)
    buttonRight.addEventListener('click', () => {
      i++
      if(i === 3) {
        i = 0
      }
      return renderCard(data)
    })
    buttonLeft.addEventListener('click', () => {
      i--
      if(i === -1) {
        i = 2
      }
      return renderCard(data)
    })
})