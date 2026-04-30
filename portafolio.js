// ===== Sistema de Traducción Personalizado =====
const translations = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.education': 'Formación',
    'nav.contact': 'Contacto',
    'nav.cv': 'Descargar CV',
    'hero.role': 'Desarrollador FullStack',
    'hero.greeting': 'Hola, soy',
    'hero.available': 'Disponible',
    'hero.fullDescription': 'Tecnólogo en Análisis y Desarrollo de Software. Construyo aplicaciones web y móviles end-to-end: React, Node.js, Django, bases de datos y despliegue',
    'hero.btn.projects': 'Ver proyectos destacados',
    'hero.btn.contact': 'Hablemos de tu proyecto',
    'about.title': 'Sobre mí',
    'about.description': 'Tecnólogo en Análisis y Desarrollo de Software con experiencia comprobada construyendo aplicaciones web y móviles end-to-end: frontend, backend, bases de datos relacionales y NoSQL, e integración de servicios. Lideré técnicamente 3 de 5 proyectos en Tecnoparque SENA, asumiendo desde el modelado de datos hasta el despliegue.',
    'about.description2': 'Combino criterio de cliente —desarrollado en 2 años como freelance— con velocidad de aprendizaje y uso intensivo de herramientas de IA para acelerar entregas. Mi backend principal es Node.js y Django.',
    'about.item1': 'Desarrollo fullstack: React/React Native, Node.js, Django',
    'about.item2': 'Liderazgo técnico en proyectos multidisciplinarios',
    'about.item3': 'Modelado y administración de BD: MySQL, PostgreSQL, MongoDB',
    'about.item4': 'Uso productivo de IA: Claude, ChatGPT y GitHub Copilot',
    'skills.title': 'Habilidades',
    'skills.react': 'React & React Native',
    'skills.javascript': 'JavaScript (ES6+)',
    'skills.htmlcss': 'HTML5 & CSS3',
    'skills.backend': 'Node.js & Django',
    'skills.databases': 'MySQL, PostgreSQL, MongoDB & SQL Server',
    'skills.tools': 'Git, Figma & Metodologías Ágiles',
    'skills.ai': 'IA Aplicada (Claude, ChatGPT, Copilot)',
    'skills.deploy': 'Netlify, GitHub & Despliegue',
    'skills.advanced': 'Avanzado',
    'skills.intermediate': 'Intermedio',
    'projects.title': 'Proyectos',
    'projects.search': 'Buscar proyectos...',
    'projects.filter.all': 'Todos',
    'projects.filter.frontend': 'Frontend',
    'projects.filter.backend': 'Backend',
    'projects.filter.fullstack': 'Fullstack',
    'project1.title': 'Mercado Esotérico - Tienda Online',
    'project1.problem': 'Problema:',
    'project1.problemDesc': 'Tienda esotérica necesitaba presencia web para mostrar productos y expandir su mercado.',
    'project1.solution': 'Solución:',
    'project1.solutionDesc': 'Página web estática con diseño místico y elegante, catálogo de productos con filtros y formulario de contacto.',
    'project1.impact': 'Impacto:',
    'project1.impactDesc': 'Sitio web responsive y optimizado que refleja la identidad de la marca. Aumento del alcance en línea.',
    'project2.title': 'Snake Game - Juego de la Culebrita',
    'project2.problem': 'Problema:',
    'project2.problemDesc': 'Proyecto personal para practicar lógica de juegos y manipulación del DOM.',
    'project2.solution': 'Solución:',
    'project2.solutionDesc': 'Juego clásico de la serpiente con JavaScript vanilla. Incluye sistema de puntuación, niveles de dificultad y controles responsive.',
    'project2.impact': 'Impacto:',
    'project2.impactDesc': 'Juego funcional con lógica robusta. Excelente práctica de programación orientada a objetos.',
    'project3.title': 'Nerissa - Tienda de Ropa Femenina',
    'project3.problem': 'Problema:',
    'project3.problemDesc': 'Marca de ropa femenina necesitaba tienda online profesional con sistema de pagos integrado.',
    'project3.solution': 'Solución:',
    'project3.solutionDesc': 'E-commerce completo en Shopify con diseño personalizado, catálogo de productos, carrito de compras y pasarela de pagos.',
    'project3.impact': 'Impacto:',
    'project3.impactDesc': 'Tienda en producción con ventas activas. Experiencia de compra optimizada y gestión de inventario automatizada.',
    'project4.title': 'Tour Virtual 360° - Inmobiliaria',
    'project4.problem': 'Problema:',
    'project4.problemDesc': 'Inmobiliaria necesitaba mostrar propiedades de forma inmersiva sin requerir visitas presenciales.',
    'project4.solution': 'Solución:',
    'project4.solutionDesc': 'Aplicación React con visor 360° integrado, componentes reutilizables y navegación fluida entre habitaciones del inmueble.',
    'project4.impact': 'Impacto:',
    'project4.impactDesc': 'Experiencia inmersiva desplegada en producción que permite recorrer propiedades virtualmente, ampliando el alcance comercial de la inmobiliaria.',
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
    'experience1.title': 'Practicante en Desarrollo de Software · Tecnoparque SENA Medellín',
    'experience1.period': '2025 – 2026',
    'experience1.description': 'Desarrollo de soluciones tecnológicas con cobertura fullstack. Liderazgo técnico en 3 de 5 proyectos, cubriendo arquitectura, frontend, backend y base de datos en cada uno.',
    'experience1.achievement1': 'Sistema de monitoreo agrícola IoT con React + Node.js: visualización en tiempo real de sensores físicos, modelo de datos relacional y endpoints de ingesta',
    'experience1.achievement2': 'Aplicación web tipo foro con Django y MySQL desde cero: autenticación, gestión de publicaciones y despliegue a entorno de pruebas',
    'experience1.achievement3': 'Aplicaciones móviles con React Native integradas con APIs Node.js, ejecutando el ciclo completo bajo metodologías ágiles',
    'experience1.achievement4': 'Modelado y administración de bases de datos en MySQL, PostgreSQL, SQL Server y MongoDB según el caso de uso',
    'experience2.title': 'Desarrollador Web Freelance — Medellín, Antioquia',
    'experience2.period': '2023 – 2025',
    'experience2.description': 'Soluciones web a 5 emprendimientos locales gestionando el ciclo completo: levantamiento de requerimientos, propuesta, desarrollo, pruebas y entrega.',
    'experience2.achievement1': '5 proyectos entregados con HTML, CSS, Bootstrap y JavaScript, con relación directa con el cliente',
    'experience2.achievement2': 'Diseño responsivo implementado en el 100% de los proyectos, garantizando funcionamiento en móvil y escritorio',
    'experience2.achievement3': 'Gestión directa cliente: reuniones, ajustes y soporte post-entrega',
    'experience2.achievement4': 'Portafolio en vivo: portafoliosgd.netlify.app',
    'education.title': 'Formación',
    'education1.title': 'Tecnología en Análisis y Desarrollo de Software',
    'education1.period': '2023 – 2026',
    'education2.title': 'Técnica Laboral en Asistente de Desarrollo de Software',
    'education2.period': '2023 – 2024',
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
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'nav.cv': 'Download CV',
    'hero.role': 'FullStack Developer',
    'hero.greeting': 'Hi, I\'m',
    'hero.available': 'Available',
    'hero.fullDescription': 'Software Analysis & Development Technologist. I build end-to-end web and mobile apps: React, Node.js, Django, databases and deployment',
    'hero.btn.projects': 'View featured projects',
    'hero.btn.contact': 'Let\'s talk about your project',
    'about.title': 'About me',
    'about.description': 'Software Analysis & Development Technologist with proven experience building end-to-end web and mobile applications: frontend, backend, relational and NoSQL databases, and service integration. Technically led 3 of 5 projects at Tecnoparque SENA, covering data modeling through deployment.',
    'about.description2': 'I combine client-facing experience — developed over 2 years as a freelancer — with fast learning and intensive use of AI tools to accelerate delivery. My primary backend is Node.js and Django.',
    'about.item1': 'Fullstack development: React/React Native, Node.js, Django',
    'about.item2': 'Technical leadership in multidisciplinary projects',
    'about.item3': 'DB modeling & management: MySQL, PostgreSQL, MongoDB',
    'about.item4': 'Productive use of AI: Claude, ChatGPT and GitHub Copilot',
    'skills.title': 'Skills',
    'skills.react': 'React & React Native',
    'skills.javascript': 'JavaScript (ES6+)',
    'skills.htmlcss': 'HTML5 & CSS3',
    'skills.backend': 'Node.js & Django',
    'skills.databases': 'MySQL, PostgreSQL, MongoDB & SQL Server',
    'skills.tools': 'Git, Figma & Agile Methodologies',
    'skills.ai': 'Applied AI (Claude, ChatGPT, Copilot)',
    'skills.deploy': 'Netlify, GitHub & Deployment',
    'skills.advanced': 'Advanced',
    'skills.intermediate': 'Intermediate',
    'projects.title': 'Projects',
    'projects.search': 'Search projects...',
    'projects.filter.all': 'All',
    'projects.filter.frontend': 'Frontend',
    'projects.filter.backend': 'Backend',
    'projects.filter.fullstack': 'Fullstack',
    'project1.title': 'Esoteric Market - Online Store',
    'project1.problem': 'Problem:',
    'project1.problemDesc': 'Esoteric store needed web presence to showcase products and expand their market.',
    'project1.solution': 'Solution:',
    'project1.solutionDesc': 'Static website with mystical and elegant design, product catalog with filters and contact form.',
    'project1.impact': 'Impact:',
    'project1.impactDesc': 'Responsive and optimized website that reflects brand identity. Increased online reach.',
    'project2.title': 'Snake Game - Classic Arcade',
    'project2.problem': 'Problem:',
    'project2.problemDesc': 'Personal project to practice game logic and DOM manipulation.',
    'project2.solution': 'Solution:',
    'project2.solutionDesc': 'Classic snake game with vanilla JavaScript. Includes scoring system, difficulty levels and responsive controls.',
    'project2.impact': 'Impact:',
    'project2.impactDesc': 'Functional game with robust logic. Excellent practice in object-oriented programming.',
    'project3.title': 'Nerissa - Women\'s Clothing Store',
    'project3.problem': 'Problem:',
    'project3.problemDesc': 'Women\'s clothing brand needed professional online store with integrated payment system.',
    'project3.solution': 'Solution:',
    'project3.solutionDesc': 'Complete e-commerce on Shopify with custom design, product catalog, shopping cart and payment gateway.',
    'project3.impact': 'Impact:',
    'project3.impactDesc': 'Store in production with active sales. Optimized shopping experience and automated inventory management.',
    'project4.title': '360° Virtual Tour - Real Estate',
    'project4.problem': 'Problem:',
    'project4.problemDesc': 'Real estate agency needed an immersive way to showcase properties without requiring in-person visits.',
    'project4.solution': 'Solution:',
    'project4.solutionDesc': 'React app with integrated 360° viewer, reusable components and smooth navigation between rooms.',
    'project4.impact': 'Impact:',
    'project4.impactDesc': 'Immersive experience deployed in production that lets clients tour properties virtually, expanding the agency\'s commercial reach.',
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
    'experience1.title': 'Software Development Intern · Tecnoparque SENA Medellín',
    'experience1.period': '2025 – 2026',
    'experience1.description': 'Fullstack technology solutions development. Technical leadership in 3 of 5 projects, covering architecture, frontend, backend and database in each one.',
    'experience1.achievement1': 'IoT agricultural monitoring system with React + Node.js: real-time visualization of physical sensor data, relational data model and ingestion endpoints',
    'experience1.achievement2': 'Forum-type web application with Django and MySQL from scratch: authentication, publication management and deployment to test environment',
    'experience1.achievement3': 'Mobile applications with React Native integrated with Node.js APIs, executing the full cycle under agile methodologies',
    'experience1.achievement4': 'Database modeling and administration in MySQL, PostgreSQL, SQL Server and MongoDB by use case',
    'experience2.title': 'Freelance Web Developer — Medellín, Antioquia',
    'experience2.period': '2023 – 2025',
    'experience2.description': 'Web solutions for 5 local businesses managing the full cycle: requirements gathering, proposal, development, testing and delivery.',
    'experience2.achievement1': '5 projects delivered with HTML, CSS, Bootstrap and JavaScript, with direct client relationship',
    'experience2.achievement2': 'Responsive design implemented in 100% of projects, ensuring functionality on mobile and desktop',
    'experience2.achievement3': 'Direct client management: meetings, adjustments and post-delivery support',
    'experience2.achievement4': 'Live portfolio: portafoliosgd.netlify.app',
    'education.title': 'Education',
    'education1.title': 'Technology in Software Analysis and Development',
    'education1.period': '2023 – 2026',
    'education2.title': 'Technical Degree in Software Development Assistant',
    'education2.period': '2023 – 2024',
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
    'nav.education': 'Formação',
    'nav.contact': 'Contato',
    'nav.cv': 'Baixar CV',
    'hero.role': 'Desenvolvedor FullStack',
    'hero.greeting': 'Olá, sou',
    'hero.available': 'Disponível',
    'hero.fullDescription': 'Tecnólogo em Análise e Desenvolvimento de Software. Construo aplicações web e móveis end-to-end: React, Node.js, Django, bancos de dados e implantação',
    'hero.btn.projects': 'Ver projetos em destaque',
    'hero.btn.contact': 'Vamos falar sobre seu projeto',
    'about.title': 'Sobre mim',
    'about.description': 'Tecnólogo em Análise e Desenvolvimento de Software com experiência comprovada construindo aplicações web e móveis end-to-end: frontend, backend, bancos de dados relacionais e NoSQL, e integração de serviços. Liderei tecnicamente 3 de 5 projetos no Tecnoparque SENA, cobrindo desde a modelagem de dados até a implantação.',
    'about.description2': 'Combino critério de cliente —desenvolvido em 2 anos como freelancer— com velocidade de aprendizado e uso intensivo de ferramentas de IA para acelerar entregas.',
    'about.item1': 'Desenvolvimento fullstack: React/React Native, Node.js, Django',
    'about.item2': 'Liderança técnica em projetos multidisciplinares',
    'about.item3': 'Modelagem e administração de BD: MySQL, PostgreSQL, MongoDB',
    'about.item4': 'Uso produtivo de IA: Claude, ChatGPT e GitHub Copilot',
    'skills.title': 'Habilidades',
    'skills.react': 'React & React Native',
    'skills.javascript': 'JavaScript (ES6+)',
    'skills.htmlcss': 'HTML5 & CSS3',
    'skills.backend': 'Node.js & Django',
    'skills.databases': 'MySQL, PostgreSQL, MongoDB & SQL Server',
    'skills.tools': 'Git, Figma & Metodologias Ágeis',
    'skills.ai': 'IA Aplicada (Claude, ChatGPT, Copilot)',
    'skills.deploy': 'Netlify, GitHub & Implantação',
    'skills.advanced': 'Avançado',
    'skills.intermediate': 'Intermediário',
    'projects.title': 'Projetos',
    'projects.search': 'Pesquisar projetos...',
    'projects.filter.all': 'Todos',
    'projects.filter.frontend': 'Frontend',
    'projects.filter.backend': 'Backend',
    'projects.filter.fullstack': 'Fullstack',
    'project1.title': 'Mercado Esotérico - Loja Online',
    'project1.problem': 'Problema:',
    'project1.problemDesc': 'Loja esotérica precisava de presença web para mostrar produtos e expandir seu mercado.',
    'project1.solution': 'Solução:',
    'project1.solutionDesc': 'Site estático com design místico e elegante, catálogo de produtos com filtros e formulário de contato.',
    'project1.impact': 'Impacto:',
    'project1.impactDesc': 'Site responsivo e otimizado que reflete a identidade da marca. Aumento do alcance online.',
    'project2.title': 'Snake Game - Jogo da Cobrinha',
    'project2.problem': 'Problema:',
    'project2.problemDesc': 'Projeto pessoal para praticar lógica de jogos e manipulação do DOM.',
    'project2.solution': 'Solução:',
    'project2.solutionDesc': 'Jogo clássico da cobra com JavaScript vanilla. Inclui sistema de pontuação, níveis de dificuldade e controles responsivos.',
    'project2.impact': 'Impacto:',
    'project2.impactDesc': 'Jogo funcional com lógica robusta. Excelente prática de programação orientada a objetos.',
    'project3.title': 'Nerissa - Loja de Roupa Feminina',
    'project3.problem': 'Problema:',
    'project3.problemDesc': 'Marca de roupa feminina precisava de loja online profissional com sistema de pagamentos integrado.',
    'project3.solution': 'Solução:',
    'project3.solutionDesc': 'E-commerce completo no Shopify com design personalizado, catálogo de produtos, carrinho de compras e gateway de pagamento.',
    'project3.impact': 'Impacto:',
    'project3.impactDesc': 'Loja em produção com vendas ativas. Experiência de compra otimizada e gestão de inventário automatizada.',
    'project4.title': 'Tour Virtual 360° - Imobiliária',
    'project4.problem': 'Problema:',
    'project4.problemDesc': 'Imobiliária precisava mostrar propriedades de forma imersiva sem exigir visitas presenciais.',
    'project4.solution': 'Solução:',
    'project4.solutionDesc': 'Aplicativo React com visualizador 360° integrado, componentes reutilizáveis e navegação fluida entre cômodos do imóvel.',
    'project4.impact': 'Impacto:',
    'project4.impactDesc': 'Experiência imersiva implantada em produção que permite visitar propriedades virtualmente, ampliando o alcance comercial da imobiliária.',
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
    'experience1.title': 'Estagiário em Desenvolvimento de Software · Tecnoparque SENA Medellín',
    'experience1.period': '2025 – 2026',
    'experience1.description': 'Desenvolvimento de soluções tecnológicas com cobertura fullstack. Liderança técnica em 3 de 5 projetos, cobrindo arquitetura, frontend, backend e banco de dados em cada um.',
    'experience1.achievement1': 'Sistema de monitoramento agrícola IoT com React + Node.js: visualização em tempo real de dados de sensores físicos, modelo de dados relacional e endpoints de ingestão',
    'experience1.achievement2': 'Aplicação web tipo fórum com Django e MySQL do zero: autenticação, gestão de publicações e implantação em ambiente de testes',
    'experience1.achievement3': 'Aplicações móveis com React Native integradas com APIs Node.js, executando o ciclo completo sob metodologias ágeis',
    'experience1.achievement4': 'Modelagem e administração de bancos de dados em MySQL, PostgreSQL, SQL Server e MongoDB por caso de uso',
    'experience2.title': 'Desenvolvedor Web Freelance — Medellín, Antíoquia',
    'experience2.period': '2023 – 2025',
    'experience2.description': 'Soluções web para 5 empreendimentos locais gerenciando o ciclo completo: levantamento de requisitos, proposta, desenvolvimento, testes e entrega.',
    'experience2.achievement1': '5 projetos entregues com HTML, CSS, Bootstrap e JavaScript, com relacionamento direto com o cliente',
    'experience2.achievement2': 'Design responsivo implementado em 100% dos projetos, garantindo funcionamento em móvel e desktop',
    'experience2.achievement3': 'Gestão direta do cliente: reuniões, ajustes e suporte pós-entrega',
    'experience2.achievement4': 'Portfólio ao vivo: portafoliosgd.netlify.app',
    'education.title': 'Formação',
    'education1.title': 'Tecnologia em Análise e Desenvolvimento de Software',
    'education1.period': '2023 – 2026',
    'education2.title': 'Técnico em Assistente de Desenvolvimento de Software',
    'education2.period': '2023 – 2024',
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
    duration: 600,
    offset: 80,
    once: true,
    easing: 'ease-out',
    disable: 'mobile'
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
