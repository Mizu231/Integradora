// Aquí puedes poner la lógica de login con Firebase o solo simular el login para pruebas locales
// Por ahora, solo redirige a /inicio al hacer submit

document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  // Aquí deberías validar con Firebase Auth
  window.location.href = '/inicio';
});
