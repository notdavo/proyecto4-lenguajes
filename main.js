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
