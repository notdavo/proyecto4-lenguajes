class HtmlRenderer {
    constructor(mainTagId) {
        this.mainTagId = mainTagId
    }



    renderProfesores = (profesores) => {
        let filas = ''

        for (let i = 0; i < profesores.length; i++) {
            const element = profesores[i];
            filas += `
            <tr>
                <th>${element.nombre}</th>
                <th>${element.apellido}</th>
                <th>${element.cedula}</th>                
            </tr>`
        }

        const table = `
        <table style="width:100%">
            <tr class="headerTable">
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Cedula</th>
            </tr>
            ${filas}
        </table>`
        
        const mainTag = document.querySelector(`#${this.mainTagId}`)
        
        mainTag.innerHTML = table
    }
  }