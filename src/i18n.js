// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "Welcome to React": "Welcome to React",
        "Edit <code>src/App.js</code> and save to reload.":
          "Edit <code>src/App.js</code> and save to reload.",
        "Learn React": "Learn React",
        //Menu
        Home: "Home",
        "About_us": "About us",
        Services: "Services",
        Blog: "Blog",
        Contact: "Contact",
        //fin menu
        //Footer
        "We take you to the future safely": "We take you to the future safely",
        CATEGORIES: "Categories",
        "All Rights Reserved by": "All Rights Reserved by",
        //fin Footer
        'Custom development':'Custom development',
        'of processes and applications':'of processes and applications',
        'hero_description':'We carry out processes and applications adapted to the needs of your business, ensuring high quality.',
        'Services_section_title':'Our Services',
        'Services_section_tagline':'Our services are tailored to you',
        // Agrega más traducciones según sea necesario
      },
    },
    es: {
      translation: {
        "Welcome to React": "Bienvenido a React",
        "Edit <code>src/App.js</code> and save to reload.":
          "Edita <code>src/App.js</code> y guarda para refrescar.",
        "Learn React": "Aprende React",
        //Menu
        Home: "Inicio",
        "About_us": "Nosotros",
        Services: "Servicios",
        Blog: "Blog",
        Contact: "Contacto",
        //fin menu
        //Footer
        "We take you to the future safely":
          "Te llevamos al futuro con seguridad",
        CATEGORIES: "Categorias",
        "All Rights Reserved by": "Todos los Derechos Reservados por",
        //fin Footer
        'Custom development':'Desarrollo a la medida',
        'of processes and applications':'de procesos y aplicaciones',
        'hero_description':'Realizamos procesos y aplicaciones adaptados  a las necesidades de tu negocio, procurando una alta calidad.',
        'Services_section_title':'Nuestros Servicios',
        'Services_section_tagline':'Nuestros servicios son ajustados a ti',
        // Agrega más traducciones según sea necesario
      },
    },
    // Agrega más idiomas según sea necesario
  },
  lng: "es", // Idioma predeterminado
  fallbackLng: "es",
  interpolation: {
    escapeValue: false, // No es necesario escapar HTML
  },
});

export default i18n;
