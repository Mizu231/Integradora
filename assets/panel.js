import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (!user) window.location.href = 'bienvenida.html';
});

document.getElementById('logout-link').onclick = (e) => {
  e.preventDefault();
  signOut(auth);
};

document.getElementById('toggle-door').onclick = () => {
  const status = document.getElementById('door-status');
  if (status.classList.contains('status-closed')) {
    status.classList.remove('status-closed');
    status.classList.add('status-open');
    status.textContent = 'ABIERTA';
  } else {
    status.classList.remove('status-open');
    status.classList.add('status-closed');
    status.textContent = 'CERRADA';
  }
};
