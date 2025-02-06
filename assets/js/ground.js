document.querySelector('.go-back').addEventListener('click', () => {
  window.location.pathname = 'automation-system/map.html';
});

let groundStall = document.querySelectorAll('.ground');
groundStall.forEach((ground) => {
  ground.addEventListener('click', () => {
    document.querySelector('.description-body').style.display = 'block';
    const scrollY = window.scrollY;
    const centerY = scrollY + window.innerHeight / 5;
    document.querySelector('.description-body').style.top = `${centerY}px`;
    document.querySelector('#overlay').style.display = 'block'
  })
});

document.querySelector('.description-body-cross-button').addEventListener('click', () => {
  document.querySelector('.description-body').style.display = 'none';
  document.querySelector('#overlay').style.display = 'none';
});