# Construir la imagen

Para este caso no vamos a utilizar docker `buildx` es suficiente con el build normal

Carga la imagen localmente usando --load:

`docker build -t jsantamv/docker-graphql:1.0.0 --load .`

# Luego probarlo

`docker container run -p 3000:3000 jsantamv/docker-graphql:1.0.0`


