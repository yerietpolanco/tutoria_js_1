let price = 1200000

let useramount = document.querySelector('#useramount')
let usercolor = document.querySelector('#usercolor')
let button = document.querySelector('#getTotal')

// elementos a actualizar

let total = document.querySelector('#total')
let color = document.querySelector('#color')
let amount = document.querySelector('#amount')

button.addEventListener('click', function () {
    console.log("Monto: " + useramount.value)
    console.log("Color: " + usercolor.value)

    total.innerHTML = useramount.value * price
    amount.innerHTML = useramount.value
    color.style.backgroundColor = usercolor.value
});

