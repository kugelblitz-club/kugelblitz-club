const form = document.querySelector('#contact-form');
const message = document.querySelector('#form-message');
document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelectorAll('.language-button').forEach((button) => {
  button.addEventListener('click', () => {
    const language = button.dataset.language;
    document.documentElement.lang = language;
    document.querySelectorAll('[data-en][data-es]').forEach((element) => {
      element.textContent = element.dataset[language];
    });
    document.querySelectorAll('.language-button').forEach((option) => {
      const isActive = option === button;
      option.classList.toggle('active', isActive);
      option.setAttribute('aria-pressed', String(isActive));
    });
  });
});

form.addEventListener('submit', (event) => {
  if (form.action.includes('formsubmit.co')) {
    return;
  }

  event.preventDefault();
  const name = new FormData(form).get('name');
  message.textContent = document.documentElement.lang === 'es'
    ? `Gracias, ${name}. Tu mensaje está listo para enviar.`
    : `Thanks, ${name}. Your message is ready to send.`;
  form.reset();
});
