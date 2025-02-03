let FetchedData;

let fetchData = async () => {
  let f = await fetch('backend/fetch_itinerary.php');
  
  FetchedData = await f.json(); 
  
};

fetchData();

let ongoingCount = 0, completedCount = 0;
FetchedData.forEach((data,index)=>{
  if(data.status === 'completed'){
    completedCount++;
    let div1 = document.createElement('div');
    div1.classList.add(`finished-schedule`,`finished-schedule${completedCount}`);
    {//for title
      let div2 = document.createElement('div');
      div2.classList.add('finished-schedule-title');
      {
        let div3 = document.createElement('div');
        div3.classList.add('finished-schedule-title-status');
        div2.appendChild(div3);
      }
      div2.innerText = data.name;
      div1.appendChild(div2);
    }
    {//for time
      let div2 = document.createElement('div');
      div2.classList.add('finished-schedule-time');
      let hour = data.time.slice(0,2);
      let min = data.time.slice(3,2);
      div2.innerText = hour + ':' + min;
      div1.appendChild(div2);
    }
    {//for status
      let div2 = document.createElement('div');
      div2.classList.add('finished-schedule-status');
      let first = data.status.slice(0,1).toUpperCase();
      let text = first + data.status.slice(1);
      div2.innerText = text;
      div1.appendChild(div2);
    }
    {//description button
      let div2 = document.createElement('div');
      div2.classList.add('finished-schedule-description');
      div2.innerText = 'View Description';
      div1.appendChild(div2);
    }
    document.querySelector('.finished-schedule-container-body').appendChild(div1);
  }
});