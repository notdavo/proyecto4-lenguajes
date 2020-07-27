var session = pl.create()

session.consult(backend)

var consulta = "profesor(X,Y)."

session.query(consulta)

var result = true

while(result !== false){
    session.answer((res) => {
        result = res
    
        if(res === false) return
    
        console.log(pl.format_answer(res))
    })
}

const tablaProfesoresRenderer = new HtmlRenderer('main')

window.onload = () => {
    setUpDatabase()

    tablaProfesoresRenderer.renderProfesores([
        { 
            nombre: 'Milton',
            apellido: 'Arce',
            cedula: '209990888'
        },{ 
            nombre: 'Juan',
            apellido: 'Rodriguez',
            cedula: '208880777'
        },
    ])

}