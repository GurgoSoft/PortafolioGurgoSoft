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
    'hero.role': 'Desarrollador Web Full Stack',
    'hero.greeting': 'Hola, soy',
    'hero.fullDescription': 'Construyo experiencias web rápidas, accesibles y escalables',
    'hero.btn.projects': 'Ver proyectos',
    'hero.btn.contact': 'Contáctame',
    'about.title': 'Sobre mí',
    'about.description': 'Apasionado por el desarrollo frontend y backend, me enfoco en crear interfaces accesibles y consumir APIs. Domino el framework Django y disfruto transformar ideas en productos reales.',
    'about.item1': 'Escritura de código limpio y mantenible.',
    'about.item2': 'Experiencia en metodologías ágiles y CI/CD.',
    'about.item3': 'Enfoque en rendimiento, seguridad y UX.',
    'skills.title': 'Habilidades',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.apis': 'Consumo de APIs',
    'skills.frameworks': 'Manejo de frameworks',
    'skills.advanced': 'Avanzado',
    'skills.intermediate': 'Intermedio',
    'projects.title': 'Proyectos',
    'projects.search': 'Buscar proyectos...',
    'projects.filter.all': 'Todos',
    'projects.filter.frontend': 'Frontend',
    'projects.filter.backend': 'Backend',
    'projects.filter.fullstack': 'Fullstack',
    'project1.title': 'Tienda De Ropa Personal.',
    'project1.description': 'Mi tienda en línea con carrito, consumo de APIs y panel de admin.',
    'project1.tech': 'Tecnologías implementadas.',
    'project2.title': 'Frontend Para Gestión Educativa.',
    'project2.description': 'Frontend para un sistema de gestión escolar desplegado en Netlify.',
    'project2.tech': 'Tecnologías implementadas.',
    'project3.title': 'Juego De La Culebrita.',
    'project3.description': 'Un juego clásico de la culebrita, desarrollado con HTML, CSS y JavaScript.',
    'project3.tech': 'Tecnologías implementadas.',
    'project4.title': 'Frontend Para Sistema De Barbería.',
    'project4.description': 'Frontend para un sistema de gestión de barbería desplegado en Netlify.',
    'project4.tech': 'Tecnologías implementadas.',
    'project.btn.demo': 'Ver Demo',
    'experience.title': 'Experiencia',
    'experience1.title': 'Practicante SENA · Tecnoparque Medellín',
    'experience1.period': 'Agosto 2025 – Actualidad',
    'experience1.description': 'Creación de aplicativos web con Django, Node.Js, uso de bootstrap 5 y creación de bases de datos SQL/NoSQL.',
    'experience2.title': 'Freelance',
    'experience2.period': 'Marzo 2023 – Agosto 2025',
    'experience2.description': 'Sitios web responsive, creación de aplicaciones móviles y pruebas automatizadas.',
    'contact.title': 'Contacto',
    'contact.description': '¿Tienes una idea o proyecto? Hablemos. Respondo normalmente en 24h aprox.',
    'contact.btn.email': 'Email',
    'contact.btn.whatsapp': 'WhatsApp',
    'contact.btn.github': 'GitHub',
    'contact.form.name': 'Nombre *',
    'contact.form.email': 'Email *',
    'contact.form.message': 'Mensaje *',
    'contact.form.submit': 'Enviar mensaje',
    'contact.form.placeholder.name': 'Tu nombre',
    'contact.form.placeholder.email': 'tu@email.com',
    'contact.form.placeholder.message': 'Cuéntame sobre tu proyecto...',
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
    'hero.role': 'Full Stack Web Developer',
    'hero.greeting': 'Hi, I\'m',
    'hero.fullDescription': 'I build fast, accessible and scalable web experiences',
    'hero.btn.projects': 'View projects',
    'hero.btn.contact': 'Contact me',
    'about.title': 'About me',
    'about.description': 'Passionate about frontend and backend development, I focus on creating accessible interfaces and consuming APIs. I master the Django framework and enjoy transforming ideas into real products.',
    'about.item1': 'Writing clean and maintainable code.',
    'about.item2': 'Experience in agile methodologies and CI/CD.',
    'about.item3': 'Focus on performance, security and UX.',
    'skills.title': 'Skills',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.apis': 'API Consumption',
    'skills.frameworks': 'Framework Management',
    'skills.advanced': 'Advanced',
    'skills.intermediate': 'Intermediate',
    'projects.title': 'Projects',
    'projects.search': 'Search projects...',
    'projects.filter.all': 'All',
    'projects.filter.frontend': 'Frontend',
    'projects.filter.backend': 'Backend',
    'projects.filter.fullstack': 'Fullstack',
    'project1.title': 'Personal Clothing Store.',
    'project1.description': 'My online store with shopping cart, API consumption and admin panel.',
    'project1.tech': 'Implemented technologies.',
    'project2.title': 'Frontend For Educational Management.',
    'project2.description': 'Frontend for a school management system deployed on Netlify.',
    'project2.tech': 'Implemented technologies.',
    'project3.title': 'Snake Game.',
    'project3.description': 'A classic snake game, developed with HTML, CSS and JavaScript.',
    'project3.tech': 'Implemented technologies.',
    'project4.title': 'Frontend For Barbershop System.',
    'project4.description': 'Frontend for a barbershop management system deployed on Netlify.',
    'project4.tech': 'Implemented technologies.',
    'project.btn.demo': 'View Demo',
    'experience.title': 'Experience',
    'experience1.title': 'SENA Intern · Tecnoparque Medellín',
    'experience1.period': 'August 2025 – Present',
    'experience1.description': 'Creation of web applications with Django, Node.Js, use of bootstrap 5 and creation of SQL/NoSQL databases.',
    'experience2.title': 'Freelance',
    'experience2.period': 'March 2023 – August 2025',
    'experience2.description': 'Responsive websites, mobile app development and automated testing.',
    'contact.title': 'Contact',
    'contact.description': 'Have an idea or project? Let\'s talk. I usually respond within 24h.',
    'contact.btn.email': 'Email',
    'contact.btn.whatsapp': 'WhatsApp',
    'contact.btn.github': 'GitHub',
    'contact.form.name': 'Name *',
    'contact.form.email': 'Email *',
    'contact.form.message': 'Message *',
    'contact.form.submit': 'Send message',
    'contact.form.placeholder.name': 'Your name',
    'contact.form.placeholder.email': 'your@email.com',
    'contact.form.placeholder.message': 'Tell me about your project...',
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
    'hero.role': 'Desenvolvedor Web Full Stack',
    'hero.greeting': 'Olá, sou',
    'hero.fullDescription': 'Construo experiências web rápidas, acessíveis e escaláveis',
    'hero.btn.projects': 'Ver projetos',
    'hero.btn.contact': 'Entre em contato',
    'about.title': 'Sobre mim',
    'about.description': 'Apaixonado pelo desenvolvimento frontend e backend, concentro-me em criar interfaces acessíveis e consumir APIs. Domino o framework Django e gosto de transformar ideias em produtos reais.',
    'about.item1': 'Escrita de código limpo e sustentável.',
    'about.item2': 'Experiência em metodologias ágeis e CI/CD.',
    'about.item3': 'Foco em desempenho, segurança e UX.',
    'skills.title': 'Habilidades',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.apis': 'Consumo de APIs',
    'skills.frameworks': 'Gerenciamento de frameworks',
    'skills.advanced': 'Avançado',
    'skills.intermediate': 'Intermediário',
    'projects.title': 'Projetos',
    'projects.search': 'Pesquisar projetos...',
    'projects.filter.all': 'Todos',
    'projects.filter.frontend': 'Frontend',
    'projects.filter.backend': 'Backend',
    'projects.filter.fullstack': 'Fullstack',
    'project1.title': 'Loja de Roupas Pessoal.',
    'project1.description': 'Minha loja online com carrinho de compras, consumo de APIs e painel de administração.',
    'project1.tech': 'Tecnologias implementadas.',
    'project2.title': 'Frontend Para Gestão Educacional.',
    'project2.description': 'Frontend para um sistema de gestão escolar implantado no Netlify.',
    'project2.tech': 'Tecnologias implementadas.',
    'project3.title': 'Jogo da Cobrinha.',
    'project3.description': 'Um jogo clássico da cobrinha, desenvolvido com HTML, CSS e JavaScript.',
    'project3.tech': 'Tecnologias implementadas.',
    'project4.title': 'Frontend Para Sistema de Barbearia.',
    'project4.description': 'Frontend para um sistema de gestão de barbearia implantado no Netlify.',
    'project4.tech': 'Tecnologias implementadas.',
    'project.btn.demo': 'Ver Demo',
    'experience.title': 'Experiência',
    'experience1.title': 'Estagiário SENA · Tecnoparque Medellín',
    'experience1.period': 'Agosto 2025 – Presente',
    'experience1.description': 'Criação de aplicativos web com Django, Node.Js, uso de bootstrap 5 e criação de bancos de dados SQL/NoSQL.',
    'experience2.title': 'Freelance',
    'experience2.period': 'Março 2023 – Agosto 2025',
    'experience2.description': 'Sites responsivos, desenvolvimento de aplicativos móveis e testes automatizados.',
    'contact.title': 'Contato',
    'contact.description': 'Tem uma ideia ou projeto? Vamos conversar. Geralmente respondo em 24h.',
    'contact.btn.email': 'Email',
    'contact.btn.whatsapp': 'WhatsApp',
    'contact.btn.github': 'GitHub',
    'contact.form.name': 'Nome *',
    'contact.form.email': 'Email *',
    'contact.form.message': 'Mensagem *',
    'contact.form.submit': 'Enviar mensagem',
    'contact.form.placeholder.name': 'Seu nome',
    'contact.form.placeholder.email': 'seu@email.com',
    'contact.form.placeholder.message': 'Conte-me sobre seu projeto...',
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
  
  // ===== Efecto parallax sutil en hero =====
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.3;
      if (scrolled < 800) {
        heroImage.style.transform = `translateY(${rate}px)`;
      }
    }, { passive: true });
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
