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

### GET

Para coger información de la url, tenemos 2 formas; query y params, la diferencia esta en la forma de pasarle los datos en la url. 

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
