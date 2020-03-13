const menu = document.getElementById('header_menu')

//меню

menu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    menu.querySelectorAll('li').forEach(el => {
      el.classList.remove('active')
    })
    event.target.parentNode.classList.add('active')
  }
})

//смена цвета фона

document.getElementById('left_arrow').onclick = function () {
  document.getElementById('slider_block').classList.toggle('blue')
}

document.getElementById('right_arrow').onclick = function () {
  document.getElementById('slider_block').classList.toggle('blue')
}

//display off - done

document.getElementById('image_phone_v').onclick = function () {
  let images = document.getElementById('v_image')
  if (images.hidden == false) {
    images.hidden = true
  } else {
    images.hidden = false
  }
}

document.getElementById('image_phone_h').onclick = function () {
  let images = document.getElementById('h_image')
  if (images.hidden == false) {
    images.hidden = true
  } else {
    images.hidden = false
  }
}

//slider - сделать движение

/* »ндекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* ‘ункци€ увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
  showSlides(slideIndex += 1);
}

/* ‘ункци€ уменьш€ет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
  showSlides(slideIndex -= 1);
}

/* ”станавливает текущий слайд */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/* ќсновна€ функци€ слайдера */
function showSlides(n) {
  let i
  let slides = document.getElementsByClassName('slide')

  if (n > slides.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }

  slides[slideIndex - 1].style.display = 'block'
}

//border portfolio    

//разобратьс€ в css с обрезкой нижней части border
const portfolioBorder = document.getElementById('portfolio_img')
portfolioBorder.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    portfolioBorder.querySelectorAll('li').forEach(el => {
      el.classList.remove('border')
    })
    event.target.parentNode.classList.add('border')
  }
})

//tab active смена картинок может что поправить

let portfolioActive = document.getElementById('portfolio')
portfolioActive.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    portfolioActive.querySelectorAll('a').forEach(el => el.classList.remove('portfolio_active'))
    const randomImg = document.getElementById('portfolio_img').querySelectorAll('li')
    document.getElementById('portfolio_img').insertAdjacentElement('afterbegin', randomImg[randomImg.length-1])
    event.target.classList.add('portfolio_active')
  }
})