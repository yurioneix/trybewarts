const headerButton = document.querySelector('#header-btn');
const headerEmail = document.querySelector('#header-email');
const headerPassword = document.querySelector('#header-password');
const agreementBtn = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');

function checkLogin() {
  if (headerEmail.value === 'tryber@teste.com' && headerPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
headerButton.addEventListener('click', checkLogin);

agreementBtn.addEventListener('change', () => {
  if (agreementBtn.checked) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled');
  }
});
