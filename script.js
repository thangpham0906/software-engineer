document.addEventListener('DOMContentLoaded', () => {
  const fadeEls = document.querySelectorAll('.fade-in-up');

  const options = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        obs.unobserve(entry.target);
      }
    });
  }, options);

  fadeEls.forEach(el => {
    // Đặt animation-play-state ban đầu = paused (thêm trong CSS)
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
});
