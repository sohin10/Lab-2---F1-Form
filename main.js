let color = document.querySelector('.color');
let tshirt = document.querySelector('.tshirt');

color.addEventListener('input', ()=>{
    tshirt.style.background = color.value;
})


