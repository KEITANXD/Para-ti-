document.addEventListener('DOMContentLoaded', function () {
  const btnNo = document.getElementById('btn-no');
  if (!btnNo) return; // si no existe, salimos sin errores

  function moverBotonNo() {
    const btnRect = btnNo.getBoundingClientRect();
    const maxX = Math.max(0, window.innerWidth - btnRect.width - 10);
    const maxY = Math.max(0, window.innerHeight - btnRect.height - 10);

    // paréntesis para evitar problemas de precedencia
    const x = Math.floor(Math.random() * (maxX));
    const y = Math.floor(Math.random() * (maxY));

    btnNo.style.position = 'absolute';
    btnNo.style.left = x + 'px';
    btnNo.style.top = y + 'px';
  }

  btnNo.addEventListener('mouseover', moverBotonNo);
});