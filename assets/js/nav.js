let loadNav = async () => {
  let f = await fetch('../../nav.html');
  let res = await f.text();
  document.querySelector('#nav-bar').innerHTML = res;

  let clickCount = 0;
  document.querySelector('.bar').addEventListener('click', () => {
    clickCount++;
    if (clickCount % 2 !== 0) {
      document.querySelector('.mobile').style.display = 'flex';
    }
    else {
      document.querySelector('.mobile').style.display = 'none';
    }
  });

  document.querySelector('#schedule-pc').addEventListener('click',()=>{
    window.location.href = '../../index.php';
  });
  document.querySelector('.schedule-mobile').addEventListener('click',()=>{
    window.location.href = '../../index.php';
  });
  document.querySelector('#map-pc').addEventListener('click',()=>{
    window.location.href = '../../map.html';
  });
  document.querySelector('.schedule-mobile').addEventListener('click',()=>{
    window.location.href = '../../map.html';
  });
  document.querySelector('#support-pc').addEventListener('click',()=>{
    window.location.href = '../../Participants/participant_support.html';
  });
  document.querySelector('.support-mobile').addEventListener('click',()=>{
    window.location.href = '../../Participants/participant_support.html';
  });
  document.querySelector('#problem-pc').addEventListener('click',()=>{
    window.location.href = '../../Participants/volunteer_problem.html';
  });
  document.querySelector('.problem-mobile').addEventListener('click',()=>{
    window.location.href = '../../Participants/volunteer_problem.html';
  });
  document.querySelector('#about-us-pc').addEventListener('click',()=>{
    window.location.href = '../../about_us.html';
  });
  document.querySelector('.about-us-mobile').addEventListener('click',()=>{
    window.location.href = '../../about_us.html';
  });
}

window.onload = loadNav;