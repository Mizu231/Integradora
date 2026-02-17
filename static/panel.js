document.getElementById('logout-link').onclick = function (e) {
  e.preventDefault();
  window.location.href = '/';
};

document.getElementById('toggle-door').onclick = function () {
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
