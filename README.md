# NOSQL-FaunaDB
## Alumno: ALBERT APAZA CCALLE 2021071075 
graph TD
    A[Inicio] --> B[Crear Proyecto]
    B --> C[Instalar Dependencias]
    C --> D[Configurar FaunaDB]
    D --> E[Configurar Express]
    E --> F[Definir Rutas API]
    F --> G[Iniciar Servidor]
    G --> H[Probar con Postman]
    
    H --> I[Obtener Colecciones]
    H --> J[Agregar Documentos]
    H --> K[Obtener Documentos]
    H --> L[Eliminar Documentos]
    
    subgraph FaunaDB
        direction TB
        M[Base de Datos]
        N[Colecciones]
        O[Documentos]
    end

    G --> M
    M --> N
    N --> O
