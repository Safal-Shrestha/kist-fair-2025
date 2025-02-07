let FetchedData, oldFetchedData = [];

const hasChange = (oldFetchedData, FetchedData) => {
  if (oldFetchedData.length !== FetchedData.length) return true;

  for (let i = 0; i < oldFetchedData.length; i++) {
    if (oldFetchedData[i].is_solved !== FetchedData[i].is_solved) {
      return true;
    }
  }
  return false;
}

let fetchData = async () => {
  let f = await fetch('/automation-system/backend/problemFetch.php');
  FetchedData = await f.json();

  if (hasChange(oldFetchedData, FetchedData)) {
    console.log("hi");
    document.querySelector('#finished-problem-container-body').innerHTML = '';
    document.querySelector('#problem-container-body').innerHTML = '';
    let ongoingCount = 0, completedCount = 0;
    FetchedData.forEach((data, index) => {
      if (data.is_solved === '1') {
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

        {//for status
          let div2 = document.createElement('div');
          div2.classList.add('finished-problem-status');
          div2.innerText = 'Solved';
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
            document.querySelector('.description-body-title').innerText = data.title;
            document.querySelector('.description-body-description').innerText = data.description;
          });
          document.querySelector('.description-body-cross-button').addEventListener('click', () => {
            document.querySelector('.description-body').style.display = 'none';
            document.querySelector('#overlay').style.display = 'none';
          });
          div1.appendChild(div2);
        }

        document.querySelector('#finished-problem-container-body').appendChild(div1);
      }
      else {
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

        {//for status
          let div2 = document.createElement('div');
          div2.classList.add('problem-status');
          let text = 'Unsolved';
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
            document.querySelector('.stall-no').innerText = data.stall_no;
            document.querySelector('.description-body-description').innerText = data.description;
          });
          document.querySelector('.description-body-cross-button').addEventListener('click', () => {
            document.querySelector('.description-body').style.display = 'none';
            document.querySelector('#overlay').style.display = 'none';
          });
          div1.appendChild(div2);
        }

        {//problem solved button
          let div2 = document.createElement('div');
          div2.classList.add(`problem-solved`, `problem-solved${index}`)
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
          div2.addEventListener('click', () => {
            let sendData = async () => {
              let f = await fetch('/automation-system/backend/problemSolved.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: data.id})
            });
            let res = await f.text();
            }
            sendData();
            console.log(data.id);
          });
        }

        document.querySelector('#problem-container-body').appendChild(div1);
      }

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