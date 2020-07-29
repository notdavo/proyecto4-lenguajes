class MainMenuController extends Controller {
  onClickAdministrar = () => {}
  onClickConsulta = () => {}

  constructor(model, view) {
      super(model, view)
  }

  render = (htmlId, args) => {
    Controller.prototype.render.call(this, htmlId, args)

    this._view.consultaButton.addEventListener('click', (e) => {
      this.onClickConsulta()
    })

    this._view.administrarButton.addEventListener('click', (e) => {
      this.onClickAdministrar()
    })
  }
}