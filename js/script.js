//contador inicial
let count = 0;

//seleciona o valor do button
const value = document.getElementById('value');
const btns = document.querySelectorAll(".btn")

btns.forEach(function (btn) {
    btn.addEventListener('click', (e) => {
        const estilo = e.currentTarget.classList
        if (estilo.contains('subtrai')) {
            count--
        }
        else if (estilo.contains('soma')) {
            count++
        } else {
            count = 0
        }

        if (count < 0) {
            value.style.color = "#ea4335"
        }
        else if (count > 0) {
            value.style.color = "#34A853"
        } else {
            value.style.color = "#ffff"
        }


        value.textContent = count;
    })
})