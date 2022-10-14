const headerButton = document.querySelector('#header-btn');
const headerEmail = document.querySelector('#header-email')
const headerPassword = document.querySelector('#header-password')

console.log(headerEmail)
console.log(headerPassword)

function checkLogin() {
        if (headerEmail.value === 'tryber@teste.com' && headerPassword.value === '123456') {
            alert('Olá, Tryber!')
        } else {
            alert("Email ou senha inválidos.")
        }
}
headerButton.addEventListener('click', checkLogin);


