let FetchedData, oldFetchedData = [];

const hasChange = (oldFetchedData, FetchedData) => {
  if (oldFetchedData.length !== FetchedData.length) return true;

  for (let i = 0; i < oldFetchedData.length; i++) {
    if (oldFetchedData[i].status !== FetchedData[i].status) {
      return true;
    }
  }
  return false;
}

let fetchData = async () => {
  let f = await fetch('backend/fetch_itinerary.php');
  FetchedData = await f.json();

  if (hasChange(oldFetchedData, FetchedData)) {
    document.querySelector('#finished-schedule-container-body').innerHTML = '';
    document.querySelector('#schedule-container-body').innerHTML = '';
    let ongoingCount = 0, completedCount = 0;
    FetchedData.forEach((data, index) => {
      if (data.status === 'completed') {
        completedCount++;
        let div1 = document.createElement('div');
        div1.classList.add(`finished-schedule`, `finished-schedule${completedCount}`);

        {//for title
          let div2 = document.createElement('div');
          div2.classList.add('finished-schedule-title');
          {
            let div3 = document.createElement('div');
            div3.classList.add('finished-schedule-title-status');
            div2.appendChild(div3);
            let div4 = document.createElement('div');
            div4.classList.add('schedule-title-content');
            div4.innerText = data.name;
            div2.appendChild(div4);
          }
          div1.appendChild(div2);
        }

        {//for time
          let div2 = document.createElement('div');
          div2.classList.add('finished-schedule-time');
          let hour = data.time.slice(0, 2);
          hour = parseInt(hour);
          let format;
          if (hour > 12) {
            hour = hour % 12;
            format = 'P:M';
          }
          else if (hour == 12) {
            format = 'P:M';
          }
          else {
            format = 'A:M';
          }
          let min = data.time.slice(3, 5);
          div2.innerText = hour + ':' + min + ' ' + format;
          time = hour + ':' + min + ' ' + format;
          div1.appendChild(div2);
        }

        {//for status
          let div2 = document.createElement('div');
          div2.classList.add('finished-schedule-status');
          let first = data.status.slice(0, 1).toUpperCase();
          let text = first + data.status.slice(1);
          div2.innerText = text;
          div1.appendChild(div2);
        }

        {//description button
          let div2 = document.createElement('div');
          div2.classList.add('finished-schedule-description');
          div2.innerText = 'View Description';
          div2.addEventListener('click', () => {
            document.querySelector('.description-body').style.display = 'block';
            const scrollY = window.scrollY;
            const centerY = scrollY + window.innerHeight / 5;
            document.querySelector('.description-body').style.top = `${centerY}px`;
            document.querySelector('#overlay').style.display = 'block';
            document.querySelector('.description-body-title').innerText = data.name;
            document.querySelector('.description-body-description').innerText = data.description;
            let hour = data.time.slice(0, 2);
            let min = data.time.slice(3, 5);
            let format;
            if (hour > 12) {
              hour = hour % 12;
              format = 'P:M';
            }
            else if (hour == 12) {
              format = 'P:M';
            }
            else {
              format = 'A:M';
            }
            let time = hour + ':' + min + ' ' + format;
            document.querySelector('.description-body-time').innerText = time;
          });
          document.querySelector('.description-body-cross-button').addEventListener('click', () => {
            document.querySelector('.description-body').style.display = 'none';
            document.querySelector('#overlay').style.display = 'none';
          });
          div1.appendChild(div2);
        }

        document.querySelector('#finished-schedule-container-body').appendChild(div1);
      }
      else if (data.status === 'ongoing' || data.status === 'upcoming') {
        ongoingCount++;
        let div1 = document.createElement('div');
        div1.classList.add(`schedule`, `schedule${ongoingCount}`);

        {//for title
          let div2 = document.createElement('div');
          div2.classList.add('schedule-title');
          {
            let div3 = document.createElement('div');
            div3.classList.add('schedule-title-status');
            div2.appendChild(div3);
            let div4 = document.createElement('div');
            div4.classList.add('schedule-title-content');
            div4.innerText = data.name;
            div2.appendChild(div4);
          }
          div1.appendChild(div2);
        }

        {//for time
          let div2 = document.createElement('div');
          div2.classList.add('schedule-time');
          let hour = data.time.slice(0, 2);
          let min = data.time.slice(3, 5);
          let format;
          if (hour > 12) {
            hour = hour % 12;
            format = 'P:M';
          }
          else if (hour == 12) {
            format = 'P:M';
          }
          else {
            format = 'A:M';
          }
          div2.innerText = hour + ':' + min + ' ' + format;
          div1.appendChild(div2);
        }

        {//for status
          let div2 = document.createElement('div');
          div2.classList.add('schedule-status');
          let first = data.status.slice(0, 1).toUpperCase();
          let text = first + data.status.slice(1);
          div2.innerText = text;
          div1.appendChild(div2);
        }

        {//description button
          let div2 = document.createElement('div');
          div2.classList.add('schedule-description');
          div2.innerText = 'View Description';
          div2.addEventListener('click', () => {
            document.querySelector('.description-body').style.display = 'block';
            const scrollY = window.scrollY;
            const centerY = scrollY + window.innerHeight / 5;
            document.querySelector('.description-body').style.top = `${centerY}px`;
            document.querySelector('#overlay').style.display = 'block';
            document.querySelector('.description-body-title').innerText = data.name;
            document.querySelector('.description-body-description').innerText = data.description;
            let hour = data.time.slice(0, 2);
            let min = data.time.slice(3, 5);
            let format;
            if (hour > 12) {
              hour = hour % 12;
              format = 'P:M';
            }
            else if (hour == 12) {
              format = 'P:M';
            }
            else {
              format = 'A:M';
            }
            let time = hour + ':' + min + ' ' + format;
            document.querySelector('.description-body-time').innerText = time;
          });
          document.querySelector('.description-body-cross-button').addEventListener('click', () => {
            document.querySelector('.description-body').style.display = 'none';
            document.querySelector('#overlay').style.display = 'none';
          });
          div1.appendChild(div2);
        }

        document.querySelector('#schedule-container-body').appendChild(div1);
      }

      //for checking status of the schedule
      let status = document.querySelectorAll('.schedule-status');
      status.forEach((s, i) => {
        let scheduleElement = document.querySelector(`.schedule${i + 1}`);
        if (scheduleElement) {
          if (s.innerText.toUpperCase() === 'COMPLETED') {
            scheduleElement.style.display = 'none';
          }
          else if (s.innerText.toUpperCase() === 'ONGOING') {
            scheduleElement.style.border = '2px solid #17f514';
            s.style.color = '#17f514';
            let titleStatus = scheduleElement.querySelector('.schedule-title-status');
            let description = scheduleElement.querySelector('.schedule-description');
            if (titleStatus) titleStatus.style.backgroundColor = '#17f514';
            if (description) {
              description.style.backgroundColor = '#17f514';
              description.addEventListener('mouseenter', () => {
                description.style.backgroundColor = '#0e9c0c';
              });
              description.addEventListener('mouseleave', () => {
                description.style.backgroundColor = '#17f514';
              });
            }
          }
          else if (s.innerText.toUpperCase() === 'UPCOMING') {
            scheduleElement.style.border = '2px solid rgb(58, 120, 255)';
            s.style.color = 'rgb(58, 120, 255)';
            let titleStatus = scheduleElement.querySelector('.schedule-title-status');
            if (titleStatus) titleStatus.style.backgroundColor = 'rgb(58, 120, 255)';
          }
        }
      });
    });
  }
  oldFetchedData = FetchedData;
};

fetchData();

setInterval(fetchData, 1000);