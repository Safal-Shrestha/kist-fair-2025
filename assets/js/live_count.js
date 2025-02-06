const visitorElement = document.querySelector('.live-count-number');

function animateVisitorCount(currentCount) {
    visitorElement.textContent = currentCount;
    visitorElement.style.animation = 'increaseCount 0.5s ease-out';
}

let FetchedData, oldFetchedData = {};

const hasChange = (oldFetchedData, FetchedData) => {
  if (oldFetchedData.length !== FetchedData.length) return true;

  for (let i = 0; i < oldFetchedData.length; i++) {
    if (oldFetchedData[i].status !== FetchedData[i].status) {
      return true;
    }
  }
  return false;
}

let fetchData = async () =>{
  let f = await fetch('automation-system/backend/liveCountData.php');
  let FetchedData = await f.json();
  if(hasChange(FetchedData,oldFetchedData)){
    // document.querySelector('.live-count-number').innerText = FetchedData.visitor + FetchedData.participant;
    animateVisitorCount(FetchedData.visitor+FetchedData.participant);
    document.querySelector('.participant-count').innerText = FetchedData.participant;
    document.querySelector('.stall-count').innerText = FetchedData.project;
  }
}

fetchData();

setInterval(fetchData, 1000);

window.onload = function () {
  animateVisitorCount();
}

//visitor, participant, project