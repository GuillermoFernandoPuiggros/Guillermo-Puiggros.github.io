# Portfolio Personal - Guillermo Puiggros

Portfolio web personal desarrollado con Jekyll y GitHub Pages. Un sitio moderno, ligero y completamente responsive que muestra mis proyectos, habilidades y experiencia profesional.

## 🌐 Demo

El sitio está disponible en: [GuillermoFernandoPuiggros.github.io](https://guillermofernandopuiggros.github.io)

## ✨ Características

- **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- **Totalmente Responsive**: Optimizado para dispositivos móviles, tablets y escritorio
- **Ligero y Rápido**: Construido con vanilla CSS y jQuery, sin dependencias pesadas
- **Secciones Incluidas**:
  - Landing page con presentación
  - Sobre mí (About)
  - Habilidades técnicas con barras de progreso
  - Proyectos destacados con filtros por categoría
  - Blog posts
  - Información de contacto

## 🛠️ Tecnologías Utilizadas

- **Jekyll**: Generador de sitios estáticos
- **HTML5/CSS3**: Grid y Flexbox para layouts modernos
- **JavaScript/jQuery**: Interactividad y animaciones
- **GitHub Pages**: Hosting gratuito

## 📦 Instalación y Configuración

### Requisitos Previos

- Ruby (versión 2.5 o superior)
- Bundler gem

### Pasos de Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/GuillermoFernandoPuiggros/GuillermoFernandoPuiggros.github.io.git
   cd GuillermoFernandoPuiggros.github.io
   ```

2. **Instalar dependencias**

   ```bash
   bundle install
   ```

3. **Configurar el sitio**

   Edita el archivo `_config.yml` con tu información personal:

   ```yaml
   title: Tu Nombre
   description: Tu Descripción Profesional
   site_title: '@tuusuario - Tu Nombre'
   github_username: tuusuario
   email: tu@email.com
   # ... más configuraciones
   ```

4. **Ejecutar localmente**

   ```bash
   bundle exec jekyll serve
   ```

   El sitio estará disponible en `http://localhost:4000`

5. **Desplegar en GitHub Pages**

   - Haz push de los cambios a la rama `main` o `gh-pages`
   - GitHub Pages se actualizará automáticamente
   - El sitio estará disponible en `https://tuusuario.github.io`

## 📁 Estructura del Proyecto

```text
.
├── _config.yml          # Configuración de Jekyll
├── _includes/           # Componentes reutilizables
│   ├── about.html       # Sección sobre mí
│   ├── skills.html      # Sección de habilidades
│   ├── projects.html    # Sección de proyectos
│   ├── blogs.html       # Sección de blog
│   └── ...
├── _layouts/            # Plantillas de layout
│   └── default.html     # Layout principal
├── assets/              # Recursos estáticos
│   ├── css/            # Estilos personalizados
│   ├── js/             # Scripts JavaScript
│   └── images/         # Imágenes del portfolio
├── index.html           # Página principal
└── README.md           # Este archivo
```

## 🎨 Personalización

### Agregar/Modificar Proyectos

Edita el archivo `assets/js/projects.js` y agrega tus proyectos en el array `projects_obj`:

```javascript
{
    image: 'assets/images/tu-imagen.png',
    link: 'https://github.com/tuusuario/tu-proyecto',
    title: 'Nombre del Proyecto',
    demo: 'https://demo-url.com', // o false si no hay demo
    technologies: ['React', 'Node.js', 'MongoDB'],
    description: 'Descripción de tu proyecto',
    categories: ['featured', 'webdev'] // featured, webdev, native, security, diy
}
```

### Modificar Habilidades

Edita `_includes/skills.html` para actualizar tus habilidades y niveles de competencia.

### Cambiar Estilos

Los archivos CSS principales están en `assets/css/`:

- `main.css`: Estilos principales
- `card.css`: Estilos de las tarjetas de proyectos
- `progress.css`: Estilos de las barras de progreso

## 📝 Licencia

Este proyecto está bajo la Licencia GPL. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si tienes sugerencias o encuentras algún problema, por favor abre un issue o envía un pull request.

## 📧 Contacto

Para más información, puedes contactarme a través de:

- GitHub: [@GuillermoFernandoPuiggros](https://github.com/GuillermoFernandoPuiggros)
- Email: (configurado en `_config.yml`)

---

⭐ Si te gusta este proyecto, considera darle una estrella en GitHub!
