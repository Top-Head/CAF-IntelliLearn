document.getElementById('to-login').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('register-screen').classList.add('hidden');
  document.getElementById('login-screen').classList.remove('hidden');
});

document.getElementById('to-register').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('login-screen').classList.add('hidden');
  document.getElementById('register-screen').classList.remove('hidden');
});

function togglePassword(inputId, eyeId) {
  const input = document.getElementById(inputId);
  const eye = document.getElementById(eyeId);
  input.type = input.type === 'password' ? 'text' : 'password';
}
