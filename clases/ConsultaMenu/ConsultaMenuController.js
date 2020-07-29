class ConsultaMenuController extends Controller {
  onClickAtras = () => {}
  onClickConsulta1 = () => {}
  onClickConsulta2 = () => {}
  onClickConsulta3 = () => {}

  constructor(model, view) {
      super(model, view)
      this.onClickAtras = null
      
  }

  render = (htmlId, args) => {
    Controller.prototype.render.call(this, htmlId, args)

    this._view.consulta1Button.addEventListener('click', (e) => {
      this.onClickConsulta1()
    })

    this._view.consulta2Button.addEventListener('click', (e) => {
      this.onClickConsulta2()
    })

    this._view.consulta3Button.addEventListener('click', (e) => {
      this.onClickConsulta3   
    })

    this._view.atrasButton.addEventListener('click', (e) => {
      this.onClickAtras()
    })
  }
}