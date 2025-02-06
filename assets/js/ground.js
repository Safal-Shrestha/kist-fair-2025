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
  { "title": "Event Management System", "description": "A system designed to streamline the management of events by automating key tasks such as registration, tracking, and feedback." },
  { "title": "Live Visitor Count", "description": "Real-time tracking of event visitors, allowing organizers to see the number of people attending the event at any given moment." },
  { "title": "Volunteer Management", "description": "Tools to manage volunteers effectively, including task assignment, communication, and tracking." },
  { "title": "Participant Feedback", "description": "Collecting and analyzing feedback from participants to improve future events." },
  { "title": "Real-time Notifications", "description": "Notify participants and organizers of important updates or changes in the event schedule." },
  { "title": "Event Scheduling", "description": "A scheduling tool for organizing event sessions, talks, and activities." },
  { "title": "Online Registration", "description": "Allow participants to register for events online, simplifying sign-ups and reducing manual workload." },
  { "title": "Seating Arrangement", "description": "An easy-to-use system for assigning seats to participants and ensuring proper distribution in event halls." },
  { "title": "Virtual Event Hosting", "description": "Tools and features to host virtual events, including live streaming, chat, and interactive elements." },
  { "title": "Event Analytics", "description": "Analyze event data such as attendee demographics, session popularity, and engagement levels." },
  { "title": "Sponsor Management", "description": "Organize and manage event sponsors, including visibility, contributions, and deliverables." },
  { "title": "Ticketing System", "description": "A system for generating and managing event tickets, including digital tickets and check-in features." },
  { "title": "Speaker Management", "description": "Tools for managing speakers, including schedules, bios, and session topics." },
  { "title": "Social Media Integration", "description": "Integrate social media sharing capabilities to increase visibility and engagement for events." },
  { "title": "Event Map", "description": "Interactive maps for event venues, showing locations of booths, stages, and other key areas." },
  { "title": "Custom Branding", "description": "Customize the event platform with logos, colors, and themes to match the event's branding." },
  { "title": "Participant Tracking", "description": "Track participant movements within the event for safety, networking, and engagement analysis." },
  { "title": "On-Site Registration", "description": "Allow participants to register and check-in at the event venue with minimal wait time." },
  { "title": "Networking Tools", "description": "Facilitate networking between attendees with in-app messaging and scheduled meetups." },
  { "title": "QR Code Scanning", "description": "QR code scanning for easy access to event materials, sessions, and badges." },
  { "title": "Post-Event Survey", "description": "Collect survey responses from attendees after the event to gather feedback and measure satisfaction." },
  { "title": "Crowd Control", "description": "Manage crowd movement and density within the venue to ensure safety and comfort." },
  { "title": "Event Budgeting", "description": "Track event expenses, revenue, and financial planning with an integrated budgeting tool." },
  { "title": "Access Control", "description": "Set up access levels for different participants, volunteers, and organizers to ensure smooth event operations." },
  { "title": "Mobile App Integration", "description": "Create a mobile app for attendees to access schedules, maps, and updates on the go." },
  { "title": "Live Polling", "description": "Engage participants during the event with live polling and Q&A sessions." },
  { "title": "Event Gallery", "description": "Showcase event photos, videos, and media content for attendees to view after the event." },
  { "title": "Custom Invitations", "description": "Send personalized event invitations to participants, speakers, and sponsors." },
  { "title": "Event Timelines", "description": "Create detailed event timelines to help organizers and participants stay on track." },
  { "title": "Exhibitor Management", "description": "Manage exhibitors, booths, and products with a dedicated platform to streamline their participation." },
  { "title": "Live Event Streaming", "description": "Stream event sessions or entire events live to a virtual audience." },
  { "title": "Gamification", "description": "Incorporate gamified features, such as challenges and leaderboards, to increase participant engagement." },
  { "title": "Real-Time Analytics Dashboard", "description": "Monitor live analytics such as ticket sales, registrations, and visitor behavior during the event." },
  { "title": "Post-Event Reporting", "description": "Generate reports on attendee data, feedback, and event performance for future planning." },
  { "title": "Event Merchandise", "description": "Offer event-related merchandise for sale through an integrated e-commerce system." },
  { "title": "Session Recording", "description": "Record event sessions and make them available for later viewing by participants." },
  { "title": "Audience Engagement", "description": "Interactive tools for engaging the audience during presentations, including chat and reaction features." },
  { "title": "Event Gamification", "description": "Use badges, achievements, and rewards to motivate attendee participation and increase interactivity." },
  { "title": "Virtual Reality Integration", "description": "Integrate virtual reality into the event for immersive experiences like virtual booths and displays." },
  { "title": "Volunteer Issue Tracking", "description": "Allow volunteers to track and resolve issues reported by participants during the event." },
  { "title": "Emergency Alerts", "description": "Send urgent notifications to participants, volunteers, and organizers in case of an emergency." },
  { "title": "Event Archive", "description": "Keep an archive of past event information, schedules, and materials for reference and analysis." },
  { "title": "Personalized Event Schedules", "description": "Allow participants to create their own personalized event schedules based on their interests." },
  { "title": "Translation Services", "description": "Provide multi-language support for international participants attending the event." },
  { "title": "Event Registration API", "description": "Enable third-party apps or websites to register participants via an event registration API." },
  { "title": "Exhibit Hall Management", "description": "Organize and manage exhibit hall spaces, booths, and exhibitor interactions." }
];


let stalls = document.querySelectorAll('.ground')
stalls.forEach((stall,index)=>{
  stall.addEventListener('click',()=>{
    document.querySelector('.description-body-title').innerText = dummyData[index].title;
    document.querySelector('.description-body-description').innerText = dummyData[index].description;
  });
});

//description-body-title
//description-body-description