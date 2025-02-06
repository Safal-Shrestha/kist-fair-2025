const visitorElement = document.querySelector('.live-count-number');

let FetchedData, oldFetchedData = {};

const hasChange = (oldFetchedData, FetchedData) => {
  if (!oldFetchedData || !FetchedData) return true;

  if (Object.keys(oldFetchedData).length === 0) return true;

  return (
    oldFetchedData.visitor !== FetchedData.visitor ||
    oldFetchedData.participant !== FetchedData.participant ||
    oldFetchedData.project !== FetchedData.project
  );
};

let fetchData = async () =>{
  let f = await fetch('/automation-system/backend/liveCountData.php');
  FetchedData = await f.json();
  console.log(FetchedData.participant);
  if(hasChange(FetchedData,oldFetchedData)){
    document.querySelector('.live-count-number').innerText = FetchedData.visitor;
    document.querySelector('.participant-count').innerText = FetchedData.participant;
    document.querySelector('.stall-count').innerText = FetchedData.project;
    oldFetchedData = FetchedData;
  }
}

fetchData();

setInterval(fetchData, 1000);

//visitor, participant, project