const renderData = (data, elmID) => {
  let elm = document.getElementById(elmID);
  let html = "";
  data.forEach((element) => {
    if (element.icon) {
      html += `
    <div class="d-flex align-items-center my-3 gap-2 ms-3">
     <span class="material-symbols-outlined headings"> ${element.icon} </span>
     <div>${element.text}</div>
   </div>
    `;
    } else if (element.text2) {
      html += `
    <div class="d-flex align-items-center my-3 gap-2 ms-3">
     <div>${element.text}</div> : 
     <div>${element.text2}</div>
   </div>`;
    }
  });

  elm.innerHTML = html;
};

const renderDataPlain = (data, elmID) => {
  let elm = document.getElementById(elmID);
  let html = "";
  data.forEach((element) => {
    html += ` 
     <div class="my-2 ms-3">${element}</div>
    `;
  });

  elm.innerHTML = html;
};

const renderOthers = (data, elmID) => {
  let elm = document.getElementById(elmID);
  let html = "";

  data.forEach((element) => {
    if (element.icon) {
      html += `
    <div class="d-flex align-items-center my-3 gap-2">
     <span class="material-symbols-outlined headings"> ${element.icon} </span>
     <div class='headings'>${element.text}</div>
   </div>
   
    `;
      element.other.forEach((element2) => {
        html += `<div class="my-2 ms-3">${element2}</div>`;
      });
    }
  });
  elm.innerHTML = html;
};

const renderObjectives = (data, elmID) => {
  let elm = document.getElementById(elmID);
  let html = "";
  data.forEach((element) => {
    html += `
    <div class="d-flex align-items-center my-3 gap-2">
     <span class="material-symbols-outlined headings"> ${element.icon} </span>
     <span class="headings">${element.heading}</span>
     </div>
     <div class='ms-3'>${element.text}</div>
    `;
  });

  elm.innerHTML = html;
};

const renderExperience = (element, elmID) => {
  let elm = document.getElementById(elmID);
  let html = "";

  html += `
    <div class="d-flex align-items-center my-3 gap-2">
     <span class="material-symbols-outlined headings"> ${element.icon} </span>
     <span class="headings">${element.text}</span>
     </div>
     
    `;
  element.company.forEach((company) => {
    html += `<div class="ms-3 d-flex justify-content-between">
      <span> ${company.name} </span> 
      <span> ${company.from} 
      ${!!company.to && ` - ${company.to}`}
       </span>
    </div>`;
  });

  elm.innerHTML = html;
};

const renderProjects = (element, elmID) => {
  let elm = document.getElementById(elmID);
  let html = "";

  html += `
    <div class="d-flex align-items-center my-3 gap-2">
     <span class="material-symbols-outlined headings"> ${element.icon} </span>
     <span class="headings">${element.text}</span>
     </div>
     
    `;
  element.projects.forEach((projects) => {
    html += `<div class="ms-3 my-3">
      <div class="headings"> ${projects.title} </div> 
      <div class="ms-3"> ${projects.about} </div> 
      <div class="ms-3"> <a href='${projects.link}' target='_blank'> ${projects.link}</a> </div> 
    </div>`;
  });

  elm.innerHTML = html;
};

let personalData = [
  {
    text: "djangir8875@gmail.com",
    icon: "mail",
  },
  {
    text: "9024790998",
    icon: "phone",
  },
  {
    text: "Chirawa Jhunjhunu Rajasthan india",
    icon: "pin_drop",
  },
  {
    text: "https://www.linkedin.com/in/djangir",
    icon: "link",
  },
  {
    text: "https://github.com/djangir",
    icon: "code",
  },
];

let personalDetails = [
  {
    text: "Nationality",
    text2: "Indian",
  },
  {
    text: "Gender",
    text2: "Male",
  },
  {
    text: "Year of Birth",
    text2: "2000",
  },
];

const projects = {
  text: "PROJECTS",
  icon: "rocket",
  projects: [
    {
      title: "spotof",
      about: `Step out with Spotof & explore your city: Use Spotof and save money every time you go to a restaurant, spa, salon, amusement park, movie hall, shopping mall.
      
      We have thousands of cashback offers, deals, discounts & coupons on restaurants, buffets, amusement parks, theme parks, pizzas, spas, massages, salons, beauty therapies, gyms, movie tickets, gift cards, activities and many more.
`,
      link: `https://play.google.com/store/apps/details?id=com.spotofuser&hl=en_IN&gl=US`,
    },
    {
      title: "OHi",
      about: `Ohi is designed for real life conversations, authentic relevant connects in cafes, lounges, airport and giving right to be FAMEstruck , recognised to digitally famous, influential people as they walk in to Cafes!.`,
      link: "https://play.google.com/store/apps/details?id=com.crowdbook&hl=en_IN&gl=US",
    },
    {
      title: "My Docsy",
      about: `At Docsy, our mission is to place the patient back at the centre of the healthcare experience - where they've always belonged. We build software to simplify complex health data collection, and transform it into valuable insights that empower businesses to increase patient engagement, enhance clinical outcomes and boost revenue.`,
      link: " https://mydocsy.com/",
    },
    {
      title: "Whealth Studio",
      about: `WhealthStudio Dashboard - Web-based platform for health and fitness management.`,
      link: "https://dashboard.whealthstudio.com/",
    },
    {
      title: "Elevate Now",
      about: `Elevate Now Dashboard - Web-based platform for health and fitness management.`,
      link: "https://dashboard.joinelevatenow.co.in/",
    },
  ],
};
const others = [
  { text: "INTERESTS", icon: "favorite", other: ["Playing Cricket"] },
  { text: "LANGUAGES", icon: "language", other: ["Hindi", "English"] },
];

const objective = [
  {
    heading: "OBJECTIVE",
    text: `I am specialised in handling dynamic operations, ensuring efficient
            data management and seamless user experiences. I have
            developed robust mechanisms for data collection, validation, and
            storage, enabling real-time updates and enhancing system
            functionality.
            `,
    icon: "my_location",
  },
];

const experiences = {
  text: "EXPERIENCE",
  icon: "business_center",
  company: [{ name: "RVJ Infotech", from: "01-Dec-2021", to: "22-june-2023" }],
};

const skills = [
  "React Native",
  "React Js",
  "Next.js",
  "Javascript",
  "TypeScript",
  "HTML",
  "CSS",
  "Bootstrap",
  "Git & GitHub",
  "Linux",
];

renderData(personalData, "personalData");
renderObjectives(objective, "objective");
renderExperience(experiences, "experience");
renderProjects(projects, "projects");
renderData(personalDetails, "personalDetails");
renderOthers(others, "others");
renderDataPlain(skills, "skills");
