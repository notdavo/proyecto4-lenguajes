class AdminMenuView extends View {
  aulaButton = null
  profesorButton = null
  claseButton = null
  atrasButton = null

  render = (htmlId, htmlString) => {
    View.prototype.render.call(this, htmlId, htmlString)

    this.aulaButton = document.getElementById('aulaButton')
    this.profesorButton = document.getElementById('profesorButton')
    this.claseButton = document.getElementById('claseButton')
    this.atrasButton = document.getElementById('atrasButton')
  }
}