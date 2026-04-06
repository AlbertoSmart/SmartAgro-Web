# 🌾 SmartAgro Web

Plataforma digital integral de **Smart Fénix** especializada en **agricultura de precisión**. Sitio web corporativo y portal de servicios construido con Astro, que integra asesoramiento virtual mediante inteligencia artificial.

## 📋 Descripción del Proyecto

SmartAgro Web es una solución completa para agricultores y profesionales del sector agrícola que buscan optimizar sus operaciones mediante tecnología de precisión. La plataforma proporciona:

- **Asesoramiento IA**: Chatbot inteligente basado en Google Generative AI para consultas técnicas
- **Catálogo de Sensores**: Para monitoreo de suelo, planta y condiciones ambientales
- **Soluciones por Cultivo**: Estrategias específicas para olivo, almendro, frutales y otros
- **Cuaderno Digital SIEX**: Herramienta para normativa y cumplimiento regulatorio
- **Blog Técnico**: Artículos y recursos educativos
- **Gestión de Eventos**: Información de jornadas técnicas y capacitaciones
- **Panel Administrativo**: Para gestión de contenidos y categorías

## 🛠 Tecnologías Utilizadas

- **Framework**: Astro 6.0.5 - Generador de sitios estáticos moderno
- **Runtime**: Node.js (>=22.12.0) - Servidor de aplicaciones
- **IA**: Google Generative AI (@google/generative-ai) - Chatbot inteligente
- **Servidor**: @astrojs/node - Adapter para ejecución en servidor
- **TypeScript**: Para tipado seguro del código

## 📁 Estructura del Proyecto

```
smartagro_web/
├── src/
│   ├── pages/               # Rutas principales del sitio
│   │   ├── index.astro      # Página de inicio
│   │   ├── soluciones.astro # Soluciones por cultivo
│   │   ├── sensores.astro   # Catálogo de sensores
│   │   ├── blog.astro       # Blog técnico
│   │   ├── eventos.astro    # Gestión de eventos
│   │   ├── cuaderno.astro   # Cuaderno SIEX
│   │   ├── contacto.astro   # Formulario de contacto
│   │   ├── guia-sensores.astro # Guía técnica de sensores
│   │   ├── herramientas.astro # Herramientas
│   │   ├── sinergias.astro  # Información de sinergias
│   │   ├── idi.astro        # I+D+i
│   │   ├── ayudas.astro     # Ayudas y subvenciones
│   │   ├── noticias.astro   # Noticias
│   │   ├── api/
│   │   │   └── chat.ts      # Endpoint de API para chatbot
│   │   └── admin/           # Panel administrativo
│   ├── components/          # Componentes reutilizables
│   │   ├── AIChatbot.astro  # Chatbot con IA
│   │   ├── SensorCarousel.astro
│   │   ├── SensorCatalog.astro
│   │   ├── BlogSection.astro
│   │   ├── EventsCarousel.astro
│   │   ├── FeatureCards.astro
│   │   ├── Hero.astro
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   └── ... otros componentes
│   ├── layouts/             # Layouts reutilizables
│   │   ├── Layout.astro     # Layout principal
│   │   └── TestPage.astro
│   ├── data/                # Datos estáticos
│   │   ├── blogPosts.json
│   │   └── categories.json
│   ├── lib/                 # Librerías y utilidades
│   │   └── blog.ts
│   ├── assets/              # Assets estáticos
│   └── styles/              # Estilos CSS
├── public/
│   ├── css/
│   │   └── global.css
│   └── images/              # Imágenes organizadas por sección
├── Sensores/                # Documentación de sensores
├── package.json
├── astro.config.mjs
├── tsconfig.json
└── README.md
```

## 🚀 Inicio Rápido

### Requisitos Previos
- Node.js >= 22.12.0
- npm o yarn

### Instalación

```sh
# Instalar dependencias
npm install
```

### Desarrollo

```sh
# Inicia el servidor de desarrollo con hot reload
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

### Producción

```sh
# Construir el proyecto para producción
npm run build

# Previsualizar la construcción
npm run preview

# Ejecutar comando de Astro directamente
npm run astro
```

## 🤖 Chatbot IA

El proyecto incluye un chatbot inteligente integrado que:

- **Motor**: Google Generative AI
- **Ubicación**: Componente `AIChatbot.astro`
- **API**: Endpoint `/api/chat` 
- **Especialización**: Agricultura de precisión, sensores, normativa SIEX
- **Conocimiento Base**: Respuestas personalizadas para consultas frecuentes sobre:
  - Sensores de suelo y planta
  - Soluciones por cultivo
  - Cuaderno SIEX y normativa
  - Servicios técnicos

## 📊 Características Principales

### 1. **Catálogo de Sensores**
- Sensores de humedad y temperatura
- Sensores ópticos (dendrómetros)
- Sensores de pH
- Sensores NPK
- Sensores de CO₂ disuelto
- Información técnica detallada
- Documentación técnica en carpeta `/Sensores`

### 2. **Soluciones por Cultivo**
- Estrategias específicas para cada tipo de cultivo
- Recomendaciones basadas en datos
- Integración con sensores

### 3. **Blog Técnico**
- Artículos sobre agricultura de precisión
- Casos de éxito
- Guías técnicas
- Gestión de categorías y posts

### 4. **Panel Administrativo**
- Gestión de posts del blog
- Gestión de categorías
- Dashboard de control
- Sistema de login

### 5. **Herramientas**
- Calculadora ROI
- Otras utilidades técnicas

## 🔧 Configuración

### Astro Config (`astro.config.mjs`)
- **Modo**: Server-side rendering
- **Adapter**: Node.js (standalone mode)
- **Output**: server

Esta configuración permite:
- Renderizado dinámico en el servidor
- Soporte para rutas dinámicas
- APIs del lado del servidor

## 📦 Dependencies

| Dependencia | Versión | Propósito |
|---|---|---|
| astro | ^6.0.5 | Framework principal |
| @astrojs/node | ^10.0.3 | Adapter para Node.js |
| @google/generative-ai | ^0.24.1 | IA para chatbot |
| @types/node | ^25.5.0 | Tipos de TypeScript |

## 📝 Scripts NPM

```json
{
  "dev": "astro dev",           // Desarrollo local
  "build": "astro build",       // Construcción para producción
  "preview": "astro preview",   // Previsualizar build
  "astro": "astro"              // CLI de Astro
}
```

## 🌐 Páginas Principales

| Ruta | Descripción |
|---|---|
| `/` | Página de inicio |
| `/soluciones` | Soluciones por cultivo |
| `/sensores` | Catálogo de sensores |
| `/guia-sensores` | Guía técnica detallada |
| `/blog` | Blog técnico |
| `/eventos` | Eventos y jornadas |
| `/cuaderno` | Herramienta Cuaderno SIEX |
| `/contacto` | Formulario de contacto |
| `/herramientas` | Herramientas técnicas |
| `/sinergias` | Información de sinergias |
| `/idi` | I+D+i |
| `/ayudas` | Ayudas y subvenciones |
| `/noticias` | Noticias |

## 👥 Panel Administrativo

Acceso en `/admin` con funcionalidades:
- `/admin/login` - Autenticación
- `/admin/dashboard` - Panel principal
- `/admin/nuevo-post` - Crear nuevo artículo
- `/admin/editar-post` - Editar artículos existentes
- `/admin/categorias` - Gestión de categorías

## 🔐 Variables de Entorno

Para usar el chatbot IA, se necesita configurar:
- `GOOGLE_GENERATIVE_API_KEY` - Clave API de Google Generative AI

## 📚 Documentación Adicional

- **Documentación de Sensores**: Ver carpeta `/Sensores` con especificaciones técnicas
- **Componentes**: Ver archivos en `src/components/`
- **Datos**: Archivos JSON en `src/data/`

## 🎯 Objetivo del Proyecto

Proporcionar a agricultores y profesionales del sector una plataforma integral que combine:
- Información técnica especializada
- Asesoramiento basado en IA
- Herramientas digitales modernas
- Soluciones personalizadas por cultivo

## 📄 Licencia

Proyecto propietario de Smart Fénix.

## 📧 Contacto

Para consultas técnicas o comerciales, visita `/contacto`
