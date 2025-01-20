# red-social-post-comentarios-jquery
Estructura del Proyecto
El proyecto se organiza en las siguientes carpetas y archivos:

/proyecto-social
│
├── index.html           # Página principal que carga la aplicación
├── css
│   └── styles.css       # Estilos de la aplicación
├── js
│   └── app.js           # Lógica de la aplicación escrita en JavaScript
└── README.md            # Este archivo con la documentación
1. index.html
Este archivo contiene la estructura básica de la aplicación y enlaza con los archivos CSS y JavaScript necesarios. En este archivo se presenta la interfaz de usuario con los elementos donde los usuarios pueden interactuar.

2. css/styles.css
Archivo donde se definen los estilos visuales para la página. Se incluyen reglas de diseño como el estilo de las publicaciones, comentarios y botones.

3. js/app.js
Este archivo contiene la lógica de la aplicación escrita en JavaScript. A través de jQuery, se manejan los eventos (clics, adiciones de publicaciones y comentarios, eliminación de elementos) y se actualiza el DOM para reflejar los cambios.

Funcionalidades
Agregar Publicaciones: Los usuarios pueden crear nuevas publicaciones con un título y un contenido. Al hacer clic en el botón "Crear publicación", la publicación se agrega a la lista de publicaciones en la interfaz.

Ver Comentarios: Cada publicación tiene un botón para mostrar u ocultar los comentarios asociados. Los comentarios son dinámicamente cargados a través de JavaScript y jQuery.

Agregar Comentarios: Los usuarios pueden agregar nuevos comentarios a cualquier publicación. Al ingresar un comentario y hacer clic en "Añadir comentario", el comentario se agrega a la lista correspondiente bajo la publicación.

Eliminar Publicaciones: Las publicaciones pueden ser eliminadas haciendo clic en el icono de la papelera.

Eliminar Comentarios: Los comentarios pueden ser eliminados de manera similar, haciendo clic en el icono de la papelera junto a cada comentario.
