# Portafolio Profesional - Santiago Gómez

Portafolio web de Frontend Developer optimizado para rendimiento, accesibilidad y experiencia de usuario. Desarrollado con tecnologías modernas y enfoque mobile-first.

## Descripción

Sitio web profesional que presenta mi experiencia como Frontend Developer especializado en React, React Native y JavaScript. El portafolio está diseñado para atraer reclutadores técnicos y empresas de desarrollo, destacando proyectos con impacto medible, liderazgo técnico y stack tecnológico actualizado.

## Stack Tecnológico

### Frontend
- HTML5 (Estructura semántica)
- CSS3 (Variables CSS, Flexbox, Grid, Animaciones)
- JavaScript ES6+ (Vanilla JS, sin frameworks)
- Bootstrap 5.3 (Sistema de componentes y grid responsivo)

### Características Técnicas
- Sistema de traducción personalizado (ES, EN, PT)
- Tema claro/oscuro con persistencia en localStorage
- Animaciones on scroll (AOS Library)
- Lazy loading de imágenes
- Validación de formularios HTML5
- SEO optimizado con meta tags y Open Graph
- Accesibilidad WCAG 2.1 (ARIA labels, navegación por teclado)

### Dependencias
- Bootstrap 5.3.3
- Bootstrap Icons 1.11.3
- AOS (Animate On Scroll) 2.3.4
- Google Fonts (Inter)

## Arquitectura del Proyecto

```
PortafolioGurgoSoft/
├── index.html          # Estructura principal del sitio
├── style.css           # Estilos personalizados y variables CSS
├── portafolio.js       # Lógica de interacción y sistema de traducción
├── README.md           # Documentación
└── img/                # Recursos de imágenes
    ├── perfil.png
    ├── principal.jpg
    ├── frontColegio.jpeg
    ├── barber.png
    └── Snake.png
```

## Características Principales

### Diseño Responsivo
- Breakpoints optimizados para mobile, tablet, desktop y 4K
- Tipografía fluida con función clamp()
- Grid system 100% adaptativo
- Navbar colapsable mobile-first
- Touch targets de mínimo 44x44px (estándar WCAG)
- Sin overflow horizontal en ningún dispositivo

### Sistema de Internacionalización
- Implementación propia sin dependencias externas
- Soporte para 3 idiomas (Español, English, Português)
- Persistencia de preferencia de idioma en localStorage
- Traducciones dinámicas de todo el contenido
- Interfaz de selector integrada en el diseño

### Optimizaciones de Rendimiento
- RequestAnimationFrame para animaciones a 60fps
- Debouncing en búsqueda de proyectos (300ms)
- Throttling en scroll events (100ms)
- Event listeners con flag passive: true
- Lazy loading de imágenes para optimizar carga inicial
- Minimización de re-renders en DOM

### SEO y Accesibilidad
- Meta tags completos: título, descripción, keywords
- Open Graph para compartir en redes sociales
- Estructura HTML5 semántica
- Atributos alt descriptivos en todas las imágenes
- ARIA labels para navegación asistida
- Contraste de colores conforme a WCAG AA

## Secciones del Portafolio

### Hero Section
Presentación con rol profesional, tagline optimizado y llamadas a la acción estratégicas.

### Sobre Mí
Descripción de perfil profesional con énfasis en:
- Experiencia en React, React Native y JavaScript
- Liderazgo técnico en proyectos innovadores
- Visión integral desde diseño hasta deployment

### Habilidades Técnicas
Stack principal con niveles de competencia:
- React & React Native (Avanzado - 85%)
- JavaScript ES6+ (Avanzado - 80%)
- HTML5 & CSS3 (Avanzado - 90%)
- Node.js & Django (Intermedio - 70%)
- MySQL, MongoDB & SQL Server (Intermedio - 65%)
- Git, Figma & Metodologías Ágiles (Avanzado - 80%)

### Proyectos Destacados
Cada proyecto incluye estructura optimizada:
- Problema identificado
- Solución implementada
- Stack tecnológico utilizado
- Impacto medible o resultado obtenido

Proyectos destacados:
1. Sistema de Monitoreo Agrícola con IoT (React, Node.js, MongoDB)
2. Aplicación Móvil Multiplataforma (React Native, Node.js)
3. Plataforma Web Tipo Foro (Django, PostgreSQL)
4. Frontend para Gestión Educativa (HTML5, CSS3, JavaScript)
5. E-commerce Freelance (Django, MySQL)
6. Sistema Web para Barbería (HTML5, CSS3, Bootstrap)

### Experiencia Profesional
- Practicante Desarrollador Frontend - Tecnoparque SENA Medellín (2024-Actualidad)
  - Liderazgo técnico en 3 de 5 proyectos del programa
  - Desarrollo de sistemas IoT, aplicaciones móviles y plataformas web
  
- Desarrollador Frontend Freelance (2023-2024)
  - 8+ sitios web responsive desarrollados
  - Aplicaciones móviles con React Native
  - Diseño en Figma y gestión de clientes

### Contacto
Formulario de contacto funcional con validación y botones de acción directa (Email, WhatsApp, GitHub).

## Instalación y Despliegue

### Desarrollo Local

1. Clonar el repositorio:
```bash
git clone https://github.com/GurgoSoft/PortafolioGurgoSoft.git
cd PortafolioGurgoSoft
```

2. Abrir con servidor local:
```bash
# Con Live Server (VS Code extension)
# O cualquier servidor HTTP local

# Alternativa con Python
python -m http.server 8000

# Alternativa con Node.js
npx http-server
```

3. Acceder en navegador:
```
http://localhost:8000
```

### Despliegue en Producción

Compatible con cualquier servicio de hosting estático:
- Netlify
- Vercel
- GitHub Pages
- GitLab Pages
- Firebase Hosting

No requiere configuración especial de build ni variables de entorno.

## Personalización

### Información Personal
Editar archivo `index.html`:
- Líneas 6-14: Meta tags y título
- Líneas 75-85: Hero section (nombre y descripción)
- Líneas 100-110: Sección Sobre Mí
- Líneas 270-290: Experiencia profesional

### Temas y Colores
Modificar variables CSS en `style.css`:
```css
:root {
  --accent: #0d6efd;
  --bg-soft: rgba(255,255,255,.04);
  --transition-speed: 0.4s;
  --section-padding: 80px;
  --border-radius: 1rem;
}
```

### Traducciones
Actualizar objeto `translations` en `portafolio.js` (líneas 1-150) para modificar textos en los 3 idiomas soportados.

## Rendimiento Esperado (Lighthouse)

- Performance: 90-100
- Accessibility: 95-100
- Best Practices: 95-100
- SEO: 95-100

## Navegadores Soportados

- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Opera (últimas 2 versiones)

## Licencia

Copyright 2026 Santiago Gómez. Todos los derechos reservados.

## Contacto

- Email: Sgomezd28@gmail.com
- GitHub: [github.com/GurgoSoft](https://github.com/GurgoSoft)
- LinkedIn: [linkedin.com/in/santiago-gomez](https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile)
