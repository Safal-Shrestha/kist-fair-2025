let status;
status = document.querySelectorAll('.schedule-status')
status.forEach((s, i) => {
  if (s.innerText.toUpperCase() === 'COMPLETED') {
    document.querySelector(`.schedule${i + 1}`).style.display = 'none';
  }
  else if (s.innerText.toUpperCase() === 'ONGOING') {
    document.querySelector(`.schedule${i + 1}`).style.border = '2px solid #17f514';
    document.querySelector(`.schedule${i + 1} .schedule-status`).style.color = '#17f514';
    document.querySelector(`.schedule${i + 1} .schedule-title-status`).style.backgroundColor = '#17f514';
    document.querySelector(`.schedule${i + 1} .schedule-description`).style.backgroundColor = '#17f514';
    document.querySelector(`.schedule${i + 1} .schedule-description`).addEventListener('mouseenter', () => {
      document.querySelector(`.schedule${i + 1} .schedule-description`).style.backgroundColor = '#0e9c0c'
    });
    document.querySelector(`.schedule${i + 1} .schedule-description`).addEventListener('mouseleave', () => {
      document.querySelector(`.schedule${i + 1} .schedule-description`).style.backgroundColor = '#17f514'
    });
  }
  else if (s.innerText.toUpperCase() === 'UPCOMING') {
    document.querySelector(`.schedule${i + 1}`).style.border = '2px solid rgb(58, 120, 255)';
    document.querySelector(`.schedule${i + 1} .schedule-status`).style.color = 'rgb(58, 120, 255)';
    document.querySelector(`.schedule${i + 1} .schedule-title-status`).style.backgroundColor = 'rgb(58, 120, 255)';
  }
})
setInterval(() => {
  status = document.querySelectorAll('.schedule-status')
  status.forEach((s, i) => {
    if (s.innerText.toUpperCase() === 'COMPLETED') {
      document.querySelector(`.schedule${i + 1}`).style.display = 'none';
    }
    else if (s.innerText.toUpperCase() === 'ONGOING') {
      document.querySelector(`.schedule${i + 1}`).style.border = '2px solid #17f514';
      document.querySelector(`.schedule${i + 1} .schedule-status`).style.color = '#17f514';
      document.querySelector(`.schedule${i + 1} .schedule-title-status`).style.backgroundColor = '#17f514';
      document.querySelector(`.schedule${i + 1} .schedule-description`).style.backgroundColor = '#17f514';
    }
    else if (s.innerText.toUpperCase() === 'UPCOMING') {
      document.querySelector(`.schedule${i + 1}`).style.border = '2px solid rgb(58, 120, 255)';
      document.querySelector(`.schedule${i + 1} .schedule-status`).style.color = 'rgb(58, 120, 255)';
      document.querySelector(`.schedule${i + 1} .schedule-title-status`).style.backgroundColor = 'rgb(58, 120, 255)';
    }
  });
}, 3000);

//for viewing description
let buttons = document.querySelectorAll('.schedule-description, .finished-schedule-description');
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const scrollY = window.scrollY;
    const centerY = scrollY + window.innerHeight / 5;
    document.querySelector('.description-body').style.top = `${centerY}px`;
    document.querySelector('.description-body').style.display = 'block';
    document.querySelector('#overlay').style.display = 'block';
    document.querySelector('.description-body .description-body-title').innerText = 'Title of Event';
    document.querySelector('.description-body .description-body-description').innerText = 'Descrption of Event';
  });
});

document.querySelector('.description-body-cross-button').addEventListener('click', () => {
  document.querySelector('.description-body').style.display = 'none';
  document.querySelector('#overlay').style.display = 'none';
});