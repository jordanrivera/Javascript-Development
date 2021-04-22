const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="" />'
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur, Distinctio debitis cumque laboriosam '
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/25.jpg" alt="" />'
    name.innerHTML = 'John Doe'
    date.innerHTML = 'October 08, 2020'
    animated_bgs.forEach(bg => bg.classList.remove('animted-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animted-bg-text'))
}
