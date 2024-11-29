# Todo List App

[English](#english) | [Español](#español)

---

<a name="english"></a>
# Todo List App [English]

A cross-platform todo list application developed with React Native (Expo) and Node.js.

## Features

- ✅ Complete JWT Authentication (register, login, logout)
- 📱 Cross-platform support (iOS, Android, Web)
- 🔄 Real-time task synchronization
- 🎨 Modern and responsive UI
- 🔒 Secure token handling
- ⚡ RESTful API with Express
- 🗄️ MongoDB database

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Expo CLI
- npm or yarn

## Project Setup

### Backend

1. Install dependencies:
```bash
cd backend
npm install
```

2. Configure environment variables:
Create a `.env` file in the `backend` folder:
```env
PORT=5001
MONGODB_URI=mongodb://localhost:27017/todo-app
JWT_SECRET=your_jwt_secret
```

3. Start the server:
```bash
npm run dev
```

### Frontend

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Start the application:
```bash
npm start
```

## Project Structure

```
├── backend/
│   ├── src/
│   │   ├── models/         # MongoDB models
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Custom middleware
│   │   └── index.ts        # Server entry point
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── api/           # API client and configuration
    │   ├── components/    # Reusable components
    │   ├── contexts/      # React contexts (Auth)
    │   ├── screens/       # Application screens
    │   └── App.tsx        # Main component
    └── package.json
```

## API Endpoints

### Authentication

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout

### Tasks

- `GET /api/todos` - Get all tasks
- `POST /api/todos` - Create new task
- `PUT /api/todos/:id` - Update task
- `DELETE /api/todos/:id` - Delete task

## Recent Updates

### v4.1.0
- Improved CORS management for better cross-platform compatibility
- Simplified session management to use JWT only
- Enhanced error handling in API client
- Updated logout logic for better robustness
- Added detailed logs for better debugging
- Improved task UI with clearer visual states

### Bug Fixes
- Fixed CORS issue in logout
- Corrected API response handling in TodoScreen
- Improved authentication error handling
- Optimized token management

## Technologies Used

### Backend
- Node.js with Express
- TypeScript
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- CORS for security

### Frontend
- React Native with Expo
- TypeScript
- Axios for API calls
- AsyncStorage for local storage
- React Navigation
- React Context for global state

## Security

- JWT tokens for authentication
- Passwords hashed with bcrypt
- CORS configured for specific origins
- Secure token handling in AsyncStorage
- Authentication middleware in protected routes

## Planned Improvements

- [ ] Implement refresh tokens
- [ ] Add task categories
- [ ] Offline support
- [ ] Push notifications
- [ ] Light/dark themes
- [ ] Unit and integration tests
- [ ] Performance optimization
- [ ] Real-time synchronization with WebSockets

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is under the MIT License. See the `LICENSE` file for more details.

---

<a name="español"></a>
# Todo List App [Español]

Una aplicación de lista de tareas multiplataforma desarrollada con React Native (Expo) y Node.js.

## Características

- ✅ Autenticación JWT completa (registro, inicio de sesión, cierre de sesión)
- 📱 Soporte multiplataforma (iOS, Android, Web)
- 🔄 Sincronización en tiempo real de tareas
- 🎨 Interfaz de usuario moderna y responsive
- 🔒 Manejo seguro de tokens
- ⚡ API RESTful con Express
- 🗄️ Base de datos MongoDB

## Requisitos Previos

- Node.js (v14 o superior)
- MongoDB
- Expo CLI
- npm o yarn

## Configuración del Proyecto

### Backend

1. Instalar dependencias:
```bash
cd backend
npm install
```

2. Configurar variables de entorno:
Crear un archivo `.env` en la carpeta `backend`:
```env
PORT=5001
MONGODB_URI=mongodb://localhost:27017/todo-app
JWT_SECRET=tu_secreto_jwt
```

3. Iniciar el servidor:
```bash
npm run dev
```

### Frontend

1. Instalar dependencias:
```bash
cd frontend
npm install
```

2. Iniciar la aplicación:
```bash
npm start
```

## Estructura del Proyecto

```
├── backend/
│   ├── src/
│   │   ├── models/         # Modelos de MongoDB
│   │   ├── routes/         # Rutas de la API
│   │   ├── middleware/     # Middleware personalizado
│   │   └── index.ts        # Punto de entrada del servidor
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── api/           # Cliente API y configuración
    │   ├── components/    # Componentes reutilizables
    │   ├── contexts/      # Contextos de React (Auth)
    │   ├── screens/       # Pantallas de la aplicación
    │   └── App.tsx        # Componente principal
    └── package.json
```

## API Endpoints

### Autenticación

- `POST /api/auth/register` - Registro de usuario
- `POST /api/auth/login` - Inicio de sesión
- `POST /api/auth/logout` - Cierre de sesión

### Tareas

- `GET /api/todos` - Obtener todas las tareas
- `POST /api/todos` - Crear nueva tarea
- `PUT /api/todos/:id` - Actualizar tarea
- `DELETE /api/todos/:id` - Eliminar tarea

## Actualizaciones Recientes

### v4.1.0
- Mejorada la gestión de CORS para mejor compatibilidad multiplataforma
- Simplificada la gestión de sesiones para usar solo JWT
- Mejorado el manejo de errores en el cliente API
- Actualizada la lógica de logout para mayor robustez
- Añadidos logs detallados para mejor debugging
- Mejorada la UI de las tareas con estados visuales más claros

### Correcciones de Bugs
- Solucionado problema de CORS en logout
- Corregido manejo de respuestas API en TodoScreen
- Mejorado manejo de errores en autenticación
- Optimizada la gestión de tokens

## Tecnologías Utilizadas

### Backend
- Node.js con Express
- TypeScript
- MongoDB con Mongoose
- JWT para autenticación
- bcryptjs para hash de contraseñas
- CORS para seguridad

### Frontend
- React Native con Expo
- TypeScript
- Axios para llamadas API
- AsyncStorage para almacenamiento local
- React Navigation
- React Context para estado global

## Seguridad

- Tokens JWT para autenticación
- Contraseñas hasheadas con bcrypt
- CORS configurado para orígenes específicos
- Manejo seguro de tokens en AsyncStorage
- Middleware de autenticación en rutas protegidas

## Próximas Mejoras Planificadas

- [ ] Implementar refresh tokens
- [ ] Añadir categorías para tareas
- [ ] Soporte offline
- [ ] Notificaciones push
- [ ] Temas claros/oscuros
- [ ] Tests unitarios y de integración
- [ ] Optimización de rendimiento
- [ ] Sincronización en tiempo real con WebSockets

## Contribución

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.
