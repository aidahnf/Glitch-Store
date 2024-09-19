let menu = document.querySelector('#bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');

}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');

}

const openBtn = document.getElementById('open_cart_btn')
const cart = document.getElementById('sidecart')
const closeBtn = document.getElementById('close_btn')
const backdrop = document.querySelector('.backdrop')




openBtn.addEventListener('click', openCart)
closeBtn.addEventListener('click', closeCart)
backdrop.addEventListener('click', closeCart)


// opeen cart

function openCart(){
    cart.classList.add('open')
    backdrop.style.display = 'block'
    setTimeout(() =>{
        backdrop.classList.add('show')
    },0)

}

function closeCart(){
    cart.classList.remove('open')
    backdrop.classList.remove('show')

    setTimeout(() =>{
        backdrop.style.display = 'none'
    },500)
}

