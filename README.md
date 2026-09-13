# La Pequeña Habana — Menú Virtual Interactivo

[![React](https://img.shields.io/badge/React-19.x-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-f08?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

Menú virtual, interactivo y de alta fidelidad visual desarrollado para **La Pequeña Habana**, restaurante de gastronomía tradicional cubana ubicado en Ciudad de Guatemala. 

La aplicación fue concebida con una arquitectura frontend limpia e intuitiva inspirada en la experiencia de navegación de catálogos gastronómicos, integrando la identidad visual y cultural de Cuba, precios en Quetzales, filtrado reactivo en tiempo real y enlaces de contacto directo.

---

## Características Principales

- **Identidad y Estética Cubana:**
  - Paleta de colores inspirada en la bandera cubana: Azul profundo (`#111942`), Rojo carmesí (`#d61327`), Blanco cálido (`#fcfafa`) y acentos dorados.
  - Marca de agua difuminada de la bandera de Cuba en el encabezado.
  - Tipografías combinadas: *Quintessential*, *Old Standard TT* y *Plus Jakarta Sans*.

- **Navegación por Categorías (Sticky):**
  - Barra de categorías horizontal que permanece fija al desplazarse por el menú.
  - Filtro dinámico con contador de platillos por categoría (*Platos Fuertes, Sándwiches, Entradas, Guarniciones, Postres, Bebidas*).
  - Indicador animado deslizante con **Framer Motion** (`layoutId="categoryPill"`).

- **Buscador en Tiempo Real:**
  - Búsqueda instantánea que filtra tanto por nombre del platillo como por ingredientes y etiquetas (ej. *"Ropa Vieja"*, *"Mojo"*, *"Sin Gluten"*).

- **Animación en Cascada (*Staggered Fade-Up*):**
  - Transición fluida y ordenada en la cuadrícula de platillos al filtrar o buscar, sin tirones ni desplazamientos diagonales bruscos.

- **Modal de Detalle Responsivo (Radix UI + Motion):**
  - **En Computadora:** Diseño editorial a dos columnas (fotografía a la izquierda e información culinaria completa a la derecha sin necesidad de hacer scroll vertical).
  - **En Móviles:** Adaptación vertical fluida de una sola columna.
  - Contiene: porción sugerida, tiempo estimado de preparación, desglose detallado de ingredientes criollos y recomendación de maridaje del Chef.

- **Integración Multiplataforma:**
  - **WhatsApp Directo:** Botón de consulta dentro de cada platillo con mensaje prellenado que incluye el nombre del plato y su precio en Quetzales.
  - **Encuéntranos:** Enlace directo con geolocalización hacia Google Maps.
  - **Redes Sociales:** Conexión directa a los perfiles oficiales de Instagram y Facebook.

---

## Stack Tecnológico

| Tecnología | Rol en el Proyecto |
| :--- | :--- |
| **React 19** | Biblioteca principal de interfaz de usuario |
| **TypeScript** | Tipado estricto para modelos de datos y componentes |
| **Vite** | Entorno de desarrollo ultrarrápido y empaquetador de producción |
| **Tailwind CSS v4** | Sistema de diseño y estilos utilitarios modernos con variables CSS |
| **Radix UI Dialog** | Primitiva accesible para ventanas modales (gestión de foco, teclado y scroll) |
| **Framer Motion** | Orquestación de animaciones en cascada y microinteracciones |
| **Lucide React** | Iconografía vectorial optimizada |

---

## Estructura del Proyecto

```text
Menu-virtual-LaPequena-Habana/
├── public/
│   └── images/                     # Fotografías de platillos, bebidas y bandera
├── src/
│   ├── components/
│   │   ├── CategoryNav.tsx         # Barra horizontal sticky de categorías
│   │   ├── DishCard.tsx            # Tarjeta interactiva del platillo
│   │   ├── DishModal.tsx           # Modal responsivo de detalle (Radix UI)
│   │   ├── Footer.tsx              # Pie de página con horarios, mapa y redes
│   │   ├── Header.tsx              # Encabezado, buscador y accesos rápidos
│   │   ├── HeroBanner.tsx          # Bienvenida con temática habanera
│   │   └── WhatsAppFloatingButton.tsx # Botón flotante de contacto
│   ├── data/
│   │   ├── categories.ts           # Definición de categorías e iconos
│   │   └── dishes.json             # Catálogo de platillos, precios e ingredientes
│   ├── lib/
│   │   └── utils.ts                # Utilidades de Tailwind y generadores WhatsApp
│   ├── types/
│   │   └── menu.ts                 # Interfaces TypeScript del catálogo
│   ├── App.tsx                     # Componente raíz y orquestador de filtros
│   ├── index.css                   # Importación de Tailwind y fuentes personalizadas
│   └── main.tsx                    # Punto de entrada de la aplicación
├── index.html                      # Inclusión de Google Fonts y metadatos SEO
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Instalación y Uso Local

### Prerrequisitos
- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
- npm o yarn

### Pasos
1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Pxdro-410/Menu-virtual-LaPequena-Habana.git
   cd Menu-virtual-LaPequena-Habana
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver el resultado en tiempo real.

4. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Los archivos optimizados para producción se generarán en la carpeta `dist/`.

---

## Cómo Modificar o Agregar Nuevos Platillos

Toda la información del menú está desacoplada de la interfaz en el archivo:
`src/data/dishes.json`

Cada elemento sigue esta estructura:

```json
{
  "id": "ropa-vieja",
  "name": "Ropa Vieja Habanera Insignia",
  "category": "platos-fuertes",
  "price": 88.00,
  "description": "Falda de res deshebrada a fuego lento en salsa criolla...",
  "image": "/images/ropa_vieja.jpg",
  "badge": "Platillo Insignia",
  "badgeType": "red",
  "prepTime": "15-20 min",
  "portion": "1 Persona generosa",
  "ingredients": [
    "Falda de res selecta",
    "Sofrito criollo tradicional",
    "Arroz blanco y frijoles negros"
  ],
  "tags": ["Especialidad", "Carne", "Sin Gluten"],
  "isPopular": true,
  "pairing": "Recomendamos maridar con un Mojito Clásico."
}
```

Para añadir un nuevo plato, simplemente agrega un nuevo objeto al arreglo `dishes.json` y coloca su fotografía en `public/images/`.

---

## Autor

Desarrollado con dedicación por **[Pedro J. Caso](https://github.com/Pxdro-410)**.
