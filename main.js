const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Função CallBack
function handleTryClick (event) {
    event.preventDefault() // Remova o padrão
    
    const inputNumber = document.querySelector("#inputNumber")

    if (Number(inputNumber.value) == randomNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        screen2
            .querySelector(".screen2 h2")
            .innerText = `You got it in ${xAttempts} tries!`
    }

    inputNumber.value = ''

    xAttempts++
}

// Events

const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

btnTry.addEventListener('click' , handleTryClick )

btnReset.addEventListener('click' , function () {
   screen2.classList.add('hide')
   screen1.classList.remove('hide')
   xAttempts = 1
} )