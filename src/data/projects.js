import aycImg from "../../public/ayc-cleaning.png";
import urlShortenerImg from "../../public/url-shortener.png";
import ecommerceImg from "../../public/ecommerce.png";

export const projects = [
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

  },
  {
    title: "Url Shortener",
    image: urlShortenerImg,
    alt: "url-shortener",
    description: "Proyecto personal para desarrollar un acortador de URL. El proyecto permite acortar una URL larga y redirigir a la URL original. Además, se agrego funcionalidades como crear usuarios, crear tu propia URL personalizada para usuarios registrados y un sistema de autenticación con JWT.",
    code: "https://github.com/Daniel7759/url-shortener",
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
        src: "https://static.cdnlogo.com/logos/j/20/jwt.svg",
        alt: "JWT",
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
];
