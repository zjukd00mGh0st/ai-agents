# Frontend del proyecto

El frontend del proyecto se realizo utilizando las siguientes tecnologias:

- React: framework de javascript para crear UI's
- Vite: empaquetador de javascript, rapido y eficiente

La unica ruta que esta expuesta es la **ruta raiz** donde el usuario podra interactuar con el chatbot.

## Ejecutar el proyecto

Para poder ejecutar el proyecto llevar a cabo los siguientes pasos:

1. Se requieren instalar las librerias desde **npm** o el manejador de paquetes de node de preferencia. En mi caso personal estoy usando **pnpm**:

```sh
# Instalar pnpm
npm install --global pnpm
```

2. Instalar las librerias que utiliza el proyecto, declarados en el **package.json**:
```sh
# Instalar librerias
pnpm install
```

3. Ejecutar el servidor mediante el siguiente comando:
```sh
# Ejecutar servidor
pnpm dev
```