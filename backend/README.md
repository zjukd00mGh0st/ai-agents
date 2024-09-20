# Backend del proyecto

El backend del proyecto se realizo utilizando las siguientes tecnologias:

- FastAPI: para la creacion de la API REST
- Gemini: para la creacion del chatbot personalizado


Las rutas REST que estan expuestas son:

|Endpoint|Proposito|
|:------:|:-------:|
|GET /   | Healthcheck de la API|
|POST /api/agents/chat|Interactuar con el chatbot|


## Ejecutar el proyecto

Para poder ejecutar el proyecto se deben de llevar a cabo los siguientes pasos:

1. Instalar librerias de python necesarias
```sh
pip install -r ./requirements.txt
```

2. Ejecutar el servidor mediante el siguiente comando:
```sh
python main.py
```

Es importante tener en cuenta que se requiere usar un archivo .env con los siguientes valores:

```txt
HOST=<host>
PORT=<port>
GEMINI_API_KEY=<api-key>
```
