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

let dummyData = [
    {
      "stall_no": 9,
      "category": "Inter-School/College SciTech Project Competition",
      "college": "East Pole Secondary School"
    },
    {
      "stall_no": 10,
      "category": "Inter-School/College SciTech Project Competition",
      "college": "GEMS School"
    },
    {
      "stall_no": 11,
      "category": "Inter-School/College SciTech Project Competition",
      "college": "Himalayan Whitehouse International College"
    },
    {
      "stall_no": 12,
      "category": "Inter-School/College SciTech Project Competition",
      "college": "Kathmandu Columbus School"
    },
    {
      "stall_no": 13,
      "category": "Inter-School/College SciTech Project Competition",
      "college": "Kathmandu Model College"
    },
    {
      "stall_no": 14,
      "category": "Inter-School/College SciTech Project Competition",
      "college": "KIST College & SS"
    },
    {
      "stall_no": 15,
      "category": "Inter-School/College SciTech Project Competition",
      "college": "Mid Valley College SS/College"
    },
    {
      "stall_no": 16,
      "category": "Inter-School/College SciTech Project Competition",
      "college": "NAMI International School"
    },
    {
      "stall_no": 17,
      "category": "Inter-School/College SciTech Project Competition",
      "college": "New Summit College"
    },
    {
      "stall_no": 18,
      "category": "Inter-School/College SciTech Project Competition",
      "college": "NIST College"
    },
    {
      "stall_no": 19,
      "category": "Inter-School/College SciTech Project Competition",
      "college": "Ripumardini Sainik Mahavidhyalaya"
    },
    {
      "stall_no": 20,
      "category": "Inter-School/College SciTech Project Competition",
      "college": "Southwestern State College"
    },
    {
      "stall_no": 21,
      "category": "Intra-College SciTech Project - 1",
      "college": "KIST College"
    },
    {
      "stall_no": 22,
      "category": "Intra-College SciTech Project - 2",
      "college": "KIST College"
    },
    {
      "stall_no": 23,
      "category": "Intra-College SciTech Project - 3",
      "college": "KIST College"
    },
    {
      "stall_no": 24,
      "category": "Intra-College SciTech Project - 4",
      "college": "KIST College"
    },
    {
      "stall_no": 25,
      "category": "Intra-College SciTech Project - 5",
      "college": "KIST College"
    },
    {
      "stall_no": 26,
      "category": "Intra-College SciTech Project - 6",
      "college": "KIST College"
    },
    {
      "stall_no": 27,
      "category": "Intra-College SciTech Project - 7",
      "college": "KIST College"
    },
    {
      "stall_no": 28,
      "category": "Intra-College SciTech Project - 8",
      "college": "KIST College"
    },
    {
      "stall_no": 29,
      "category": "Intra-College SciTech Project - 9",
      "college": "KIST College"
    },
    {
      "stall_no": 30,
      "category": "Intra-College SciTech Project - 10",
      "college": "KIST College"
    },
    {
      "stall_no": 31,
      "category": "Intra-College SciTech Project - 11",
      "college": "KIST College"
    },
    {
      "stall_no": 32,
      "category": "Intra-College SciTech Project - 12",
      "college": "KIST College"
    },
    {
      "stall_no": 33,
      "category": "Intra-College SciTech Project - 13",
      "college": "KIST College"
    },
    {
      "stall_no": 34,
      "category": "Intra-College SciTech Project - 14",
      "college": "KIST College"
    },
    {
      "stall_no": 35,
      "category": "Intra-College SciTech Project - 15",
      "college": "KIST College"
    },
    {
      "stall_no": 50,
      "category": "Inter-School/College Management & IT Project Competition",
      "college": "East Pole Secondary School"
    },
    {
      "stall_no": 49,
      "category": "Inter-School/College Management & IT Project Competition",
      "college": "KIST College & SS"
    },
    {
      "stall_no": 48,
      "category": "Inter-School/College Management & IT Project Competition",
      "college": "NAMI International School"
    },
    {
      "stall_no": 47,
      "category": "Inter-School/College Management & IT Project Competition",
      "college": "Texas International College"
    },
    {
      "stall_no": 46,
      "category": "Inter-School/College Management & IT Project Competition",
      "college": "Trinity International College"
    },
    {
      "stall_no": 45,
      "category": "Inter-School/College Management & IT Project Competition",
      "college": "Uniglobe Secondary School"
    },
    {
      "stall_no": 44,
      "category": "Inter-School/College SciTech Project Competition",
      "college": "V.S. Niketan Secondary School"
    },
    {
      "stall_no": 43,
      "category": "Inter-School/College SciTech Project Competition",
      "college": "Urbana School of Science"
    },
    {
      "stall_no": 42,
      "category": "Inter-School/College SciTech Project Competition",
      "college": "Uniglobe Secondary School"
    },
    {
      "stall_no": 41,
      "category": "Inter-School/College SciTech Project Competition",
      "college": "Ullens School"
    },
    {
      "stall_no": 40,
      "category": "Inter-School/College SciTech Project Competition",
      "college": "Triyog High School"
    },
    {
      "stall_no": 39,
      "category": "Inter-School/College SciTech Project Competition",
      "college": "Triton SS & College"
    },
    {
      "stall_no": 38,
      "category": "Inter-School/College SciTech Project Competition",
      "college": "Trinity International College"
    },
    {
      "stall_no": 37,
      "category": "Inter-School/College SciTech Project Competition",
      "college": "Texas International College"
    },
    {
      "stall_no": 36,
      "category": "Inter-School/College SciTech Project Competition",
      "college": "St. Xavier's College"
    },
    {
      "stall_no": 51,
      "category": "Inter-School/College SciTech Project Competition",
      "college": "Xavier International College"
    }
  ];  

let stalls = document.querySelectorAll('.ground')
stalls.forEach((stall,index)=>{
  stall.addEventListener('click',()=>{
    document.querySelector('.description-body-title').innerText = dummyData[index].college;
    document.querySelector('.description-body-description').innerText = dummyData[index].category;
  });
});

//description-body-title
//description-body-description