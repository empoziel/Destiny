//clicking the button adds a new class 'toggle' to the navigation area
//removes the class when you click it again
const btn = document.querySelector('.nav-btn');
const nav = document.querySelector('nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('toggle');
});

//video auto play
document.addEventListener('DOMContentLoaded', function () {
  const videos = document.querySelectorAll('video');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
        entry.target.addEventListener('ended', () => {
          entry.target.currentTime = 0;
          entry.target.play();
        });
      } else {
        entry.target.pause();
      }
    });
  });
  videos.forEach((video) => {
    observer.observe(video);
  });
});