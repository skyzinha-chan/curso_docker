const express = require( 'express' )
const app = express()
const port = 3000

app.get( '/', ( req, res ) => {
    res.send( 'Hello World! Alterando minha imagem docker' )
} )

app.listen( port, () => {
    console.log( `Executando na porta: http://localhost:${ port }` )
} )