function register(details, callback) {
  setTimeout(() => {
    if (!details.name || !details.email) {
      callback('Please provide valid details.', null);
    } else {
      callback(
        null,
        `Welcome ${details.name}! Your registration is successful.`
      );
    }
  }, 2000);
}

const registerButton = document.getElementById('register-btn');
const responseBox = document.getElementById('response-box');
const responseMessage = document.getElementById('response-message');

registerButton.addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  responseBox.classList.add('hidden');
  responseMessage.textContent = '';
  responseMessage.classList.remove('success', 'error');

  responseMessage.textContent = 'Processing your registration...';
  responseBox.classList.remove('hidden');

  register({ name, email }, (error, success) => {
    responseMessage.textContent = error ? error : success;
    responseMessage.classList.add(error ? 'error' : 'success');
  });
});
