const menu = document.getElementById('header_menu')
const imageVertical = document.getElementById('v_image')
const imageHorizontal = document.getElementById('h_image')
const imageBlueVertical = document.getElementById('v_blue_image')
const portfolioBorder = document.getElementById('portfolio_img')
const button = document.getElementById('submit')
const closeButton = document.getElementById('close_btn')

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

document.getElementById('phone_btn_vertical').onclick = function () {
  if (imageVertical.hidden == false) {
    imageVertical.hidden = true
  } else {
    imageVertical.hidden = false
  }
}

document.getElementById('phone_btn_horizontal').onclick = function () {
  if (imageHorizontal.hidden == false) {
    imageHorizontal.hidden = true
  } else {
    imageHorizontal.hidden = false
  }
}

document.getElementById('phone_btn_center').onclick = function () {
  if (imageBlueVertical.hidden == false) {
    imageBlueVertical.hidden = true
  } else {
    imageBlueVertical.hidden = false
  }
}

//slider

//индекс слайда по умолчанию
let slideIndex = 1;
showSlides(slideIndex);

//функция увеличивает индекс на 1, показывает следующй слайд
function plusSlide() {
  showSlides(slideIndex += 1);
}

// функция уменьшает индекс на 1, показывает предыдущий слайд
function minusSlide() {
  showSlides(slideIndex -= 1);
}

//устанавливает текущий слайд
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// основная функция слайдера
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
    imageVertical.hidden = false
    imageHorizontal.hidden = false
    imageBlueVertical.hidden = false
  }

  slides[slideIndex - 1].style.display = 'block'
}

//border portfolio    

portfolioBorder.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    portfolioBorder.querySelectorAll('li').forEach(el => {
      el.classList.remove('border')
    })
    event.target.parentNode.classList.add('border')
  }
})

function shuffledArr() {
  return (Math.random() - 0.5)
};

//tab active
let portfolioActive = document.getElementById('portfolio')
portfolioActive.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    portfolioActive.querySelectorAll('a').forEach(el => el.classList.remove('portfolio_active'))
    let img = document.getElementById('portfolio_img').querySelectorAll('li')
    let list = document.getElementById('portfolio_img')
    let sorted = [...img].sort(shuffledArr)
    list.innerHTML = ''
    for (let li of sorted) {
      list.appendChild(li)
    }
    event.target.classList.add('portfolio_active')
  }
})

//форма

button.addEventListener('click', (event) => {

  if (document.getElementById('name_field').checkValidity() && document.getElementById('email_field').checkValidity()) {
    event.preventDefault()

    let valueSubject = document.getElementById('subject_field').value.toString()
    let valueProject = document.getElementById('project_field').value.toString()
    const valueNameSubject = document.getElementById('subject')
    const valueNameDescription = document.getElementById('description')

    if (valueSubject === '') {
      valueNameSubject.innerHTML = 'Without subject'
    } else {
      document.getElementById('subject').innerHTML = 'Subject: ' + valueSubject
    }

    if (valueProject === '') {
      valueNameDescription.innerHTML = 'Without description'
    } else {
      document.getElementById('description').innerHTML = 'Description: ' + valueProject
    }

    document.getElementById('message_block').classList.remove('hidden')
    document.getElementById('message').classList.remove('hidden')
    document.getElementById('body').classList.add('over_hidden')
  }
})

closeButton.addEventListener('click', () => {
  document.getElementById('message_block').classList.add('hidden')
  document.getElementById('message').classList.add('hidden')
  document.getElementById('body').classList.remove('over_hidden')
  document.getElementsByName('form')[0].reset()
})