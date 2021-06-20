const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Miyah Myles',
        position: 'Marketing',
        photo: 
            'https://randomuser.me/api/portraits/men/32.jpg',
        text:
        'This guy is a top notch designer and front end developer.He communicates well, works fast and produces quality work. We have been lucky to work with him!',

    },
    {
        name:'Loca Mia',
        position: 'Director',
        photo:
        'https://randomuser.me/api/portraits/men/34.jpg',
        text:
        'I worked with literally hundres of HTML/css developers and i have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code!'
    },
    {
        name:'Pierre Mao',
        position: 'Cleaner',
        photo:
        'https://randomuser.me/api/portraits/men/31.jpg',
        text:
        'I worked with literally hundres of HTML/css developers and i have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code!'
    },
]

let idx = 1
function updateTestimonial(){
    const {name, position, photo, text} = testimonials[idx]
    
    testimonial.innerHTML = text
    userImage.src = photo
    role.innerHTML = position
    username.innerHTML = name
    idx++

    if(idx > testimonials.length - 1){
        idx = 0
    }
}

setInterval(updateTestimonial, 10000)
