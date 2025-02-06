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
  let f = await fetch('backend/problemFetch.php');
  FetchedData = await f.json();

  if (hasChange(oldFetchedData, FetchedData)) {
    document.querySelector('#finished-problem-container-body').innerHTML = '';
    document.querySelector('#problem-container-body').innerHTML = '';
    let ongoingCount = 0, completedCount = 0;
    FetchedData.forEach((data, index) => {
      if (data.status.toLowerCase() === 'solved') {
        completedCount++;
        let div1 = document.createElement('div');
        div1.classList.add(`finished-problem`, `finished-problem${completedCount}`);

        {//for title
          let div2 = document.createElement('div');
          div2.classList.add('finished-problem-title');
          {
            let div3 = document.createElement('div');
            div3.classList.add('finished-problem-title-status');
            div2.appendChild(div3);
            let div4 = document.createElement('div');
            div4.classList.add('problem-title-content');
            div4.innerText = data.title;
            div2.appendChild(div4);
          }
          div1.appendChild(div2);
        }

        {//for time
          let div2 = document.createElement('div');
          div2.classList.add('finished-problem-time');
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
          div2.innerText = ' ' + hour + ':' + min + ' ' + format;
          time = hour + ':' + min + ' ' + format;
          div1.appendChild(div2);
        }

        {//for status
          let div2 = document.createElement('div');
          div2.classList.add('finished-problem-status');
          let first = data.status.slice(0, 1).toUpperCase();
          let text = first + data.status.slice(1);
          div2.innerText = text;
          div1.appendChild(div2);
        }

        {//description button
          let div2 = document.createElement('div');
          div2.classList.add('finished-problem-description');
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

        document.querySelector('#finished-problem-container-body').appendChild(div1);
      }
      else if (data.status.toLowerCase() === 'unsolved') {
        ongoingCount++;
        let div1 = document.createElement('div');
        div1.classList.add(`problem`, `problem${ongoingCount}`);

        {//for title
          let div2 = document.createElement('div');
          div2.classList.add('problem-title');
          {
            let div3 = document.createElement('div');
            div3.classList.add('problem-title-status');
            div2.appendChild(div3);
            let div4 = document.createElement('div');
            div4.classList.add('problem-title-content');
            div4.innerText = data.title;
            div2.appendChild(div4);
          }
          div1.appendChild(div2);
        }

        {//for time
          let div2 = document.createElement('div');
          div2.classList.add('problem-time');
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
          div2.innerText = ' ' + hour + ':' + min + ' ' + format;
          div1.appendChild(div2);
        }

        {//for status
          let div2 = document.createElement('div');
          div2.classList.add('problem-status');
          let first = data.status.slice(0, 1).toUpperCase();
          let text = first + data.status.slice(1);
          div2.innerText = text;
          div1.appendChild(div2);
        }

        {//description button
          let div2 = document.createElement('div');
          div2.classList.add('problem-description');
          div2.innerText = 'View Description';
          div2.addEventListener('click', () => {
            document.querySelector('.description-body').style.display = 'block';
            const scrollY = window.scrollY;
            const centerY = scrollY + window.innerHeight / 5;
            document.querySelector('.description-body').style.top = `${centerY}px`;
            document.querySelector('#overlay').style.display = 'block';
            document.querySelector('.description-body-title').innerText = data.title;
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

        {//problem solved button
          let div2 = document.createElement('div');
          div2.classList.add(`problem-solved problem-solved${index}`)
          div2.innerText = 'Problem Solved';
          div2.style.backgroundColor = '#ee340d';
          div1.appendChild(div2);
          if (div2) {
            div2.style.backgroundColor = '#ee340d';
            div2.addEventListener('mouseenter', () => {
              div2.style.backgroundColor = '#bc3e24';
            });
            div2.addEventListener('mouseleave', () => {
              div2.style.backgroundColor = '#ee340d';
            });
          }
        }
        document.querySelector('#problem-container-body').appendChild(div1);
      }

      //for checking status of the schedule
      let status = document.querySelectorAll('.problem-status');
      status.forEach((s, i) => {
        let scheduleElement = document.querySelector(`.problem${i + 1}`);
        if (scheduleElement) {
          if (s.innerText.toLowerCase() === 'solved') {
            scheduleElement.style.display = 'none';
          }
          else if (s.innerText.toLowerCase() === 'unsolved') {
            scheduleElement.style.border = '2px solid #ee340d';
            s.style.color = '#ee340d';
            let titleStatus = scheduleElement.querySelector('.problem-title-status');
            let description = scheduleElement.querySelector('.problem-description');
            if (titleStatus) titleStatus.style.backgroundColor = '#ee340d';
            if (description) {
              description.style.backgroundColor = '#ee340d';
              description.addEventListener('mouseenter', () => {
                description.style.backgroundColor = '#bc3e24';
              });
              description.addEventListener('mouseleave', () => {
                description.style.backgroundColor = '#ee340d';
              });
            }
          }
        }
      });
    });
  }
  oldFetchedData = FetchedData;
};

fetchData();

setInterval(fetchData, 1000);