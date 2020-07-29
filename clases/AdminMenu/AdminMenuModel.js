class AdminMenuModel extends Model {
  constructor(htmlId) {
      super(htmlId)
  }

  getHtml = () => {
      return `
      <div id="adminMenu">
        <h2 class="title">
          Administrar Datos
        </h2>
        <button id="aulaButton" class="mainMenuButton">Aulas</button>
        <button id="profesorButton" class="mainMenuButton">Profesores Datos</button>
        <button id="claseButton" class="mainMenuButton">Clases Datos</button>
        <button id="atrasButton" class="mainMenuButton">Atras</button>
      </div>
      `
  }

  getId = () => {
      return Model.prototype.getId.call(this)
  }
}