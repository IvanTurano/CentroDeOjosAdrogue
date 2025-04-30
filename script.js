const nav = document.querySelector("#nav-bar")
const abrir = document.querySelector("#menu")
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click",() => {
    nav.classList.add("visible")
})

cerrar.addEventListener("click",() => {
    nav.classList.remove("visible")
})

nav.addEventListener("click", () => {
    nav.classList.remove("visible")
})



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); 
  
      const targetId = this.getAttribute('href'); 
      const targetElement = document.querySelector(targetId); 
  
      if (targetElement) {
        
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
  
        
        const duration = 1000; 
  
        
        smoothScrollTo(targetPosition, duration);
      }
    });
  });
  
  
  function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(animation);
  }