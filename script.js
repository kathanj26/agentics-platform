document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.cta-form');
  const button = form?.querySelector('button');

  form?.addEventListener('submit', (event) => {
    event.preventDefault();

    const input = form.querySelector('input');
    const email = input.value.trim();

    if (!email) {
      input.focus();
      return;
    }

    button.disabled = true;
    button.textContent = 'Request Sent';
    button.style.opacity = '0.8';

    const originalText = button.textContent;
    setTimeout(() => {
      button.textContent = 'You\'re on the list';
      button.disabled = false;
      button.style.opacity = '1';
      input.value = '';
      setTimeout(() => {
        button.textContent = 'Get Early Access';
      }, 1800);
    }, 900);
  });

  document.querySelectorAll('.mode-btn').forEach((buttonEl) => {
    buttonEl.addEventListener('click', () => {
      document.querySelectorAll('.mode-btn').forEach((btn) => btn.classList.remove('active'));
      buttonEl.classList.add('active');
    });
  });
});
