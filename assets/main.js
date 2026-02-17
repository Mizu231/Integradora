// Firebase SDK imports (modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// Tu configuración de Firebase
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


// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


// SPA navigation and auth logic
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
  const el = document.getElementById(screenId);
  if (el) el.style.display = 'block';
}

function showAppScreens() {
  document.getElementById('main-header').style.display = '';
  showScreen('inicio-screen');
}

function hideAppScreens() {
  document.getElementById('main-header').style.display = 'none';
  showScreen('login-screen');
}

globalThis.addEventListener('DOMContentLoaded', () => {
  // Navegación SPA
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = link.getAttribute('href').replace('#', '');
      if (target === 'logout') {
        signOut(auth);
        return;
      }
      showScreen(target + '-screen');
    });
  });

  // Login form
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
        // El estado de auth cambiará y onAuthStateChanged se encargará
      } catch (err) {

      }
    });
  }

  // Estado de autenticación
  onAuthStateChanged(auth, (user) => {
    if (user) {
      showAppScreens();
      renderChart();
    } else {
      hideAppScreens();
    }
  });
});

function toggleDoor() {
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
}

// Chart.js - Weekly openings
function renderChart() {
  const ctx = document.getElementById('openingsChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
      datasets: [{
        label: 'Aperturas',
        data: [5, 7, 6, 8, 4, 3, 2],
        backgroundColor: '#0f0a',
        borderColor: '#0f0',
        borderWidth: 2
      }]
    },
    options: {
      plugins: {
        legend: { labels: { color: '#e0ffe0' } }
      },
      scales: {
        x: { ticks: { color: '#e0ffe0' }, grid: { color: '#0a03' } },
        y: { ticks: { color: '#e0ffe0' }, grid: { color: '#0a03' }, beginAtZero: true }
      }
    }
  });
}
