# MongoDB

Como instalas MongoDb:
    - Descargar el .tgz de la página oficial.
    - Descomprimirlo.

Poner la ruta de los binarios en la variable PATH:

```Bash

```


### Ejecutar MongoDb

Server:

```Bash
$ mongod
```

Cliente(en otro terminal):

```
$ mongo
```

### Comandos Cliente Mongo

Mostrar las db existentes:

```Bash
$ show dbs
```

Crear una base de datos(db):

```Bash
$ use <name-new-db>
```

Cambiar a una db en concreto:

```Bash
$ use <db-existente>    //si no existe te la crea
```

Insertar contenido en una coleccion:

```Bash
$ db.nombreColeccion.insert({marca:'Seat', modelo:'Leon'})
```

Mostrar las colecciones de la db:

```Bash
$ show collections
```

or

```Bash
$ show tables
```

Mostrar el contenido de una colección:

```Bash
$ db.nombreColeccion.find()
```

Eliminar una db:

```Bash
\\primero cambiamos a la db que queremos eliminar con el: $ use <db-name>, luego:
$ db.dropDatabase()
```

Mostrar el número de filas de una coleccion:

```Bash
$ db.nombreColeccion.count()
```


