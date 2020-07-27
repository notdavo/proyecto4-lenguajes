window.onload = () => {
    if(!window.openDatabase) {
        alert('Este navegador no soporta el API WebSQL')

        return
    }
    var db = openDatabase('Proyecto-4','1.0','Guia Horarios',2*1024*1024)

    const callback = (tx) => { tx.executeSql(SQLString) }
    const printArgument = (error) => { console.log(error) }
    const successHandler = () => { console.log("Transaccion exitosa") }

    //db.transaction(callback, printArgument, successHandler)

    const queryPrint = (tx,result) => {
        var rows = result.rows    
        
        console.log(result) 
    }

    //db.transaction((tx) => { tx.executeSql(SQLInsertProfesor, ['209990888', 'Milton', 'Arce'], ) }, printArgument, printArgument)

    //db.transaction((tx) => { tx.executeSql(SQLSelectAllProfesores, [], queryPrint) },  printArgument, printArgument)
}