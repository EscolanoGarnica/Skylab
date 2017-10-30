# Express

Express es una libreria para node, para trabajar con servidores.

Como instalar Express:

```Bash
$ npm install -g express
```

Como importar Express:

```Javascript
import express = require('express')
```

Arrancar servidor:

```Javascript
const app = express()
```

### Public & Private

En nuestra web, tendremos información que será pública y otra que sera privada, para ello podemos servir el contenido publico y privado de diferentes formas.

Ejemplo contenido público:

```Javascript
const express = require('express')
const app = express()

app.use(express.static('<folder_name>'))
```

Ejemplo contenido privado:

```Javascript
const express = require('express')
const path = require('path')
const app = express()

app.get('/culquiercosa',(req,res)=>{
    app.sendFile(path.join(__dirname, '/loquesea.html'))
    })
```

### Redirecciones

Como redirigir a un html mediante rutas url's:

```Javascript
const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/helloworld',(req,res)=>{     
    res.redirect('/404.html')    
})
```
En el ejemplo anterior, si alguien accede a la url www.loquesea.com/helloworld le redirigirá a 404.html, al haber definido el "app.use(express.static('public'))", el refirect buscará directamente el 404.html en la carpeta public.

### GET

Para leer información de la url, tenemos 2 formas; query y params, la diferencia esta en la forma de pasarle los datos en la url. 

Ejemplo query:

```Javascript
app.get('/country',(req,res)=>{
    const id = parseInt(req.query.id) // de esta forma cogeriamos el valor del id de una url tal que así: http://www.loquesea.com/contry?id=3
    })
```

Ejemplo params:

```Javascript
app.get('/country/:id',(req,res)=>{
    const id = parseInt(req.params.id) // de esta forma cogeriamos el valor del id de una url tal que así: http://www.loquesea.com/contry/3
    })
```

### POST

Express utiliza un modulo llamado body-parser para el tratamiendo de Post's, para utilizarlo primero hay que instalar el paquete:

```Bash
$ npm install body-parses
```

Una vez instalado lo importamos en nuestro código:

```Javascript
const bodyParser = require('body-parser')
```

Y añadimos el plugin al express mediante el use():

```Javascript
const express = require(express)
const app = express()

app.use(bodyParser.urlencoded({extended:false}))       
app.use(bodyParser.json())      //este no es necesario si no se tratan jason's
```

Ahora, express ya interpretaria una instrucción pasada mediante post y obtenida con req.body:

```Javascript
app.post('/ruta',(req,res)=>{               //notese que se usa el .post
        res.send(JSON.stringify(req.body))
    })
```


__Resources:__
    * [.env or dotenv](https://www.npmjs.com/package/dotenv): paquete para utilizar variables de entorno.