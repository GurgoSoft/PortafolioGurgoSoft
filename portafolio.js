  // ===== Google Translate =====
  function googleTranslateElementInit() {
    new google.translate.TranslateElement(
      { pageLanguage: 'es', includedLanguages: '', layout: google.translate.TranslateElement.InlineLayout.SIMPLE },
      'google_translate_element'
    );
  }

  // Guardar y restaurar idioma seleccionado
  function restoreSelectedLanguage() {
    const savedLang = localStorage.getItem('selectedLang');
    if (savedLang && savedLang !== 'es') {
      const interval = setInterval(() => {
        const select = document.querySelector('.goog-te-combo');
        if (select) {
          select.value = savedLang;
          select.dispatchEvent(new Event('change'));
          clearInterval(interval);
        }
      }, 500);
    }
  }
  document.addEventListener('change', e => {
    if (e.target.classList.contains('goog-te-combo')) {
      localStorage.setItem('selectedLang', e.target.value);
    }
  });

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

  document.addEventListener('DOMContentLoaded', () => {
    // Inicializar tema guardado
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
      });
    }

    // Año dinámico
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Botón volver arriba
    const toTop = document.getElementById('toTop');
    if (toTop) {
      window.addEventListener('scroll', () => {
        toTop.style.display = window.scrollY > 600 ? 'block' : 'none';
      });
      toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // Validación formulario
    (() => {
      const forms = document.querySelectorAll('.needs-validation');
      Array.from(forms).forEach(form => {
        form.addEventListener('submit', async event => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          } else {
            event.preventDefault();
            alert('¡Gracias! Tu mensaje ha sido enviado.');
            form.reset();
            form.classList.remove('was-validated');
          }
          form.classList.add('was-validated');
        }, false);
      });
    })();

    // Filtro proyectos
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('search');
    const projectItems = document.querySelectorAll('.project-item');
    let currentFilter = 'all';

    function applyFilters() {
      const q = searchInput.value.toLowerCase().trim();
      projectItems.forEach(item => {
        const tags = item.dataset.tags.toLowerCase();
        const title = item.querySelector('.card-title').textContent.toLowerCase();
        const matchesText = !q || tags.includes(q) || title.includes(q);
        const matchesFilter = currentFilter === 'all' || tags.includes(currentFilter);
        item.style.display = matchesText && matchesFilter ? '' : 'none';
      });
    }
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        applyFilters();
      });
    });
    if (searchInput) searchInput.addEventListener('input', applyFilters);

    // Destacar enlace activo
    const sections = document.querySelectorAll('header[id], section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const observer = new IntersectionObserver(entries => {
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

    // Inicializar AOS y asignar animaciones automáticas
    document.querySelectorAll('section, .card, .project-item, header, footer, img').forEach((el, index) => {
      if (!el.hasAttribute('data-aos')) {
        const animations = ['fade-up', 'fade-down', 'zoom-in', 'zoom-out', 'fade-left', 'fade-right'];
        el.setAttribute('data-aos', animations[index % animations.length]);
      }
    });

    AOS.init({
      duration: 800,
      offset: 120,
      once: true
    });

    // Restaurar idioma
    restoreSelectedLanguage();
  });
  document.addEventListener('DOMContentLoaded', () => {
    // Asignar animaciones automáticas a elementos
    document.querySelectorAll('section, .card, .project-item, header, footer, img').forEach((el, index) => {
      if (!el.hasAttribute('data-aos')) {
        const animations = ['fade-up', 'fade-down', 'fade-left', 'fade-right', 'zoom-in', 'zoom-out'];
        el.setAttribute('data-aos', animations[index % animations.length]);
      }
    });

    // Inicializar AOS para que los elementos animen también al salir
    AOS.init({
      duration: 800,
      offset: 120,
      once: false, // ❗ Esto permite que reaparezcan y desaparezcan
      mirror: true // ❗ Esto hace que se anime también al salir
    });
  });