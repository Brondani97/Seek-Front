========================================================
                        GESTOR DE TAREAS
========================================================

Este proyecto es una aplicación fullstack para la gestión de tareas desarrollada
como parte de un reto de codificación para el puesto de Fullstack Developer
(React + Python Serverless). La solución se compone de dos partes principales:

--------------------------------------------------------
                        FRONT-END
--------------------------------------------------------
La aplicación web se desarrolló en React y utiliza Material UI para una
interfaz moderna y responsiva. Las principales funcionalidades incluyen:
  - Visualización de tareas: Muestra una lista de tareas con título, descripción y estado.
  - Operaciones CRUD: Permite agregar, actualizar (cambiar estado) y eliminar tareas.
  - Gráficos: Visualiza la distribución de tareas según su estado.
  - Pruebas unitarias: Se realizaron pruebas unitarias para asegurar la calidad del código.

La aplicación front-end está desplegada en AWS S3 (con opción de CloudFront para distribución global).
URL Front-end: http://gestor-tareas-front.s3-website-sa-east-1.amazonaws.com/

--------------------------------------------------------
                        BACK-END
--------------------------------------------------------
El back-end se implementó en Python como funciones serverless utilizando AWS Lambda
y API Gateway, conectándose a una base de datos MongoDB (MongoDB Atlas). Las características incluyen:
  - CRUD para tareas: Funciones Lambda que implementan operaciones GET, POST, PUT y DELETE.
  - Autenticación simple: Se utiliza un token predefinido para proteger las operaciones de modificación.
  - Pruebas unitarias: Se desarrollaron pruebas con pytest para asegurar el correcto funcionamiento.
  - Documentación de la API: Se creó una especificación OpenAPI para documentar los endpoints.

El back-end está desplegado en AWS Lambda y expuesto a través de API Gateway.
URL Back-end: https://pqaq8er0d8.execute-api.sa-east-1.amazonaws.com/Prod/tasks

--------------------------------------------------------
                  DESPLIEGUE Y ARQUITECTURA
--------------------------------------------------------
- Front-end: Desplegado en AWS S3 (con opción de CloudFront).
- Back-end: Desplegado como funciones Lambda usando AWS SAM, integradas con API Gateway.
- Base de Datos: Utiliza MongoDB Atlas para almacenar las tareas.

========================================================
Este proyecto demuestra la capacidad de construir y desplegar una solución fullstack
utilizando tecnologías modernas y enfoques serverless en AWS, aplicando buenas prácticas
de desarrollo y pruebas.
========================================================
