let table = document.querySelector('.table')
let amount0fBoxes = 621

for(let i = 0; i < amount0fBoxes; i++) {
    let box = document.createElement('div')
    box.classList.add('box')
    table.append(box)
    box.addEventListener('mouseover', () => setColor(box) )
    box.addEventListener('mouseleave', () => removeColor(box) )
}

function setColor(el) {
   el.style.background = `rgb(${random()}, ${random()}, ${random()} )`
}

function removeColor(item) {
    item.style.background = ''
}

function random() {
return Math.floor(Math.random() * 256)
}

// оператор spread 

let cars = ['bmw', 'mers', 'audi'];
let gm = ['gentra', 'nexia', 'cobalt'];

// let allCars = cars.concat(gm)

let allCars = [...cars, 'damas', ...gm] 

console.log(allCars);

let user = {
    id: 1,
    name: 'Admin'
}

let user2 = {...user, work:'Programmist'}

console.log(user2);

//rest

function simple(one, ...nums) {
    
  nums.forEach((el) => console.log(el * 2))
  
}

simple(10,20,30,40,50)