import aycImg from "../../public/ayc-cleaning.png";
import urlShortenerImg from "../../public/url-shortener.png";
import ecommerceImg from "../../public/ecommerce.png";

export const projects = [
  {
    title: "Url Shortener",
    image: urlShortenerImg,
    alt: "url-shortener",
    description: "Este es un proyecto practico desarrollado en Java utilizando Spring Boot y Maven. El objetivo del proyecto es crear un servicio para acortar URLs, con funcionalidades para crear, consultar, actualizar, eliminar y redirigir URLs acortadas. Basado en el proyecto de Roadmap.sh",
    code: "https://github.com/Daniel7759/UrlShortener",
    preview: "https://urlshortener-orpin.vercel.app/",
    tecnologias:[
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        alt: "Java",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
        alt: "Spring",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        alt: "PostgreSQL",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
        alt: "Angular",
      }
    ]
  },
  {
    title: "Backend E-commerce",
    image: ecommerceImg,
    alt: "Backend de Ecommerce",
    description: "Proyecto personal para simular el Backend de un E-commerce, el proyecto cuenta con funcionalidades como: Crear productos, categorías, carrito de compras, autenticación de usuarios, integración con Stripe para pagos y uso de Firebase para almacenar imágenes. Ademas el proyecto cuenta con documentación de la API usando Swagger y el uso de docker para poder ser desplegado en Render.",
    code: "https://github.com/Daniel7759/E-commerce",
    tecnologias:[
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        alt: "Java",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
        alt: "Spring",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        alt: "PostgreSQL",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        alt: "Docker",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg",
        alt: "Swagger",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
        alt: "Firebase",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png",
        alt: "Stripe",
      }
    ]
  },
  {
    title: "Ayc Cleaning Services",
    image: aycImg,
    alt: "ayc-cleaning",
    description: "Encargado de realizar el desarrollo de la página web de Ayc Cleaning Services. Entre mis principales tareas se encuentra: Implementación del Diseño usando Wordpress y Elementor , Optimización de SEO, Diseño Responsive y uso de JavaScript para la implementación de funcionalidades en la página web.",
    preview: "https://ayc-cleaningservices.com",
    tecnologias:[
      {
        src: "https://cdn-icons-png.flaticon.com/512/59/59137.png",
        alt: "WordPress",
      },
      {
        src: "https://cdn-icons-png.flaticon.com/512/5968/5968699.png",
        alt: "Elementor",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        alt: "JavaScript",
      }
    ]
  }
];
