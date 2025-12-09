(function () {
  const MIN_HEIGHT = 500;
  function checkScreenHeight() {
    if (window.innerHeight < MIN_HEIGHT) {
      alert(`Screen height too low! Minimum required is ${MIN_HEIGHT}px.`);
    }
  }
  window.addEventListener('load', checkScreenHeight);
  window.addEventListener('resize', checkScreenHeight);
})();
