Gestor de Tareas
Este proyecto es una aplicación fullstack para la gestión de tareas desarrollada como parte de un reto de codificación para el puesto de Fullstack Developer (React + Python Serverless). La solución se compone de dos partes:

Front-end
La aplicación web se desarrolló en React y utiliza Material UI para una interfaz moderna y responsiva. Las principales funcionalidades incluyen:

Visualización de tareas: Muestra una lista de tareas con su título, descripción y estado.

Operaciones CRUD: Permite agregar, actualizar (cambiar estado) y eliminar tareas.

Gráficos: Una vista de gráficos que visualiza la distribución de tareas según su estado.

Pruebas unitarias: Se realizaron pruebas unitarias para asegurar la calidad del código.

La aplicación front-end está desplegada en AWS S3 y se distribuye mediante CloudFront (opcional).
URL Front-end: http://gestor-tareas-front.s3-website-sa-east-1.amazonaws.com/

Back-end
El back-end se implementó en Python como funciones serverless utilizando AWS Lambda y API Gateway, y se conecta a una base de datos MongoDB (MongoDB Atlas). Las características principales incluyen:

CRUD para tareas: Funciones Lambda que implementan operaciones GET, POST, PUT y DELETE para gestionar las tareas.

Autenticación simple: Se implementó autenticación basada en token para proteger las operaciones que modifican datos.

Pruebas unitarias: Se desarrollaron pruebas con pytest para asegurar el correcto funcionamiento del back-end.

Documentación de la API: Se creó una especificación OpenAPI para documentar los endpoints.

El back-end está desplegado en AWS Lambda y expuesto a través de API Gateway.
URL Back-end: https://5cvqnneenb.execute-api.sa-east-1.amazonaws.com/Prod/tasks

Despliegue y Arquitectura
Front-end: Desplegado en AWS S3 (y opcionalmente con CloudFront para distribución global).

Back-end: Desplegado como funciones Lambda usando AWS SAM, integradas con API Gateway para exponer la API.

Base de Datos: Utiliza MongoDB Atlas para almacenar las tareas.

Este proyecto demuestra la capacidad de construir y desplegar una solución fullstack utilizando tecnologías modernas y enfoques serverless en AWS, aplicando buenas prácticas de desarrollo y pruebas.
