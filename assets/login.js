import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCb0f4_eHGVkFProlNSJ7ik1qHYv71ZTZg",
  authDomain: "intmeg-68ede.firebaseapp.com",
  databaseURL: "https://intmeg-68ede-default-rtdb.firebaseio.com",
  projectId: "intmeg-68ede",
  storageBucket: "intmeg-68ede.firebasestorage.app",
  messagingSenderId: "509219329843",
  appId: "1:509219329843:web:5d345e070ffe2f24f4d046",
  measurementId: "G-YGVZJPTGC3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('login-error');
    errorDiv.style.display = 'none';
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirigir a la app principal
      window.location.href = 'index.html';
    } catch (err) {
      errorDiv.textContent = 'Usuario o contraseña incorrectos';
      errorDiv.style.display = 'block';
    }
  });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    globalThis.location.href = 'index.html';
  }
});
