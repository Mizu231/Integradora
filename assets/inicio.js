import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (!user) window.location.href = 'bienvenida.html';
});

document.getElementById('logout-link').onclick = (e) => {
  e.preventDefault();
  signOut(auth);
};

// Chart.js - Weekly openings
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
