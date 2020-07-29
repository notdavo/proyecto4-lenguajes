class AdminMenuController extends Controller {
  onClickAula = () => {}
  onClickProfesor = () => {}
  onClickClase = () => {}
  onClickAtras = () => {}

  constructor(model, view) {
      super(model, view)
      this.onClickAtras = null
      
  }

  render = (htmlId, args) => {
    Controller.prototype.render.call(this, htmlId, args)

    this._view.aulaButton.addEventListener('click', (e) => {
      this.onClickAula()
    })

    this._view.profesorButton.addEventListener('click', (e) => {
      this.onClickProfesor()
    })

    this._view.claseButton.addEventListener('click', (e) => {
      this.onClickClase()
    })

    this._view.atrasButton.addEventListener('click', (e) => {
      this.onClickAtras()
    })
  }
}