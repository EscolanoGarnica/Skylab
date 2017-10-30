# PUG

__Recurso:__ [conversor html to pug](http://html2jade.org/).

Pug es un framework para Express, que permite renderizar el html que se genera en el servidor de forma escueta y sencilla.

Hay que instalarlo en el proyecto:

```bash
$ npm install --save pug
```

Utilizarlo en Express(no necesita require('')):

```Javascript
app.set('view engine,'pug')
```

Crear en el proyecto un directorio 'views' y dentro de este un 'index.pug'

Ejemplo del contenido del index.pug, las __tabulaciones son importantes__:

```Pug
html
    head
        title=title
    body
        h1=message
```

Agregar el contenido anterior en express:

```Javascript
const name = 'Pepe'
res.render('index',{title: 'Home Page', message: `Hello, ${name}!`})
```

