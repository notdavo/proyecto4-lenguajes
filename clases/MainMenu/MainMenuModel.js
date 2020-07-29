class MainMenuModel extends Model {
  constructor(htmlId) {
      super(htmlId)
  }

  getHtml = () => {
      return `
      <div id="mainMenu">
        <h2 class="title">
          Main menu
        </h2>
        <button id="consultaButton" class="mainMenuButton" onclick>Consulta</button>
        <button id="administrarButton" class="mainMenuButton">Administrar Datos</button>
      </div>
      `
  }

  getId = () => {
      return Model.prototype.getId.call(this)
  }
}