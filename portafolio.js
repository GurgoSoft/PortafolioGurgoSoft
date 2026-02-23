// ===== Sistema de Traducción Personalizado =====
const translations = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',
    'nav.cv': 'Descargar CV',
    'hero.role': 'Frontend Developer',
    'hero.greeting': 'Hola, soy',
    'hero.fullDescription': 'Creo interfaces modernas con React y React Native. De la idea al producto, conectando frontend con soluciones backend escalables',
    'hero.btn.projects': 'Ver proyectos destacados',
    'hero.btn.contact': 'Hablemos de tu proyecto',
    'about.title': 'Sobre mí',
    'about.description': 'Frontend Developer con experiencia en React, React Native y JavaScript. Me especializo en crear interfaces intuitivas que conectan con soluciones backend robustas (Node.js, Django). He liderado técnicamente 3 de 5 proyectos en Tecnoparque SENA, incluyendo sistemas IoT para monitoreo agrícola y aplicaciones móviles con arquitectura escalable.',
    'about.description2': 'Combino visión de producto con implementación técnica: desde el diseño en Figma hasta el deploy en producción. Mi objetivo es transformar ideas en experiencias digitales que generen impacto real.',
    'about.item1': 'Desarrollo con React y React Native para web y mobile',
    'about.item2': 'Liderazgo técnico en proyectos multidisciplinarios',
    'about.item3': 'Enfoque en performance, accesibilidad y UX/UI',
    'about.item4': 'Experiencia con metodologías ágiles y Git/GitHub',
    'skills.title': 'Habilidades',
    'skills.react': 'React & React Native',
    'skills.javascript': 'JavaScript (ES6+)',
    'skills.htmlcss': 'HTML5 & CSS3',
    'skills.backend': 'Node.js & Django',
    'skills.databases': 'MySQL, MongoDB & SQL Server',
    'skills.tools': 'Git, Figma & Metodologías Ágiles',
    'skills.advanced': 'Avanzado',
    'skills.intermediate': 'Intermedio',
    'projects.title': 'Proyectos',
    'projects.search': 'Buscar proyectos...',
    'projects.filter.all': 'Todos',
    'projects.filter.frontend': 'Frontend',
    'projects.filter.backend': 'Backend',
    'projects.filter.fullstack': 'Fullstack',
    'project1.title': 'Sistema de Monitoreo Agrícola con IoT',
    'project1.problem': 'Problema:',
    'project1.problemDesc': 'Necesidad de monitorear en tiempo real variables ambientales en cultivos para optimizar producción.',
    'project1.solution': 'Solución:',
    'project1.solutionDesc': 'Dashboard interactivo en React que visualiza datos de sensores IoT, procesa información con Node.js y almacena métricas históricas.',
    'project1.impact': 'Impacto:',
    'project1.impactDesc': 'Visualización en tiempo real de temperatura, humedad y pH del suelo. Proyecto liderado técnicamente en Tecnoparque SENA.',
    'project2.title': 'Aplicación Móvil Multiplataforma',
    'project2.problem': 'Problema:',
    'project2.problemDesc': 'Cliente requería app móvil para iOS y Android sin duplicar esfuerzos de desarrollo.',
    'project2.solution': 'Solución:',
    'project2.solutionDesc': 'App desarrollada con React Native integrada con backend en Node.js. Gestión de estado con Context API y navegación nativa.',
    'project2.impact': 'Impacto:',
    'project2.impactDesc': 'Desarrollo único para ambas plataformas, reduciendo tiempos de entrega en 40%.',
    'project3.title': 'Plataforma Web Tipo Foro',
    'project3.problem': 'Problema:',
    'project3.problemDesc': 'Comunidad necesitaba espacio para compartir conocimiento con sistema de autenticación robusto.',
    'project3.solution': 'Solución:',
    'project3.solutionDesc': 'Aplicación web con Django: sistema de usuarios, publicaciones, comentarios y búsqueda. Base de datos relacional optimizada.',
    'project3.impact': 'Impacto:',
    'project3.impactDesc': 'Plataforma funcional con gestión completa de contenido y roles de usuario.',
    'project4.title': 'Frontend Para Gestión Educativa',
    'project4.problem': 'Problema:',
    'project4.problemDesc': 'Institución educativa necesitaba interfaz moderna y responsive para su sistema de gestión.',
    'project4.solution': 'Solución:',
    'project4.solutionDesc': 'Frontend responsive con JavaScript vanilla, optimizado para carga rápida y accesibilidad.',
    'project4.impact': 'Impacto:',
    'project4.impactDesc': 'Interfaz intuitiva desplegada en producción con tiempo de carga <3s.',
    'project5.title': 'Tienda Online - Proyecto Freelance',
    'project5.problem': 'Problema:',
    'project5.problemDesc': 'Emprendimiento local necesitaba digitalizar ventas con carrito de compras funcional.',
    'project5.solution': 'Solución:',
    'project5.solutionDesc': 'E-commerce con Django: catálogo de productos, carrito, panel de administración y sistema de órdenes.',
    'project5.impact': 'Impacto:',
    'project5.impactDesc': 'Cliente automatizó gestión de inventario y aumentó alcance de ventas.',
    'project6.title': 'Sistema Web para Barbería',
    'project6.problem': 'Problema:',
    'project6.problemDesc': 'Barbería requería presencia web profesional para mostrar servicios y agendar citas.',
    'project6.solution': 'Solución:',
    'project6.solutionDesc': 'Frontend moderno con galería de servicios, formulario de contacto y diseño UX optimizado para conversión.',
    'project6.impact': 'Impacto:',
    'project6.impactDesc': 'Landing page en producción con diseño mobile-first y alta tasa de contacto.',
    'project.btn.demo': 'Ver Demo',
    'project.btn.info': 'Más info',
    'experience.title': 'Experiencia',
    'experience1.title': 'Practicante Desarrollador Frontend · Tecnoparque SENA Medellín',
    'experience1.period': 'Agosto 2025 – Febrero 2026',
    'experience1.description': 'Desarrollo de soluciones tecnológicas innovadoras con énfasis en frontend. Liderazgo técnico en 3 de 5 proyectos del programa.',
    'experience1.achievement1': 'Desarrollo de sistema de monitoreo agrícola con React: dashboard interactivo para visualización de datos IoT (sensores de humedad, temperatura, pH)',
    'experience1.achievement2': 'Creación de aplicaciones móviles multiplataforma con React Native integradas con backend Node.js',
    'experience1.achievement3': 'Implementación de aplicación web tipo foro con Django: autenticación, gestión de publicaciones, base de datos relacional',
    'experience1.achievement4': 'Trabajo colaborativo con Git/GitHub en equipos multidisciplinarios usando metodologías ágiles',
    'experience2.title': 'Desarrollador Frontend Freelance',
    'experience2.period': 'Marzo 2023 – Agosto 2025',
    'experience2.description': 'Desarrollo de soluciones web y móviles para emprendimientos locales. Enfoque en entrega de valor y experiencia de usuario.',
    'experience2.achievement1': 'Desarrollo de 8+ sitios web responsive con HTML5, CSS3, JavaScript y Bootstrap 5',
    'experience2.achievement2': 'Creación de aplicaciones móviles híbridas con React Native para clientes locales',
    'experience2.achievement3': 'Diseño de interfaces en Figma y prototipado antes del desarrollo',
    'experience2.achievement4': 'Gestión directa con clientes: levantamiento de requerimientos, iteraciones y despliegue en producción',
    'contact.title': '¿Trabajamos juntos?',
    'contact.description': 'Estoy disponible para proyectos y oportunidades laborales como Frontend Developer. Si buscas alguien que transforme ideas en productos digitales funcionales, conectemos. Respondo en menos de 24h.',
    'contact.btn.email': 'Enviar Email',
    'contact.btn.whatsapp': 'WhatsApp',
    'contact.btn.github': 'GitHub',
    'contact.form.name': 'Nombre *',
    'contact.form.email': 'Email *',
    'contact.form.message': 'Mensaje *',
    'contact.form.submit': 'Enviar mensaje',
    'contact.form.placeholder.name': 'Tu nombre',
    'contact.form.placeholder.email': 'tu@email.com',
    'contact.form.placeholder.message': 'Cuéntame sobre tu proyecto u oportunidad...',
    'contact.form.error.name': 'Por favor ingresa tu nombre (mínimo 2 caracteres).',
    'contact.form.error.email': 'Ingresa un email válido.',
    'contact.form.error.message': 'Escribe un mensaje (mínimo 10 caracteres).',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.home': 'Inicio',
    'footer.projects': 'Proyectos',
    'footer.contact': 'Contacto'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.cv': 'Download CV',
    'hero.role': 'Frontend Developer',
    'hero.greeting': 'Hi, I\'m',
    'hero.fullDescription': 'I create modern interfaces with React and React Native. From idea to product, connecting frontend with scalable backend solutions',
    'hero.btn.projects': 'View featured projects',
    'hero.btn.contact': 'Let\'s talk about your project',
    'about.title': 'About me',
    'about.description': 'Frontend Developer with experience in React, React Native and JavaScript. I specialize in creating intuitive interfaces that connect with robust backend solutions (Node.js, Django). I have technically led 3 of 5 projects at Tecnoparque SENA, including IoT systems for agricultural monitoring and mobile applications with scalable architecture.',
    'about.description2': 'I combine product vision with technical implementation: from design in Figma to production deployment. My goal is to transform ideas into digital experiences that generate real impact.',
    'about.item1': 'Development with React and React Native for web and mobile',
    'about.item2': 'Technical leadership in multidisciplinary projects',
    'about.item3': 'Focus on performance, accessibility and UX/UI',
    'about.item4': 'Experience with agile methodologies and Git/GitHub',
    'skills.title': 'Skills',
    'skills.react': 'React & React Native',
    'skills.javascript': 'JavaScript (ES6+)',
    'skills.htmlcss': 'HTML5 & CSS3',
    'skills.backend': 'Node.js & Django',
    'skills.databases': 'MySQL, MongoDB & SQL Server',
    'skills.tools': 'Git, Figma & Agile Methodologies',
    'skills.advanced': 'Advanced',
    'skills.intermediate': 'Intermediate',
    'projects.title': 'Projects',
    'projects.search': 'Search projects...',
    'projects.filter.all': 'All',
    'projects.filter.frontend': 'Frontend',
    'projects.filter.backend': 'Backend',
    'projects.filter.fullstack': 'Fullstack',
    'project1.title': 'Agricultural Monitoring System with IoT',
    'project1.problem': 'Problem:',
    'project1.problemDesc': 'Need to monitor environmental variables in real-time in crops to optimize production.',
    'project1.solution': 'Solution:',
    'project1.solutionDesc': 'Interactive dashboard in React that visualizes IoT sensor data, processes information with Node.js and stores historical metrics.',
    'project1.impact': 'Impact:',
    'project1.impactDesc': 'Real-time visualization of temperature, humidity and soil pH. Technically led project at Tecnoparque SENA.',
    'project2.title': 'Cross-platform Mobile Application',
    'project2.problem': 'Problem:',
    'project2.problemDesc': 'Client required mobile app for iOS and Android without duplicating development efforts.',
    'project2.solution': 'Solution:',
    'project2.solutionDesc': 'App developed with React Native integrated with Node.js backend. State management with Context API and native navigation.',
    'project2.impact': 'Impact:',
    'project2.impactDesc': 'Single development for both platforms, reducing delivery time by 40%.',
    'project3.title': 'Forum Web Platform',
    'project3.problem': 'Problem:',
    'project3.problemDesc': 'Community needed space to share knowledge with robust authentication system.',
    'project3.solution': 'Solution:',
    'project3.solutionDesc': 'Web application with Django: user system, publications, comments and search. Optimized relational database.',
    'project3.impact': 'Impact:',
    'project3.impactDesc': 'Functional platform with complete content and user role management.',
    'project4.title': 'Frontend For Educational Management',
    'project4.problem': 'Problem:',
    'project4.problemDesc': 'Educational institution needed modern, responsive interface for their management system.',
    'project4.solution': 'Solution:',
    'project4.solutionDesc': 'Responsive frontend with vanilla JavaScript, optimized for fast loading and accessibility.',
    'project4.impact': 'Impact:',
    'project4.impactDesc': 'Intuitive interface deployed in production with loading time <3s.',
    'project5.title': 'Online Store - Freelance Project',
    'project5.problem': 'Problem:',
    'project5.problemDesc': 'Local business needed to digitize sales with functional shopping cart.',
    'project5.solution': 'Solution:',
    'project5.solutionDesc': 'E-commerce with Django: product catalog, cart, admin panel and order system.',
    'project5.impact': 'Impact:',
    'project5.impactDesc': 'Client automated inventory management and increased sales reach.',
    'project6.title': 'Barbershop Web System',
    'project6.problem': 'Problem:',
    'project6.problemDesc': 'Barbershop required professional web presence to showcase services and schedule appointments.',
    'project6.solution': 'Solution:',
    'project6.solutionDesc': 'Modern frontend with service gallery, contact form and UX design optimized for conversion.',
    'project6.impact': 'Impact:',
    'project6.impactDesc': 'Landing page in production with mobile-first design and high contact rate.',
    'project.btn.demo': 'View Demo',
    'project.btn.info': 'More info',
    'experience.title': 'Experience',
    'experience1.title': 'Frontend Developer Intern · Tecnoparque SENA Medellín',
    'experience1.period': 'August 2024 – Present',
    'experience1.description': 'Development of innovative technological solutions with emphasis on frontend. Technical leadership in 3 of 5 program projects.',
    'experience1.achievement1': 'Development of agricultural monitoring system with React: interactive dashboard for IoT data visualization (humidity, temperature, pH sensors)',
    'experience1.achievement2': 'Creation of cross-platform mobile applications with React Native integrated with Node.js backend',
    'experience1.achievement3': 'Implementation of forum-type web application with Django: authentication, publication management, relational database',
    'experience1.achievement4': 'Collaborative work with Git/GitHub in multidisciplinary teams using agile methodologies',
    'experience2.title': 'Freelance Frontend Developer',
    'experience2.period': 'March 2023 – August 2024',
    'experience2.description': 'Development of web and mobile solutions for local businesses. Focus on value delivery and user experience.',
    'experience2.achievement1': 'Development of 8+ responsive websites with HTML5, CSS3, JavaScript and Bootstrap 5',
    'experience2.achievement2': 'Creation of hybrid mobile applications with React Native for local clients',
    'experience2.achievement3': 'Interface design in Figma and prototyping before development',
    'experience2.achievement4': 'Direct client management: requirements gathering, iterations and production deployment',
    'contact.title': 'Let\'s work together?',
    'contact.description': 'I\'m available for projects and job opportunities as Frontend Developer. If you\'re looking for someone who transforms ideas into functional digital products, let\'s connect. I respond in less than 24h.',
    'contact.btn.email': 'Send Email',
    'contact.btn.whatsapp': 'WhatsApp',
    'contact.btn.github': 'GitHub',
    'contact.form.name': 'Name *',
    'contact.form.email': 'Email *',
    'contact.form.message': 'Message *',
    'contact.form.submit': 'Send message',
    'contact.form.placeholder.name': 'Your name',
    'contact.form.placeholder.email': 'your@email.com',
    'contact.form.placeholder.message': 'Tell me about your project or opportunity...',
    'contact.form.error.name': 'Please enter your name (minimum 2 characters).',
    'contact.form.error.email': 'Enter a valid email.',
    'contact.form.error.message': 'Write a message (minimum 10 characters).',
    'footer.rights': 'All rights reserved.',
    'footer.home': 'Home',
    'footer.projects': 'Projects',
    'footer.contact': 'Contact'
  },
  pt: {
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Projetos',
    'nav.experience': 'Experiência',
    'nav.contact': 'Contato',
    'nav.cv': 'Baixar CV',
    'hero.role': 'Desenvolvedor Frontend',
    'hero.greeting': 'Olá, sou',
    'hero.fullDescription': 'Crio interfaces modernas com React e React Native. Da ideia ao produto, conectando frontend com soluções backend escaláveis',
    'hero.btn.projects': 'Ver projetos em destaque',
    'hero.btn.contact': 'Vamos falar sobre seu projeto',
    'about.title': 'Sobre mim',
    'about.description': 'Desenvolvedor Frontend com experiência em React, React Native e JavaScript. Especializo-me em criar interfaces intuitivas que conectam com soluções backend robustas (Node.js, Django). Liderei tecnicamente 3 de 5 projetos no Tecnoparque SENA, incluindo sistemas IoT para monitoramento agrícola e aplicações móveis com arquitetura escalável.',
    'about.description2': 'Combino visão de produto com implementação técnica: desde o design no Figma até o deploy em produção. Meu objetivo é transformar ideias em experiências digitais que geram impacto real.',
    'about.item1': 'Desenvolvimento com React e React Native para web e mobile',
    'about.item2': 'Liderança técnica em projetos multidisciplinares',
    'about.item3': 'Foco em performance, acessibilidade e UX/UI',
    'about.item4': 'Experiência com metodologias ágeis e Git/GitHub',
    'skills.title': 'Habilidades',
    'skills.react': 'React & React Native',
    'skills.javascript': 'JavaScript (ES6+)',
    'skills.htmlcss': 'HTML5 & CSS3',
    'skills.backend': 'Node.js & Django',
    'skills.databases': 'MySQL, MongoDB & SQL Server',
    'skills.tools': 'Git, Figma & Metodologias Ágeis',
    'skills.advanced': 'Avançado',
    'skills.intermediate': 'Intermediário',
    'projects.title': 'Projetos',
    'projects.search': 'Pesquisar projetos...',
    'projects.filter.all': 'Todos',
    'projects.filter.frontend': 'Frontend',
    'projects.filter.backend': 'Backend',
    'projects.filter.fullstack': 'Fullstack',
    'project1.title': 'Sistema de Monitoramento Agrícola com IoT',
    'project1.problem': 'Problema:',
    'project1.problemDesc': 'Necessidade de monitorar variáveis ambientais em tempo real nas culturas para otimizar a produção.',
    'project1.solution': 'Solução:',
    'project1.solutionDesc': 'Dashboard interativo em React que visualiza dados de sensores IoT, processa informações com Node.js e armazena métricas históricas.',
    'project1.impact': 'Impacto:',
    'project1.impactDesc': 'Visualização em tempo real de temperatura, umidade e pH do solo. Projeto liderado tecnicamente no Tecnoparque SENA.',
    'project2.title': 'Aplicação Móvel Multiplataforma',
    'project2.problem': 'Problema:',
    'project2.problemDesc': 'Cliente precisava de app móvel para iOS e Android sem duplicar esforços de desenvolvimento.',
    'project2.solution': 'Solução:',
    'project2.solutionDesc': 'App desenvolvido com React Native integrado com backend em Node.js. Gerenciamento de estado com Context API e navegação nativa.',
    'project2.impact': 'Impacto:',
    'project2.impactDesc': 'Desenvolvimento único para ambas as plataformas, reduzindo tempo de entrega em 40%.',
    'project3.title': 'Plataforma Web Tipo Fórum',
    'project3.problem': 'Problema:',
    'project3.problemDesc': 'Comunidade precisava de espaço para compartilhar conhecimento com sistema de autenticação robusto.',
    'project3.solution': 'Solução:',
    'project3.solutionDesc': 'Aplicação web com Django: sistema de usuários, publicações, comentários e busca. Base de dados relacional otimizada.',
    'project3.impact': 'Impacto:',
    'project3.impactDesc': 'Plataforma funcional com gestão completa de conteúdo e funções de usuário.',
    'project4.title': 'Frontend Para Gestão Educacional',
    'project4.problem': 'Problema:',
    'project4.problemDesc': 'Instituição educacional precisava de interface moderna e responsiva para seu sistema de gestão.',
    'project4.solution': 'Solução:',
    'project4.solutionDesc': 'Frontend responsivo com JavaScript vanilla, otimizado para carregamento rápido e acessibilidade.',
    'project4.impact': 'Impacto:',
    'project4.impactDesc': 'Interface intuitiva implantada em produção com tempo de carregamento <3s.',
    'project5.title': 'Loja Online - Projeto Freelance',
    'project5.problem': 'Problema:',
    'project5.problemDesc': 'Negócio local precisava digitalizar vendas com carrinho de compras funcional.',
    'project5.solution': 'Solução:',
    'project5.solutionDesc': 'E-commerce com Django: catálogo de produtos, carrinho, painel de administração e sistema de pedidos.',
    'project5.impact': 'Impacto:',
    'project5.impactDesc': 'Cliente automatizou gestão de inventário e aumentou alcance de vendas.',
    'project6.title': 'Sistema Web para Barbearia',
    'project6.problem': 'Problema:',
    'project6.problemDesc': 'Barbearia precisava de presença web profissional para mostrar serviços e agendar compromissos.',
    'project6.solution': 'Solução:',
    'project6.solutionDesc': 'Frontend moderno com galeria de serviços, formulário de contato e design UX otimizado para conversão.',
    'project6.impact': 'Impacto:',
    'project6.impactDesc': 'Landing page em produção com design mobile-first e alta taxa de contato.',
    'project.btn.demo': 'Ver Demo',
    'project.btn.info': 'Mais info',
    'experience.title': 'Experiência',
    'experience1.title': 'Estagiário Desenvolvedor Frontend · Tecnoparque SENA Medellín',
    'experience1.period': 'Agosto 2024 – Presente',
    'experience1.description': 'Desenvolvimento de soluções tecnológicas inovadoras com ênfase em frontend. Liderança técnica em 3 de 5 projetos do programa.',
    'experience1.achievement1': 'Desenvolvimento de sistema de monitoramento agrícola com React: dashboard interativo para visualização de dados IoT (sensores de umidade, temperatura, pH)',
    'experience1.achievement2': 'Criação de aplicações móveis multiplataforma com React Native integradas com backend Node.js',
    'experience1.achievement3': 'Implementação de aplicação web tipo fórum com Django: autenticação, gestão de publicações, base de dados relacional',
    'experience1.achievement4': 'Trabalho colaborativo com Git/GitHub em equipes multidisciplinares usando metodologias ágeis',
    'experience2.title': 'Desenvolvedor Frontend Freelance',
    'experience2.period': 'Março 2023 – Agosto 2024',
    'experience2.description': 'Desenvolvimento de soluções web e móveis para negócios locais. Foco em entrega de valor e experiência do usuário.',
    'experience2.achievement1': 'Desenvolvimento de 8+ sites responsivos com HTML5, CSS3, JavaScript e Bootstrap 5',
    'experience2.achievement2': 'Criação de aplicações móveis híbridas com React Native para clientes locais',
    'experience2.achievement3': 'Design de interfaces no Figma e prototipagem antes do desenvolvimento',
    'experience2.achievement4': 'Gestão direta com clientes: levantamento de requisitos, iterações e implantação em produção',
    'contact.title': 'Vamos trabalhar juntos?',
    'contact.description': 'Estou disponível para projetos e oportunidades de trabalho como Desenvolvedor Frontend. Se procura alguém que transforme ideias em produtos digitais funcionais, vamos nos conectar. Respondo em menos de 24h.',
    'contact.btn.email': 'Enviar Email',
    'contact.btn.whatsapp': 'WhatsApp',
    'contact.btn.github': 'GitHub',
    'contact.form.name': 'Nome *',
    'contact.form.email': 'Email *',
    'contact.form.message': 'Mensagem *',
    'contact.form.submit': 'Enviar mensagem',
    'contact.form.placeholder.name': 'Seu nome',
    'contact.form.placeholder.email': 'seu@email.com',
    'contact.form.placeholder.message': 'Conte-me sobre seu projeto ou oportunidade...',
    'contact.form.error.name': 'Por favor, digite seu nome (mínimo 2 caracteres).',
    'contact.form.error.email': 'Digite um email válido.',
    'contact.form.error.message': 'Escreva uma mensagem (mínimo 10 caracteres).',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.home': 'Início',
    'footer.projects': 'Projetos',
    'footer.contact': 'Contato'
  }
};

let currentLang = localStorage.getItem('language') || 'es';

// Función para traducir la página
function translatePage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  
  // Actualizar atributo lang del HTML
  document.documentElement.setAttribute('lang', lang);
  
  // Actualizar textos traducibles
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // Actualizar placeholders traducibles
  document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
    const key = element.getAttribute('data-translate-placeholder');
    if (translations[lang] && translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });
  
  // Actualizar dropdown de idioma
  const langText = document.querySelector('.lang-text');
  if (langText) {
    langText.textContent = lang.toUpperCase();
  }
  
  // Marcar item activo
  document.querySelectorAll('.language-selector .dropdown-item').forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-lang') === lang);
  });
}

// ===== Tema persistente (light/dark) =====
function setTheme(theme) {
  document.documentElement.setAttribute('data-bs-theme', theme);
  localStorage.setItem('theme', theme);

  const toggleBtn = document.getElementById('themeToggle');
  if (toggleBtn) {
    toggleBtn.innerHTML = theme === 'dark'
      ? '<i class="bi bi-sun"></i>'
      : '<i class="bi bi-moon-stars"></i>';
    toggleBtn.classList.add('is-animating');
    setTimeout(() => toggleBtn.classList.remove('is-animating'), 360);
  }
}

// ===== INICIALIZACIÓN AL CARGAR LA PÁGINA =====
document.addEventListener('DOMContentLoaded', () => {
  
  // ===== Inicializar traducción =====
  translatePage(currentLang);
  
  // Event listeners para cambio de idioma
  document.querySelectorAll('.language-selector .dropdown-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = item.getAttribute('data-lang');
      translatePage(lang);
    });
  });

  // ===== Inicializar tema =====
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);

  const toggleBtn = document.getElementById('themeToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-bs-theme');
      setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  // ===== Año dinámico =====
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  
  // ===== Scroll Progress Bar =====
  const scrollProgress = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    if (scrollProgress) {
      scrollProgress.style.width = scrolled + '%';
    }
  }, { passive: true });

  // ===== Scroll suave =====
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ===== Botón volver arriba =====
  const toTop = document.getElementById('toTop');
  if (toTop) {
    window.addEventListener('scroll', () => {
      toTop.style.display = window.scrollY > 600 ? 'block' : 'none';
    });
    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ===== Validación formulario con feedback mejorado =====
  (() => {
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', async event => {
        event.preventDefault();
        event.stopPropagation();
        
        if (!form.checkValidity()) {
          form.classList.add('was-validated');
          return;
        }
        
        // Deshabilitar botón y mostrar loading
        const submitBtn = form.querySelector('#submitBtn');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Enviando...';
        
        try {
          // Obtener datos del formulario
          const formData = new FormData(form);
          const nombre = formData.get('nombre');
          const email = formData.get('email');
          const mensaje = formData.get('mensaje');
          
          // Crear enlace mailto
          const subject = `Contacto desde portafolio - ${nombre}`;
          const body = `Nombre: ${nombre}%0D%0AEmail: ${email}%0D%0A%0D%0AMensaje:%0D%0A${mensaje}`;
          const mailtoLink = `mailto:Sgomezd28@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
          
          // Abrir cliente de email
          window.location.href = mailtoLink;
          
          // Mostrar mensaje de éxito
          submitBtn.innerHTML = '<i class="bi bi-check-circle me-2"></i>¡Enviado!';
          submitBtn.classList.remove('btn-gradient');
          submitBtn.classList.add('btn-success');
          
          setTimeout(() => {
            form.reset();
            form.classList.remove('was-validated');
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            submitBtn.classList.remove('btn-success');
            submitBtn.classList.add('btn-gradient');
          }, 2000);
          
        } catch (error) {
          submitBtn.innerHTML = '<i class="bi bi-exclamation-triangle me-2"></i>Error al enviar';
          submitBtn.classList.remove('btn-gradient');
          submitBtn.classList.add('btn-danger');
          
          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            submitBtn.classList.remove('btn-danger');
            submitBtn.classList.add('btn-gradient');
          }, 2000);
        }
      }, false);
    });
  })();

  // ===== Filtro proyectos con debouncing =====
  const filterButtons = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('search');
  const projectItems = document.querySelectorAll('.project-item');
  let currentFilter = 'all';
  let debounceTimer;

  function applyFilters() {
    const q = searchInput ? searchInput.value.toLowerCase().trim() : '';
    let visibleCount = 0;
    
    projectItems.forEach((item, index) => {
      const tags = item.dataset.tags.toLowerCase();
      const title = item.querySelector('.card-title').textContent.toLowerCase();
      const matchesText = !q || tags.includes(q) || title.includes(q);
      const matchesFilter = currentFilter === 'all' || tags.includes(currentFilter);
      
      if (matchesText && matchesFilter) {
        item.style.display = '';
        item.style.animationDelay = `${visibleCount * 0.1}s`;
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });
    
    // Mostrar mensaje si no hay resultados
    const projectGrid = document.getElementById('projectGrid');
    const noResults = document.getElementById('noResults');
    
    if (visibleCount === 0) {
      if (!noResults) {
        const msg = document.createElement('div');
        msg.id = 'noResults';
        msg.className = 'col-12 text-center py-5';
        msg.innerHTML = '<p class="text-secondary"><i class="bi bi-search me-2"></i>No se encontraron proyectos que coincidan con tu búsqueda.</p>';
        projectGrid.appendChild(msg);
      }
    } else if (noResults) {
      noResults.remove();
    }
  }
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      applyFilters();
    });
  });
  
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(applyFilters, 300);
    });
  }

  // ===== Destacar enlace activo con throttling =====
  const sections = document.querySelectorAll('header[id], section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let lastScrollTime = 0;
  const throttleDelay = 100;
  
  const observer = new IntersectionObserver(entries => {
    const now = Date.now();
    if (now - lastScrollTime < throttleDelay) return;
    lastScrollTime = now;
    
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0.1 });
  
  sections.forEach(s => observer.observe(s));

  // ===== Inicializar AOS y asignar animaciones automáticas =====
  document.querySelectorAll('section, .card, .project-item, header, footer, img').forEach((el, index) => {
    if (!el.hasAttribute('data-aos')) {
      const animations = ['fade-up', 'fade-down', 'zoom-in', 'zoom-out', 'fade-left', 'fade-right'];
      el.setAttribute('data-aos', animations[index % animations.length]);
    }
  });

  AOS.init({
    duration: 800,
    offset: 120,
    once: true,
    easing: 'ease-in-out'
  });
  
  // ===== Lazy loading de imágenes =====
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.src;
    });
  } else {
    // Fallback para navegadores que no soportan lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
  }
  
  // ===== Optimización: cerrar navbar mobile al hacer click en un link =====
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  if (navbarToggler && navbarCollapse) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
          navbarToggler.click();
        }
      });
    });
  }
});

// ===== Performance: usar requestAnimationFrame para animaciones suaves =====
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      // Actualizar elementos que dependan del scroll
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });
