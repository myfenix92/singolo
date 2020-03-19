const imageVertical = document.getElementById('v_image')
const imageHorizontal = document.getElementById('h_image')
const imageBlueVertical = document.getElementById('v_blue_image')
const portfolioBorder = document.getElementById('portfolio_img')
const button = document.getElementById('submit')
const closeButton = document.getElementById('close_btn')

//menu

function menuActive(i) {
  const links = document.getElementById('header_menu').querySelectorAll('li')
  links.forEach(el => {
    el.classList.remove('active')
  })
  links[i].classList.add('active')
}

//scroll active menu

document.addEventListener('scroll', onScroll)

function onScroll() {
  const curPos = window.scrollY
  const servicesBlockPos = document.getElementById('services').offsetTop - 89
  const portfolioBlockPos = document.getElementById('portfolio').offsetTop - 89
  const aboutBlockPos = document.getElementById('about').offsetTop - 89
  const contactBlockPos = document.getElementById('contact').offsetTop - 89

  if (curPos < servicesBlockPos) menuActive(0)
  else if (curPos >= servicesBlockPos && curPos < portfolioBlockPos) menuActive(1)
  else if (curPos >= portfolioBlockPos && curPos < aboutBlockPos) menuActive(2)
  else if (curPos >= aboutBlockPos && curPos < contactBlockPos && !endPage()) menuActive(3)
  if (endPage() || curPos >= contactBlockPos) menuActive(4)
}

function endPage() {
  return window.window.scrollY >= document.documentElement.offsetHeight - innerHeight
}

//change bg slider

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

let items = document.querySelectorAll('.slide')
let curItem = 0
let isEnabled = true

function changeCurItem(n) {
  curItem = (n + items.length) % items.length
}

function hideItem(direction) {
  isEnabled = false
  items[curItem].classList.add(direction)
  items[curItem].addEventListener('animationend', function() {
    this.classList.remove('active_slider', direction)
    if (imageVertical.hidden == true) {
      imageVertical.hidden = false
    }

    if (imageBlueVertical.hidden == true) {
      imageBlueVertical.hidden = false
    }

    if (imageHorizontal.hidden == true) {
      imageHorizontal.hidden = false
    }
  })
  
}

function showItem(direction) {
  items[curItem].classList.add('next', direction)
  items[curItem].addEventListener('animationend', function() {
    this.classList.remove('next', direction)
    this.classList.add('active_slider')
    isEnabled = true
  })
  
}

function previousItem(n) {
  hideItem('to-right')
  changeCurItem(n - 1)
  showItem('from-left')
  
}

function nexItem(n) {
  hideItem('to-left')
  changeCurItem(n + 1)
  showItem('from-right')
}

document.querySelector('.img_left').addEventListener('click', function() {
  if(isEnabled) {
    previousItem(curItem)
  } 
 
})

document.querySelector('.img_right').addEventListener('click', function() {
  if(isEnabled) {
    nexItem(curItem)
  } 
})

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
let portfolioActive = document.getElementById('portfolio_block')
portfolioActive.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    portfolioActive.querySelectorAll('a').forEach(el => el.classList.remove('portfolio_active', 'pointer'))
    event.target.classList.add('portfolio_active')
    }

    if(event.target.classList == 'portfolio_active') {
      let img = document.getElementById('portfolio_img').querySelectorAll('li')
      let list = document.getElementById('portfolio_img')
      let sorted = [...img].sort(shuffledArr)
      list.innerHTML = ''
      for (let li of sorted) {
        list.appendChild(li)
      }
      event.target.classList.add('pointer')
    }
})



//form

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