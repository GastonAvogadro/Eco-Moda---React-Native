# EcoModa

Aplicacion en react-native

## Instalaciónes

Descarga el repositorio en tu equipo.

```
git clone https://github.com/No-Country/C9-G44-FT-react-native.git
```

Acceder a la carpeta descargada.

```
cd C9-G44-FT-react-native
```

Hacer las instalaciones correspondientes en el backend.

```
cd backend
npm install
```

Hacer las instalaciones correspondientes en el frontend.

```
cd ..
cd frontend
npm install
```

## Despliegue frontend

Se debe tener instalado Android Studio o la Aplicacion de expo para poder visualizar la app.

```
Android Expo: https://play.google.com/store/apps/details?id=host.exp.exponent&hl=es_BO
```

Si usted tiene instalado y configurado Android Studio y Android Device Manager, ejecute el siguiente comando.

Esto abrira Android Studio y podra visualizar la app en un celular virtual.

```
npm run android
```

Si desea visualizarlo desde su celular, ejecute el siguiente comando

```
npm start
```

A continuacion scanee el QR desde la aplicacion EXPO para visualizar la app.

## Configuraciones

Crear un archivo .env con las variables de entorno correspondientes dentro de la carpeta backend del repositorio.

```
PORT=8000
MONGO=''
JWT_SECRET=''
```

## Despliegue backend

Asegurese de estar parado dentro de la carpeta backend del repositorio. Una vez parado ahi ejecutar el siguiente comando.

```
npm start
```
