const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}

/*let carts = document.querySelectorAll('.nml');

  let products=[
    {
        name: 'Mens ',
        tag:  'greytshirt',
        Price:15,
        incart:0
    },
    {
        name: 'Grey Hoodie',
        tag:  'greyhoodie',
        Price:20,
        incart:0
    },
    {
        name: 'Grey Tshirt',
        tag:  'balckhoodie',
        Price:25,
        incart:0
    }
] */

/*for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
        cartsNumbers();
    })
}
function cartsNumbers(){
    let productNumbers = loacalStorage.getItem('cartsNumbers',1);
}
    productNumbers = parseInt(productNumbers);
    if (productNumbers){
        localStorage.setItem('cartNumbers',productNumbers+1);
        document.querySelector('.cart span').productNumbers+1;   
    }else{
    localStorage.setItem('cartNumbers',1);
    document.querySelector('.cart span').textContent=1;
    } */ 
