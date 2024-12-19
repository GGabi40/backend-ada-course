# BACKEND con ADATECH

## Arrancar con npm:
    npm init
o utilizar:

    npm init -y

después utilizar:

    npm install

----

## Paquetes utilizados:

* dotenv: Utilizado para manipular variables de ambiente

        npm install dotenv

        npm docs dotenv

    - Crear un archivo __.env__ y agregarlo al __.gitignore__ para evitar que se haga pública la información del archivo.
    - Es muy importante para mantener la seguridad de los datos __sensibles__.
    - Ejemplo de un .env (DATOS FALSOS):

            NODE_ENV=development 
            S3_BUCKET=meus-assets
            API_KEY=7eefdb26-2730-426f-bf15-38cdf12aa6f0
            DATABASE_USER=root
            DATABASE_PASSWORD=10212jasoaos1LASA

    - __NODE_ENV__: Define el entorno de la aplicación.
    - __S3_BUCKET__: A qué nube se va a almacenar el archivo.
    - __API_KEY__: Clave de acceso para autenticar solicitudes a una API.
    - __DATABASE_USER__: Nombre de usuario para acceder a BBDD.
    - __DATABASE_PASSWORD__: Contraseña asociada al nombre del usuario para acceder a la BBDD.