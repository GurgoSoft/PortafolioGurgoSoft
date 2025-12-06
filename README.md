# 🚀 Portafolio Personal - Santiago Gómez

Portafolio profesional de desarrollador web Full Stack optimizado para rendimiento, responsividad y experiencia de usuario excepcional.

## ✨ Características Principales

### 🎨 Diseño
- **Responsive Design**: Perfectamente adaptado para móviles, tablets y desktop
- **Modo Claro/Oscuro**: Cambio de tema con persistencia en localStorage
- **Animaciones Fluidas**: AOS (Animate On Scroll) + animaciones personalizadas
- **Efectos Hover**: Interacciones visuales profesionales en todos los elementos
- **Scroll Progress Bar**: Barra de progreso superior que indica posición en página

### 🌍 Internacionalización
- **Sistema de Traducción Personalizado**: NO usa Google Translate
- **3 Idiomas**: Español, English, Português
- **Selector Elegante**: Dropdown con banderas y diseño moderno
- **Persistencia**: Guarda idioma preferido del usuario
- **Traducciones Dinámicas**: Todo el contenido se traduce incluyendo animaciones

### 🔧 Funcionalidades Avanzadas
- **Animación de Tipeo**: Efecto máquina de escribir en hero section
- **Contadores Animados**: Estadísticas con animación al hacer scroll
- **Filtrado de Proyectos**: Búsqueda en tiempo real con debouncing
- **Navegación Inteligente**: Scroll suave y destacado automático de sección activa
- **Formulario de Contacto**: Validación HTML5 con feedback visual profesional
- **Lazy Loading**: Carga diferida de imágenes para mejor rendimiento

### ⚡ Optimizaciones
- **Performance**: RequestAnimationFrame para animaciones @ 60fps
- **SEO Optimizado**: Meta tags completos, keywords, Open Graph
- **Accesibilidad**: ARIA labels completos y navegación por teclado
- **Cache**: Configuración .htaccess para mejor carga
- **Sin Dependencias Pesadas**: Traducción propia sin APIs externas

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica moderna
- **CSS3**: Variables CSS, Flexbox, Grid, Animaciones
- **JavaScript ES6+**: Funcionalidades modernas sin frameworks
- **Bootstrap 5.3**: Sistema de grid y componentes UI
- **Bootstrap Icons**: Iconografía profesional
- **AOS Library**: Animaciones on scroll
- **Inter Font**: Tipografía profesional de Google Fonts

## 📱 Responsividad Total

El sitio está optimizado para:
- **Mobile Small**: < 576px (iPhone SE, etc.)
- **Mobile**: 576px - 767px
- **Tablet**: 768px - 991px
- **Desktop**: > 992px
- **4K**: > 1920px

### Características responsive:
✅ Tipografía fluida con `clamp()`
✅ Espaciado adaptativo con variables CSS
✅ Imágenes optimizadas y lazy loading
✅ Navbar colapsable con diseño mobile-first
✅ Grid system 100% adaptativo
✅ Sin overflow horizontal en ningún dispositivo
✅ Touch targets mínimo 44x44px (estándar WCAG)

## 🎯 Mejoras UX Implementadas

### ❌ Antes (Google Translate)
- Widget genérico y feo
- Diseño inconsistente
- Muchos idiomas innecesarios
- Experiencia pobre

### ✅ Ahora (Sistema Propio)
- Dropdown elegante con banderas
- Diseño totalmente personalizado
- Solo 3 idiomas relevantes
- Transiciones suaves
- Persistencia de preferencias
- Cero dependencias externas

## 🚀 Instalación y Uso

### Opción 1: Servidor Local
```bash
# Navegar al directorio
cd PortafolioGurgoSoft

# Abrir con Live Server (VS Code) o cualquier servidor local
# O simplemente abrir index.html en el navegador
```

### Opción 2: Despliegue
Subir a cualquier hosting web (Netlify, Vercel, GitHub Pages, etc.)

## 📝 Personalización

### 1. Información Personal
Edita `index.html` y modifica:
- Nombre y título
- Enlaces a redes sociales
- Proyectos y experiencia
- Información de contacto

### 2. Colores y Tema
En `style.css`, modifica las variables CSS:
```css
:root {
  --accent: #0d6efd;  /* Color principal */
  --bg-soft: rgba(255,255,255,.04);
  /* ... más variables */
}
```

### 3. Formulario de Contacto
Reemplaza el endpoint de Formspree en `index.html`:
```html
<form action="https://formspree.io/f/TU_ID_AQUI">
```

## 📊 Mejoras Implementadas

### Responsividad
✅ Media queries para todos los tamaños de pantalla
✅ Tipografía fluida y escalable
✅ Imágenes adaptativas
✅ Espaciado responsive
✅ Navbar mobile optimizado

### Funcionalidad
✅ Debouncing en búsqueda (300ms)
✅ Throttling en scroll events (100ms)
✅ Lazy loading de imágenes
✅ Cierre automático de navbar mobile
✅ Parallax sutil en hero
✅ Validación de formulario mejorada
✅ Feedback visual en envío

### Performance
✅ RequestAnimationFrame para animaciones
✅ Listeners con `passive: true`
✅ Optimización de re-renders
✅ Cache configurado en .htaccess
✅ Compresión GZIP

## 🔍 SEO

- Meta tags completos
- Open Graph para redes sociales
- Descripciones alt en imágenes
- Estructura semántica HTML5
- URLs amigables

## 🎯 Puntuación Lighthouse (Esperada)

- **Performance**: 90-100
- **Accessibility**: 95-100
- **Best Practices**: 95-100
- **SEO**: 95-100

## 📧 Contacto

- **Email**: Sgomezd28@gmail.com
- **GitHub**: [GurgoSoft](https://github.com/GurgoSoft)
- **LinkedIn**: [Tu perfil](https://www.linkedin.com/in/tuusuario)

## 📄 Licencia

© 2025 Santiago Gómez. Todos los derechos reservados.

---

**Desarrollado con ❤️ por Santiago Gómez**
