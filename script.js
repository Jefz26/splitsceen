const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

left.addEventListerner ('mouseenter', () => container.classList.add('hover-left'))
left.addEventListerner('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListerner ('mouseenter', () => container.classList.add('hover-right'))
right.addEventListerner('mouseleave', () => container.classList.remove('hover-right'))