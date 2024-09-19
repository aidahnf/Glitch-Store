let menu = document.querySelector('#bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

function val(e) {
    alert("Ordered^^")
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

const ITEMS = [
    {
        id: 1,
        name: `“New Jeans” NewJeans 1st EP`,
        price: 17.45,
        image:'IMAGES/new jeans copy.png',
        window:'NewJeans.html',
        qty: 1,
    },
    {
        id: 2,
        name: "\"Girls\" Aespa 2nd Mini Album",
        price: 18.68,
        image: 'IMAGES/aespa.png',
        window:'girlAespa.html',
        qty: 1
    },
    {
        id: 3,
        name: '“Feel My Rhythm” \n Red Velvet Mini Album',
        price: 38.12,
        image:'IMAGES/Feel my rythm.png',
        window:'FeelMyRhythm.html',
        qty: 1,
    },
    {
        id: 4,
        name: '“Hello Future” \n NCT Dream 1st Album',
        price: 28.00,
        image:'IMAGES/HelloFuture.png',
        window:'HelloFuture.html',
        qty: 1,
    },
    {
        id: 5,
        name: '“R” \n Rosé First Single Album',
        price: 12.24,
        image:'IMAGES/R.png',
        window:'R.html',
        qty: 1,
    },
    {
        id: 6,
        name: '“Flip That” \n LOONA Summer Special Mini Album',
        price: 18.54,
        image:'IMAGES/loona.jpg',
        window:'LOONA.html',
        qty: 1,
    },
    {
        id: 7,
        name: '“BAD LOVE” \n (Space Gun ver.) \n KEY SHINee',
        price: 17.55,
        image:'IMAGES/Badlove.png',
        window:'badLove.html',
        qty: 1,
    },
    {
        id: 8,
        name: '“Hot Sauce” \n (Jewel Case ver.) \n NCT DREAM',
        price: 18.65,
        image:'IMAGES/HotSauce.png',
        window:'hotSauce.html',
        qty: 1,
    },
    {
        id: 9,
        name: '“Pink Tape” \n f(x) 2nd Album',
        price: 13.45,
        image:'IMAGES/pink.png',
        window:'pinkTape.html',
        qty: 1,
    },
    {
        id: 10,
        name: '“The Album” \n Blackpink Debut Album',
        price: 17.50,
        image:'IMAGES/blackpink.jpg',
        window:'blackpink.html',
        qty: 1,
    },
    {
        id: 11,
        name: 'The Reve Festival 2022 \n (Birthday Cake Ver.) \n Red Velvet',
        price: 14.54,
        image:'IMAGES/Reve.png',
        window:'reveFestival.html',
        qty: 1,
    },
    {
        id: 12,
        name: '“LILAC” \n (Photobook ver.) \n IU 5th Album',
        price: 66.64,
        image:'IMAGES/lilac.png',
        window:'lilac.html',
        qty: 1,
    },
    {
        id: 13,
        name: '“Glitch Mode” \n NCT DREAM 2nd Album',
        price: 18.65,
        image:'IMAGES/Glitchmode.png',
        window:'Glitch.html',
        qty: 1,
    },
    {
        id: 14,
        name: '“THE SECOND STEP : CHAPTER TWO” \n TREASURE 2ND MINI ALBUM',
        price: 21.55,
        image:'IMAGES/treasure.png',
        window:'Treasure.html',
        qty: 1,
    },
    {
        id: 15,
        name: '“IN生 (in Life)” \n Stray Kids \n (Standard Ver.)',
        price: 21.55,
        image:'IMAGES/stray.png',
        window:'Straykids.html',
        qty: 1,
    },
    {
        id: 16,
        name: '“ITz ICY” \n ITZY 1st Mini Album',
        price: 18.25,
        image:'IMAGES/itzy.png',
        window:'ITZY.html',
        qty: 1,
    },
]



const openBtn = document.getElementById('open_cart_btn')
const cart = document.getElementById('sidecart')
const closeBtn = document.getElementById('close_btn')
const backdrop = document.querySelector('.backdrop')
const itemsEl = document.querySelector('.items')
const cartItems = document.querySelector('.cart_items')
const itemsNum = document.getElementById('items_num')
const pricetTtl = document.getElementById('subtotal_price')

let cart_data = []

openBtn.addEventListener('click', openCart)
closeBtn.addEventListener('click', closeCart)
backdrop.addEventListener('click', closeCart)

renderItems()
renderCartItems()


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

// Add Items to Cart
function addItem(idx, boxId){
    // untuk liat apakah items nya sama
    const foundItem = cart_data.find(
        (box)=> box.id.toString() === boxId.toString()
    )

    if(foundItem){
       addQty(boxId)
    }else{
        cart_data.push(ITEMS[idx])
    }

    updateCart()
    openCart()
}

// batalin item di cart

function removeItem(boxId){
    cart_data = cart_data.filter((box)=> box.id != boxId)

    updateCart()
}

// nambah jumlah itemnya di cart

function addQty(boxId){
    cart_data = cart_data.map((box)=>
    box.id.toString() === boxId.toString()
    ?{...box, qty: box.qty + 1}
    : box
    )

    updateCart()
}

// ngurangin jumlah itemnya di cart

function dltQty(boxId){
    cart_data = cart_data.map((box)=>
    box.id.toString() === boxId.toString()
    ?{...box, qty: box.qty > 1 ? box.qty - 1 : box.qty}
    : box
    )

    updateCart()
}


    function itungTtl(){
        let itungItems = 0

        cart_data.forEach((box)=> (itungItems+= box.qty))

        itemsNum.innerText = itungItems

    }

// totalin harga di cart
function hargaTtl(){
    let subtotal = 0

    cart_data.forEach((box)=> (subtotal += box.price * box.qty))

    pricetTtl.innerText = subtotal


}

// // render items

function renderItems() {
    ITEMS.forEach((box,idx) => {
        const boxEl = document.createElement('div')
        boxEl.classList.add('box')
        boxEl.onclick = () => addItem(idx, box.id)
        boxEl.innerHTML = `
                        <a href="${box.window}">
                        <img src="${box.image}" alt="">
                        <span>  <h3>${box.name}</h3></span>
                         <h1>$${box.price}</h1>    
                         </a>
                        <button>Add to Cart</button>
                     `
        itemsEl.appendChild(boxEl)
    })
}

// Display / render cart Items

function renderCartItems(){
    // hapus semua
    cartItems.innerHTML = ''
    // nambah item ke cart
    cart_data.forEach((box) =>{
        const cartItem = document.createElement('div')
        cartItem.classList.add('cart_item')
        cartItem.innerHTML = `
        <div class="remove_item" onclick="removeItem(${box.id})">
        <span> &times;</span>
    </div>
    <div class="item_img">
        <img src="${box.image}" alt="">
    </div>

    <div class="item_details">
        <p>${box.name}</p>
        <strong>$${box.price}</strong>
        <div class="qty">
            <span onclick="dltQty(${box.id})">-</span>
            <strong>${box.qty}</strong>
            <span onclick="addQty(${box.id})">+</span>
         </div>
    </div>
        `

    cartItems.appendChild(cartItem)
    })
}

function updateCart(){

    renderCartItems()

    itungTtl()

    hargaTtl()
}
