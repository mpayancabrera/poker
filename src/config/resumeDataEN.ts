export const resumeData = {
  menu: [
    {
      text: "Home",
      ref: "home"
    },
    {
      text: "About",
      ref: "about"
    },
    {
      text: "Resume",
      ref: "resume"
    },
    {
      text: "Works",
      ref: "portfolio"
    }
  ],
  name: "Manuel Payán Cabrera",
  role: "Welcome! First of all, thanks for visiting my page. I am Full Stack Developer and Data Scientist",
  roleDescription:
    "I like dabbling in both frontend and backend development and I am always looking out for and learning new and better approaches and technologies that help me do a better job. I really love to watch series and movies, follow any soccer game or simply practice sport in my free time.",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/manuelpayancabrera",
      className: "fa fa-linkedin"
    },
    {
      name: "github",
      url: "http://github.com/mpayancabrera",
      className: "fa fa-github"
    }
  ],
  aboutTitle: "About Me",
  aboutme: [
    "I am currently working at PcComponentes as Full Stack developer since March 2019 (Granada office). We are currently working on improving the web so that the user experience is really good and on multiple internal tools that make the work of the people at PcComponentes easier.",
    "Before, I have worked as researcher at the University of Granada. I was part of a group of researchers for a project between the university and  Alhambra of Granada in which the aim was to improve the flow of visitors and avoid the multiple problems it presented.",
    "Before starting to work in Granada, I spent a year and a half at SICE (Madrid) an international company dedicated to the development of intelligent transport systems. This has been a short tour of my professional experience, without forgetting that I started as SAP developer at Accenture (Malaga) during a year.",
    "I am a self taught Full Stack Web Developer and from two years ago, also into Machine Learning. I believe that one of the keys to success in life is to work very hard. One must pursue his dreams and continue working towards them. Therefore, I strive every day to learn new technologie, in how to improve my code or watching talks about experts."
  ],
  contactTitle: "Contact Details",
  address: "Granada (Spain)",
  email: "mpayancabrera@gmail.com",
  educationTitle: "Education",
  education: [
    {
      UniversityName: "University of Granada",
      specialization: "Master in Data Science and Computer Engineering",
      MonthOfPassing: "Aug",
      YearOfPassing: "2018",
      Achievements: "Data Science specialization"
    },
    {
      UniversityName: "University of Granada",
      specialization: "Computer engineering degree",
      MonthOfPassing: "Sep",
      YearOfPassing: "2015",
      Achievements: "Information Systems specialization"
    }
  ],
  workTitle: "Work",
  work: [
    {
      CompanyName: "PcComponentes",
      specialization: "Senior Full Stack developer",
      MonthOfLeaving: "Mar",
      YearOfLeaving: "2019",
      Achievements: [
        "React",
        "Symfony",
        "Python",
        "node",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Nginx",
        "RabbitMQ",
        "PostgreSQL"
      ]
    },
    {
      CompanyName: "University of Granada",
      specialization: "Data Scientist and Full Stack developer",
      MonthOfLeaving: "Jul",
      YearOfLeaving: "2017",
      Achievements: ["Angular", "Jquery", "Java", "Python", "R", "Knime", "Matlab", "Tensorflow", "MySQL", "MongoDB"]
    },
    {
      CompanyName: "SICE",
      specialization: "Junior developer",
      MonthOfLeaving: "Jun",
      YearOfLeaving: "2016",
      Achievements: ["React", "C#", "Php", "SQL Server", "PostgreSQL"]
    }
  ],
  skillsTitle: "Skills",
  skillsSections: [
    {
      skillsDescription: "Frontend",
      skills: [
        {
          skillname: "HTML5"
        },
        {
          skillname: "CSS"
        },
        {
          skillname: "React"
        }
      ]
    },
    {
      skillsDescription: "Backend",
      skills: [
        {
          skillname: "Python"
        },
        {
          skillname: "Php"
        },
        {
          skillname: "Node"
        }
      ]
    },
    {
      skillsDescription: "Devops",
      skills: [
        {
          skillname: "Docker"
        },
        {
          skillname: "Kubernetes"
        },
        {
          skillname: "Nginx"
        }
      ]
    }
  ],
  portfolioTitle: 'Check out some of my works',
  portfolio: [
    {
      name: "Holidays and Control time module (Laravel, Javascript).",
      description: "Bilky Documents portal",
      purpose:
        "This module inside of Bilky software allows control and manage your employees vacations and absences easily and the daily signing automatically and safe.",
      imgurl: "../images/portfolio/bilky2.jpg"
    },
    {
      name:
        "Neural networks applied to the ticket sales of Alhambra monument (Matlab, Tensorflow).",
      description: "Research paper",
      purpose:
        "The aim of this work was to find a forecasting technique with the best adjusts to the demand of visitors to the Alhambra, which is greater every year. Since it's a monument with an annual capacity limit, the flow of visitors forecasting is a crucial issue to organize the capacity in subsequent years.",
      imgurl: "../images/portfolio/alhambra.jpg"
    },
    {
      name: "Inmobiliaria 3.0 (Django Framework).",
      description: "Real state website",
      purpose: "A project to update the current website of the company.",
      imgurl: "../images/portfolio/inmo30.jpg"
    }
  ],
  madeBy: "Made with "
};

export default resumeData;
