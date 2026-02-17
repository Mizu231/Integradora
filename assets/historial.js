import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (!user) globalThis.location.href = 'bienvenida.html';
});

document.getElementById('logout-link').onclick = (e) => {
  e.preventDefault();
  signOut(auth);
};
