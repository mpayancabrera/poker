export const resumeData = {
  menu: [
    {
      text: "Inicio",
      ref: "home"
    },
    {
      text: "Sobre mi",
      ref: "about"
    },
    {
      text: "Resumen",
      ref: "resume"
    },
    {
      text: "Trabajos",
      ref: "portfolio"
    }
  ],
  name: "Manuel Payán Cabrera",
  role:
    "Bienvenido! En primer lugar, gracias por visitar mi página. Soy ingeniero de software Full Stack y Científico de Datos",
  roleDescription:
    " Me dedico tanto al desarrollo frontend como backend. En mi tiempo libre intento estar al tanto sobre nuevas técnologias y técnicas/habilidades para mejorar como programador y así poder realizar mejor mi trabajo. Me encanta ver series y películas, ver cualquier partido de fútbol (no importa la liga que sea) o simplemente prácticar cualquier deporte.",
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
  aboutTitle: "Un poco sobre mi",
  aboutme: [
    "Actualmente estoy trabajando para PcComponentes como desarrollador Full Stack desde marzo del 2019. PcComponentes tiene su sede principal en Alhama de Murcia, sin embargo, en 2018 abrió una sede para equipos IT en Granada. Entre los trabajos que estamos llevando a cabo actualmente se encuentran mejorar la web actual, para que la experiencia de usuario sea completamente satisfactoria y el desarrollo de herramientas internas que hagan más facil el trabajo de las personas de la compañia.",
    "Antes de empezar a trabajar en PcComponentes, trabajé en la Universidad de Granada a través de un contrato de colaboración con el Patronato de la Alhambra. El principal objetivo de esta colaboración fue realizar diferentes estudios y la elaboración de diferentes herramientas que permitiesen mejorar la distribución de entradas a la venta así como mejorar el flujo de visitantes al monumento.",
    "Paso previo a mi etapa en Granada, estuve trabajando durante año y medio en SICE (Madrid) una compañia internacional, filial de ACS, dedicada al diseño y desarrollo de sistemas inteligentes de transporte. Este ha sido un pequeño tour sobre mi experiencia profesional, sin olvidar mi primer trabajo como desarrollador SAP en Accenture (Malaga).",
    "Me considero una persona autodidata con especial interés por la ciencia de datos y el desarrollo web. Considero que la clave para tener éxito tanto en la vida como en el trabajo es esforzarse y trabajar duro. Por ello, siempre trato de resolver los problemas que se presentan por difíciles que puedan parecer a priori. Invertir parte de mi tiempo libre a mejorar mediante cursos, tutoriales o charlas me ayuda a cumplir mi sueño."
  ],
  contactTitle: "Detalles de contacto",
  address: "Granada (España)",
  email: "mpayancabrera@gmail.com",
  educationTitle: 'Educación',
  education: [
    {
      UniversityName: "Universidad de Granada",
      specialization: "Master en Ciencia de Datos e Ingeniería de Computadores",
      MonthOfPassing: "Agosto",
      YearOfPassing: "2018",
      Achievements: "Especialidad en Ciencia de Datos."
    },
    {
      UniversityName: "Universidad de Granada",
      specialization: "Grado en Ingeniería Informática",
      MonthOfPassing: "Septiembre",
      YearOfPassing: "2015",
      Achievements: "Especialidad en Sistemas de Información"
    }
  ],
  workTitle: 'Trabajo',
  work: [
    {
      CompanyName: "PcComponentes",
      specialization: "Programador senior Full Stack ",
      MonthOfLeaving: "Marzo",
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
      CompanyName: "Universidad de Granada",
      specialization: "Científico de datos y programador Full Stack",
      MonthOfLeaving: "Julio",
      YearOfLeaving: "2017",
      Achievements: ["Angular", "Jquery", "Java", "Python", "R", "Knime", "Matlab", "Tensorflow", "MySQL", "MongoDB"]
    },
    {
      CompanyName: "SICE",
      specialization: "Programador junior",
      MonthOfLeaving: "Junio",
      YearOfLeaving: "2016",
      Achievements: ["React", "C#", "Php", "SQL Server", "PostgreSQL"]
    }
  ],
  skillsTitle: "Habilidades",
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
  portfolioTitle: 'Aquí puedes ver algunos de mis trabajos',
  portfolio: [
    {
      name: "Módulo de vacaciones y control horario (Laravel, Javascript).",
      description: "Bilky portal documental",
      purpose:
        "Este módulo dentro del portal documental Bilky, permite controlar las ausencias y vacaciones de los empleados así como el registro horario.",
      imgurl: "../images/portfolio/bilky2.jpg"
    },
    {
      name:
        "Redes neuronales aplicadas a la venta de entradas de la Alhambra (Matlab, Tensorflow).",
      description: "Documento científico",
      purpose:
        "El objetivo principal de este trababjo fue encontrar la técnica de predicción basada en redes neuronales con mayor precisión a la demanda de visitantes de la Alhambra, la cual es mayor cada año y supone un gran problema ya que presenta limites en la afluencia a determinados palacios.",
      imgurl: "../images/portfolio/alhambra.jpg"
    },
    {
      name: "Inmobiliaria 3.0 (Django Framework).",
      description: "Portal web para inmobiliaria",
      purpose:
        "Se actualizó la web que presentaba la inmobiliaria ofreciendo un nuevo portal web con nueva funcionalidad.",
      imgurl: "../images/portfolio/inmo30.jpg"
    }
  ],
  madeBy: "Desarrollado con "
};

export default resumeData;
