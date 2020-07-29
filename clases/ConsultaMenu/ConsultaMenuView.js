class ConsultaMenuView extends View {
  consulta1Button = null
  consulta2Button = null
  consulta3Button = null
  atrasButton = null

  render = (htmlId, htmlString) => {
    View.prototype.render.call(this, htmlId, htmlString)

    this.consulta1Button = document.getElementById('consulta1Button')
    this.consulta2Button = document.getElementById('consulta2Button')
    this.consulta3Button = document.getElementById('consulta3Button')
    this.atrasButton = document.getElementById('atrasButton')
  }
}