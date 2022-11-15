const button = document.querySelector('a')
const input = document.querySelector('input')
const text = document.querySelector('h3')

text.style.opacity = 0

setTimeout(() => {
  text.style.transition = '.50s'
  text.style.opacity = 1
}, 500)

let init = 0

button.addEventListener('click', () => {
  init++

  if(init == 1){ 
    text.style.transition = '.50s'
    text.style.opacity = 0
    
    setTimeout(() => {
      text.innerHTML = `oh nama km <span class="text-danger">${input.value}</span> yh, klo blh tw km asal mn y?`
      text.style.opacity = 1
    }, 500)

  } else if (init == 2){
    text.style.transition = '.50s'
    text.style.opacity = 0
    
    setTimeout(() => {
      text.innerHTML = `hm asal km dr <span class="text-danger">${input.value}</span> toh, sama dong, btw hobi km ap? 🧐`
      text.style.opacity = 1
    }, 500)
  } else if (init == 3){
    text.style.transition = '.50s'
    text.style.opacity = 0
    
    setTimeout(() => {
      text.innerHTML = `njr <span class="text-danger">${input.value}</span> coeg 😨, hm klo blh tw, km skola apa kerja yh? 🤨`
      text.style.opacity = 1
    }, 500)
    
  } else if (init == 4){
    text.style.transition = '.50s'
    text.style.opacity = 0

    input.style.display = 'none'
    button.style.display = 'none'

    document.querySelector('marquee').innerHTML = 'refresh if 🫵 wanna do it again'
    
    setTimeout(() => {
      text.innerHTML = `oh <span class="text-danger">${input.value}</span> toh, kren", dah dl yh, trimakasi <span>👋</span>`
      text.style.opacity = 1
    }, 500)
  }
})