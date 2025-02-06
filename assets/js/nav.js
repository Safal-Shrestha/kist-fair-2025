let loadNav = async () => {
  let f = await fetch('/automation-system/nav.php');
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
    window.location.href = '/automation-system';
  });
  document.querySelector('.schedule-mobile').addEventListener('click',()=>{
    window.location.href = '/automation-system';
  });
  document.querySelector('#map-pc').addEventListener('click',()=>{
    window.location.href = '/automation-system/map.html';
  });
  document.querySelector('.map-mobile').addEventListener('click',()=>{
    window.location.href = '/automation-system/map.html';
  });
  if(document.querySelector('#support-pc')){
    document.querySelector('#support-pc').addEventListener('click',()=>{
      window.location.href = '/automation-system/Participants/participant_support.html';
    });
  }
  if(document.querySelector('.support-mobile')){
    document.querySelector('.support-mobile').addEventListener('click',()=>{
      window.location.href = '/automation-system/Participants/participant_support.html';
    });
  }
  if(document.querySelector('#problem-pc')){
    document.querySelector('#problem-pc').addEventListener('click',()=>{
      window.location.href = '/automation-system/Participants/volunteer_problem.html';
    });
  }
  if(document.querySelector('.problem-mobile')){
    document.querySelector('.problem-mobile').addEventListener('click',()=>{
      window.location.href = '/automation-system/Participants/volunteer_problem.html';
    });
  }
  if(document.querySelector('#about-us-pc')){
    document.querySelector('#about-us-pc').addEventListener('click',()=>{
      window.location.href = '/automation-system/about_us.html';
    });
  }
  if(document.querySelector('.about-us-mobile')){
    document.querySelector('.about-us-mobile').addEventListener('click',()=>{
      window.location.href = '/automation-system/about_us.html';
    });
  }
}

window.onload = loadNav;