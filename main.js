/*
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
*/



const container = new ContainerController(new ContainerModel('container'), new ContainerView())
const adminMenu = new AdminMenuController(new AdminMenuModel(), new AdminMenuView())
const mainMenu = new MainMenuController(new MainMenuModel(), new MainMenuView())
const consultaMenu = new ConsultaMenuController(new ConsultaMenuModel(), new ConsultaMenuView())

const onClickConsulta = () => { container.changeContent(consultaMenu) }
const onClickAdministrar = () => { container.changeContent(adminMenu) }
const onAdminMenuClickAtras = () => { container.changeContent(mainMenu) }
const onConsultaMenuClickAtras = () => { container.changeContent(mainMenu) }

mainMenu.onClickConsulta = onClickConsulta
mainMenu.onClickAdministrar = onClickAdministrar
adminMenu.onClickAtras = onAdminMenuClickAtras
consultaMenu.onClickAtras = onAdminMenuClickAtras

window.onload = () => {
    /*setUpDatabase()

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
    ])*/

    container.changeContent(mainMenu)
}