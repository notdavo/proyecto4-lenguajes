class ConsultaMenuModel extends Model {
  constructor(htmlId) {
      super(htmlId)
  }

  getHtml = () => {
      return `
      <div id="adminMenu">
        <h2 class="title">
          Administrar Datos
        </h2>
        <button id="consulta1Button" class="mainMenuButton">Horario Profesor Datos</button>
        <button id="consulta2Button" class="mainMenuButton">Posible horario de cursos dados</button>
        <button id="consulta3Button" class="mainMenuButton">Posibles horarios por semestre</button>
        <button id="atrasButton" class="mainMenuButton">Atras</button>
      </div>
      `
  }

  getId = () => {
      return Model.prototype.getId.call(this)
  }
}